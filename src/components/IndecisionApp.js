import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component{

    state = {
        options: [],
        selected: undefined
    }

    handlePick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNumber]
        this.setState(() => ({selected: option}))
    }

    handleAddOption = (option) => {
        console.log(option)
        if(!option){
            return "Handle valid option"
        }else if(this.state.options.indexOf(option) > -1){
            return "Option already exists"
        }
        this.setState((prevState) => ( {options: prevState.options.concat([option])} ) )
    }

    handleDeleteOption = (option) => {
        console.log("delete option", option)
        this.setState((prevState) => ({
            options: prevState.options.filter((el) => el !== option)
        }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({options: []}))
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({selected: undefined}))
    }

    /*constructor(props){
        super(props)
        
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }*/

    componentDidMount(){
        const json = localStorage.getItem("options")
        const options = JSON.parse(json)

        if(options){
            this.setState(() => ({options}))
        }
    }
    
    componentDidUpdate(prevProp, prevState) {
        if(prevProp.options && prevProp.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }
        console.log("Component did update", prevProp, prevState)
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    /*handleAddOption(option){
        if(!option){
            return "Handle valid option"
        }else if(this.state.options.indexOf(option) > -1){
            return "Option already exists"
        }
        console.log(option)
        this.setState((prevState) => ( {options: prevState.options.concat([option])} ) )
    }*/

    /*handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNumber]
        console.log(option)
    }*/

    /*handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }*/

    /*handleDeleteOption(option) {
        console.log("delete option", option)
        this.setState((prevState) => ({
            options: prevState.options.filter((el) => el !== option)
        }))
    }*/

    render(){
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options 
                        options={this.state.options} 
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    
                    <OptionModal 
                        selectedOption={this.state.selected}
                        handleClearSelectedOption={this.handleClearSelectedOption}
                    />
                </div>
            </div>
        )
    }
}