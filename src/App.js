import "./App.css";
import List from "./Components/List/index";
import React, { useState, useEffect } from "react";
import Button from "./Components/Button/";
import FetchState from "./Components/FetchState";

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
  return { id, isActive: false, ...item };
});

const arrayFiltered = myDataToShow.filter((name) => name.age >= 18);

const App = () => {
  const [state, setMyState] = useState(arrayFiltered);
  const [isFetching, setIsFetching] = useState(false);
  const [myDataFromFetch, setMyData] = useState([]);

  const deleteTasks = (taskId) => {
    const arrayFiltered = state.filter((item) => {
      if (item.id === taskId) {
        console.log(`Usunięto użytkownika ${item.name}, ${item.surname}`);
      }
      return item.id !== taskId;
    });

    return setMyState(() => arrayFiltered);
  };

  const toggleTasks = (taskId) => {
    const arrayFiltered = state.map((item) =>
      item.id === taskId
        ? { ...item, isActive: !item.isActive }
        : { ...item, isActive: (item.isActive = false) }
    );
    return setMyState(() => arrayFiltered);
  };

  const addTaskToState = () => {
    const newArrayWithJan = state.concat({
      id: Math.random(),
      name: "Jan",
      surname: "Kowalski",
    });

    return setMyState(() => newArrayWithJan);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const response = await FetchState("https://pokeapi.co/api/v2/pokemon");
        setMyData(response);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Button children={"Add"} onClick={addTaskToState} />
      <List state={state} toggleTasks={toggleTasks} deleteTasks={deleteTasks} />
      <div>====================================================</div>
      {!isFetching ? (
        myDataFromFetch &&
        myDataFromFetch.map((item) => (
          <li key={item.url}>
            {item.name} {item.url}
          </li>
        ))
      ) : (
        <p>data is loading . . .</p>
      )}
    </div>
  );
};

export default App;
