class IndecisionApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
    }

    componentDidMount(){
        const json = localStorage.getItem("options")
        const options = JSON.parse(json)

        if(options){
            this.setState(() => ({options}))
        }
    }
    
    componentDidUpdate(prevProp, prevState) {
        if(prevProp.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }
        console.log("Component did update", prevProp, prevState)
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    handleAddOption(option){
        if(!option){
            return "Handle valid option"
        }else if(this.state.options.indexOf(option) > -1){
            return "Option already exists"
        }
        console.log(option)
        this.setState((prevState) => ( {options: prevState.options.concat([option])} ) )
    }

    handlePick(){
        const randomNumber = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNumber]
        console.log(option)
    }

    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }

    handleDeleteOption(option) {
        console.log("delete option", option)
        this.setState((prevState) => ({
            options: prevState.options.filter((el) => el !== option)
        }))
    }

    render(){
        const subtitle = 'Put your life in the hands of a computer'
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

//Componenti Stateless sono piu veloci perche non devono gestire lo stato
//Non gestiscono il lifecycle del componente (fire some methods ecc..)
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>} 
        </div>
    )
}

Header.defaultProps = {
    title: "Indecision App"
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled = {!props.hasOptions} 
                onClick={props.handlePick}
            >
            What should I do?</button>
        </div>
    )
}

class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    
    handleAddOption(e){
        e.preventDefault()
        const optionVal = e.target.optionName.value
        const error = this.props.handleAddOption(optionVal)

        this.setState(() => ({error})
             
        )
    }

    render(){
        return (
            <div>
                {this.state.error && <div>{this.state.error}</div>}
                <form onSubmit={this.handleAddOption}>
                    <input name="optionName" placeholder="option"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const Options = (props) => { 
        return (
            <div>
            {props.options.map((el) => (
                <Option 
                    key={el} 
                    optionText={el}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            </div>
        )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={() => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove
            </button>
        </div>
    )
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))