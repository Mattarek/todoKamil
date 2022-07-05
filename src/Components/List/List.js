import Item from "../Item/";
import React from "react";

export const List = (props) => {
  const { state } = props;

  return state.map(
    ({ id, name, surname, age, isActive, toggleTask, deleteTask }) => (
      <li key={id}>
        {age >= 18 ? (
          <Item
            id={id}
            name={name}
            surname={surname}
            age={age}
            isActive={isActive}
            toggleTasks={() => toggleTask(id)}
            deleteTasks={() => deleteTask(id)}
          />
        ) : null}
      </li>
    )
  );
};

export default List;
