import React from 'react'

export default class AddOption extends React.Component{
    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault()
        const optionVal = e.target.optionName.value
        const error = this.props.handleAddOption(optionVal)
        this.setState(() => ({error}))
    }


    /*constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }*/  
    
    /*handleAddOption(e){
        e.preventDefault()
        const optionVal = e.target.optionName.value
        const error = this.props.handleAddOption(optionVal)
        this.setState(() => ({error}))
    }*/

    render(){
        return (
            <div>
                {this.state.error && <div><p className='add-option-error'>{this.state.error}</p></div>}
                <form className='add-option' onSubmit={this.handleAddOption}>
                    <input className='add-option__input' name="optionName" placeholder="option"></input>
                    <button className='button'>Submit</button>
                </form>
            </div>
        )
    }
}