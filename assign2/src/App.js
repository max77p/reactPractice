import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dogs from './ValidComp/ValidComp';
import Char from './Char/Char';

class App extends Component {
  state={
    userInput:''
  }

  changelistener=(event)=>{
    this.setState({userInput:event.target.value})
  }

  deletechar=(index)=>{
      const text=this.state.userInput.split('');
      text.splice(index,1);
      const updated=text.join('');
      this.setState({userInput:updated});
  }

  render() {
    const charlist= this.state.userInput.split('').map((x,index)=>{
      return <Char character={x} key={index}
      clicked={()=>this.deletechar(index)}/>
    })
    return (
      <div>
      <input type="text" 
      onChange={this.changelistener} 
      value={this.state.userInput}
      />
      <p>{this.state.userInput}</p>
      <Dogs textlength={this.state.userInput.length}></Dogs>
      
      {charlist}
      </div>
    );
  }
}

export default App;
