import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, toggleCompleteStatus, deleteTodo }) => {
  return (
    <>
      <section>
        <ul className="todo__list">
          {todoList.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.id}
              toggleCompleteStatus={toggleCompleteStatus}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default TodoList;
