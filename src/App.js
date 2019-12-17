import React from 'react';
import MainForm from './MainForm/MainForm';
import Output from './Output/Output';

import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInuput: '',
            list: []
        };
    }

    changeHandler = event => {
        this.setState({ userInuput: event.target.value });
    };

    newList = () => {
        let tsl = this.state.list;
        tsl.push(<div className="newDiv" />);
        this.setState({ list: tsl });
        return <div> ny div</div>;
    };

    render() {
        return (
            <div className="App">
                <MainForm
                    changeHandler={this.changeHandler}
                    value={this.state.userinput}
                />
                <Output userInput={this.state.userInuput}></Output>
                <button onClick={this.newList}>ny lista</button>
            </div>
        );
    }
}

export default App;
