import React, {Component} from 'react';
import {Button} from '@material-ui/core';

class App extends Component{
    render(){
        return(
        <div>
            <h1>My React App</h1>
            <Button color="primary">Hello React</Button>
        </div>);
    }
}

export default App;