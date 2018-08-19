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
    otherState:'some other value' ,
    showPersons:false
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


togglePerson=()=>{
const doesShow=this.state.showPersons;
this.setState({showPersons: !doesShow})
}


  render() {
    const style={
      backgroundColor: 'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px'
    };

    let persons=null;

    if(this.state.showPersons){
        persons = (
                  <div>
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
        )
    }
    return (
      <div className="App">
       <h1>Hi, Im a react dev</h1>
       <h1>another heading</h1>
       <button  style={style}
       onClick={this.togglePerson}>swtich Name</button>
      {persons}
      </div>
    );
  }
}

export default App;
