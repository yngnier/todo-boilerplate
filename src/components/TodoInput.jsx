import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodo, todoList }) => {
  const [inputValue, setInputValue] = useState("");
  // console.log(`현재값 >>  ${inputValue}`);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimed = inputValue.trim();

    if (trimed === "") {
      //! 빈값이 오면 서밋이 안되게해라
      return;
    }

    if (todoList.some((ele) => ele.text === trimed)) {
      alert("중복된 투두가 있습니다.");
      return;
    }

    const newItem = {
      id: Date.now(),
      text: trimed,
      isComplete: false,
    };
    addTodo(newItem);
    setInputValue("");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <section>
      <div className="form">
        <form action="/" method="get" onSubmit={handleSubmit}>
          <div className="form-wrap">
            <input
              type="text"
              className="form__element"
              name="title"
              placeholder="Write a new todo"
              onChange={handleChange}
              value={inputValue}
            />
            <button className="form__button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TodoInput;
