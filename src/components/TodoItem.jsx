import React from "react";
import { GoCheck } from "react-icons/go";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";

const TodoItem = ({ todo, toggleCompleteStatus, deleteTodo }) => {
  const { id, text, isComplete } = todo;

  const handleOnChecked = (e) => {
    // console.log(e.target.checked);
    toggleCompleteStatus(id, e.target.checked);
  };

  const handleDelete = (e) => {
    deleteTodo(id);
  };

  const handleEdit = (e) => {
    alert("HandleEdit");
  };

  return (
    <li className="todo__item">
      {/* <div className='todo__content complete'> */}
      <div className={`todo__content ${isComplete ? "complete" : ""}`}>
        <div className="todo__item-check">
          <label>
            <input type="checkbox" onChange={handleOnChecked} />
            <i className="todo__item-check-icon" />
            <GoCheck className="todo__item-check-icon complete" />
            <span className="todo__content-text">{text}</span>
          </label>
        </div>
        <div className="todo__item-buttonarea">
          <Link to={`/edit`} className="todo__item-button">
            <TiEdit
              className="todo__item-button-icon update"
              onClick={handleEdit}
            />
          </Link>
          <button
            type="button"
            className="todo__item-button"
            onClick={handleDelete}
          >
            <RiCloseCircleLine className="todo__item-button-icon delete" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
