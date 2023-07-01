import React, { useState } from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";

const Title = (
  <header>
    <h2 className="todo__title">What’s the Plan for Today?</h2>
  </header>
);

const Home = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const toggleCompleteStatus = (id, isComplete) => {
    const newList = todoList.map((ele) => {
      if (ele.id === Number(id)) {
        return { ...ele, isComplete };
      }
      return ele;
    });
    // if (ele.id === Number(id)) {
    //     ele.isComplete = true;
    //   }
    // TODO : if ele[n].id == id: ele[n].isComplete = true
    // TODO : todolist에서도 item로 넘겨야됨
    setTodoList(newList);
    return;
  };

  const deleteTodo = (id) => {
    console.log(`id ${id}`);
    const newList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newList);
  };

  return (
    <>
      <div className="todo">
        {/* START: header */}
        {Title}
        <TodoInput addTodo={addTodo} todoList={todoList} />
        <TodoList
          todoList={todoList}
          toggleCompleteStatus={toggleCompleteStatus}
          deleteTodo={deleteTodo}
        />
        {/* END: header */}
        {/* END: form */}
      </div>
    </>
  );
};

export default Home;
