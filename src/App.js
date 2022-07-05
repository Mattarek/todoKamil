import "./App.css";
import List from "./Components/List/index";
import React, { useState } from "react";

const data = {
  1: {
    name: "john",
    surname: "Smith",
    age: 16,
  },
  2: {
    name: "Will",
    surname: "Johanson",
    age: 35,
  },
  3: {
    name: "Albert",
    surname: "Johanson",
    age: 15,
  },
  4: {
    name: "Kamil",
    surname: "Johanson",
    age: 85,
  },
  5: {
    name: "Marcin",
    surname: "Johanson",
    age: 65,
  },
  6: {
    name: "Dawid",
    surname: "Johanson",
    age: 25,
  },
};

const myData = Object.values(data);
const myDataToShow = myData.map((item, id) => {
  return { id, ...item, isActive: false };
});

const myState = { ...myDataToShow };
const state = Object.values(myState);

const toggleTasks = (taskId) => {};

const deleteTask = (taskId) => {
  console.log(taskId);
  state.filter((item) => console.log(item.id));
  const arrayFiltered = state.filter((item) => item.id !== taskId);
  console.log(arrayFiltered);
  return arrayFiltered;
};

const App = () => {
  return (
    <div className="App">
      <List state={state} toggleTasks={toggleTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
