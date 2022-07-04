import React from "react";
import Button from "../Button/";
import "../../App.css";

const toggleTasks = () => {};
const deleteTasks = () => {};

export const Item = ({ id, name, surname }) => {
  return (
    <div>
      <span>{`${name} ${surname}`}</span>
      <Button children={"Toggle"} onClick={toggleTasks} />
      <Button children={"Delete"} onClick={deleteTasks} />
    </div>
  );
};

export default Item;
