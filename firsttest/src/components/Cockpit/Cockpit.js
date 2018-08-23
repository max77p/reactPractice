import React from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignClasses = [];
  let btnClass = "";
  btnClass = classes.Red;

  if(props.showPersons){
      btnClass=classes.Red;
  }
  if (props.persons.length <= 2) {
    assignClasses.push(classes.red); //classes is red
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.apptitle}</h1>
      <p className={assignClasses.join(" ")}>another heading</p>
      <button className={btnClass} onClick={props.clicked}>
        swtich Name
      </button>
    </div>
  );
};

export default cockpit;
