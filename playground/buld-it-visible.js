
/*let toggle = false

const toggleText = () => {
    toggle = !toggle
    renderApp()
}

const appRoot = document.getElementById("app");



const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleText}>{toggle ? "Hide Details" : "Show Details"}</button>
            {toggle && <p>pipo</p>}
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()*/

class ToggleVisibility extends React.Component{
    constructor(props){
        super(props)
        this.handleVisibility = this.handleVisibility.bind(this)
        this.state = {
            buttonText: "Show Content",
            visibile: false
        }
    }

    handleVisibility(){
        this.setState((prevState) => {
            if(prevState.visibile){
                return {
                    buttonText: "Show Content",
                    visibile: false
                }
            }else{
                return {
                    buttonText: "Hide Content",
                    visibile: true
                }
            }
        })
    }
    render(){
        return (
            <div>
                <h1>Toggle Element</h1>
                <button onClick={this.handleVisibility}>{this.state.buttonText}</button>
                {this.state.visibile && <p>Some Content</p>}
            </div>
            
        )
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById("app"))