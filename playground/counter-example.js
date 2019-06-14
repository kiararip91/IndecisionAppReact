/*const addOne = () => {
    count++
    renderCounterApp()
}

const minusOne = () => {
    count--
    renderCounterApp()
}

const reset = () => {
    count = 0
    renderCounterApp()
}

let count = 0
const myId = "some-id"

const renderCounterApp = () => {
    const templateTwo = (
        <div>
           <h1>Count: {count}</h1>
           <button onClick={addOne} id={myId} className="class">+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp()*/

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.addOne = this.addOne.bind(this)
        this.subtractOne = this.subtractOne.bind(this)
        this.resetCoounter = this.resetCoounter.bind(this)
        this.state = {
            count: 0
        }
    }

    componentDidMount(){
        const json = localStorage.getItem("count")
        const count = JSON.parse(json) ? JSON.parse(json) : 0
        this.setState(() => ({count}))
    }

    componentDidUpdate(prevOptions, prevState){
        if(this.state.count !== prevState.count)
        localStorage.setItem("count", JSON.stringify(this.state.count))
    }

    addOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        })
    }

    subtractOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }

    resetCoounter(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.subtractOne}>-1</button>
                <button onClick={this.resetCoounter}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count={3} />, document.getElementById("app"))
