import React from "react";
import Button from "../Button/";
import "../../App.css";

export const Item = ({ name, surname, isActive, toggleTasks, deleteTasks }) => {
  const text = `${name} ${surname}`;

  return (
    <div>
      <span style={isActive ? { fontWeight: "bold" } : null}>{`${text}`}</span>
      <Button isActive={isActive} children={"Toggle"} onClick={toggleTasks} />
      <Button isActive={isActive} children={"Delete"} onClick={deleteTasks} />
    </div>
  );
};

export default Item;
