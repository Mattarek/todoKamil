import React from "react";
import Item from "../Item/";
export const List = (props) => {
  const { state, deleteTasks, toggleTasks, fetchData } = props;

  return state.map(({ id, name, surname, age, isActive }) => {
    return (
      <li key={id}>
        {
          <Item
            name={name}
            surname={surname}
            isActive={isActive}
            toggleTasks={() => toggleTasks(id)}
            deleteTasks={() => deleteTasks(id)}
            fetchingData={fetchData}
          />
        }
      </li>
    );
  });
};

export default List;
