import React from "react";
import { ReactComponent as DeleteIcon } from "../../Icons/bin.svg";
import "./Todo.scss";

const Todo = ({ text, completed, onToggleCompleted, onDelete }) => (
  <>
    <input
      type="checkbox"
      className="TodoList__checkbox"
      checked={completed}
      onChange={onToggleCompleted}
    />
    <p className="TodoList__text">{text}</p>
    <button className="Button__ico" onClick={onDelete} title="Delete?">
      <DeleteIcon className="DeleteIcons" />
    </button>
  </>
);

export default Todo;
