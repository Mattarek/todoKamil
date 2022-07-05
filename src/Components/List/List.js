import React from "react";
import Item from "../Item/";

export const List = (props) => {
  const { state, deleteTasks, toggleTasks } = props;
  return state.map(({ id, name, surname, age, isActive }) => (
    <li key={id}>
      {
        <Item
          id={id}
          name={name}
          surname={surname}
          age={age}
          isActive={isActive}
          toggleTasks={() => toggleTasks(id)}
          deleteTasks={() => deleteTasks(id)}
        />
      }
    </li>
  ));
};

export default List;
