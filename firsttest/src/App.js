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

  deletePersonHandler=(personIndex)=>{
    const persons=[...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
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
                    {this.state.persons.map((person,index)=>{
                      return <Person 
                      click={()=>this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age}/>
                    })}
                    {/* <Person 
                    name={this.state.persons[0].name} 
                    age={this.state.persons[0].age}/>
                    <Person 
                    name={this.state.persons[1].name} 
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this,'maxisguy')}
                    changed={this.nameChangedHandler}>My hobbies: Racing</Person>
                    <Person 
                    name={this.state.persons[2].name} 
                    age={this.state.persons[2].age}/> */}
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
