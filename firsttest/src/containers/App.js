import React, { Component } from "react";
// import logo from './logo.svg';
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  //extends means to inherit from component
  state = {
    persons: [
      {
        id: "dfafds",
        name: "Max",
        age: 28
      },
      {
        id: "adfsa",
        name: "Ma",
        age: 20
      },
      {
        id: "adfsv",
        name: "M",
        age: 2
      }
    ],
    otherState: "some other value",
    showPersons: false
  }; //state managed from inside a component

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    console.log(personIndex);
    const person = {
      ...this.state.persons[personIndex] // spread operator distributes all the props in this object
    };
    console.log(person);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePerson = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    

    if (this.state.showPersons) {
      persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }
    return (
      <div className={classes.App}>
        <Cockpit showPersons={this.state.showPersons}
        persons={this.state.persons}
        clicked={this.togglePerson}
        apptitle={this.props.title}/>
        {persons}
      </div>
    );
  }
}

export default App;
