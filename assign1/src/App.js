import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state={
    username:
      {
      name:"percy"
      }
  }

  changeState=(event)=>{
    this.setState({username: 
        {
         name: event.target.value
        }
      }
    )
  }
  render() {
    return (
      <div className="App">
      <UserOutput name={this.state.username.name}></UserOutput>
      <UserInput name={this.state.username.name} changed={this.changeState}></UserInput>
      </div>
    );
  }
}

export default App;
