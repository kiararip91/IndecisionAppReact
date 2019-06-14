console.log("app.js is running!") 

const app = {
    title: "Indecision App",
    subtitle: "My first React application",
    options: []
}

function renderOptions(options){
    if(options && options.length > 0){
        return "Here are your options";
    }else{
        return "No Options";
    }
}

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.option.value
    
    if(option){
        app.options.push(option)
        e.target.option.value = ''
    }

    renderApp()
}

const removeAll = () => {
    app.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNumber]
    console.log(option)
}

const user = {
    name: "Chiara",
    age: 28,
    loc: "London"
}

function getLocation(location){
    if(location){
        return <p>Location {location}</p>;
    }
}

const appRoot = document.getElementById("app");


const renderApp = () => {
    // JSX JavaScript XML
    const template = (
        <div>
            {app.title && <h1>{app.title}</h1>}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{renderOptions(app.options)}</p>
            <ol>
            {
                app.options.map((option) => <li key={option} >{option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp()