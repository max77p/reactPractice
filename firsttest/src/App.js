import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {//extends means to inherit from component
  state={
    persons: [
      {
        name:'Max',age:28
      },
      {
        name:'Ma',age:20
      },
      {
        name:'M',age:2
      }
     
    ],
    otherState:'some other value' 
  } //state managed from inside a component

  switchNameHandler=(newName)=>{
    // console.log("test");
    this.setState({ persons: [
      {
        name:newName,age:28
      },
      {
        name:'Manau',age:20
      },
      {
        name:'Moses',age:27
      }
    ]})//setstate takes object as argument
  }

  nameChangedHandler=(event)=>{
    this.setState({ persons: [
      {
        name:"max",age:28
      },
      {
        name:event.target.value,age:20
      },
      {
        name:'Moses',age:27
      }
    ]})
  }
  render() {
    const style={
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px'
    };
    return (
      <div className="App">
       <h1>Hi, Im a react dev</h1>
       <h1>another heading</h1>
       <button  style={style}
       onClick={()=>this.switchNameHandler('percyyay')}>swtich Name</button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this,'maxisguy')}
       changed={this.nameChangedHandler}>My hobbies: Racing</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
