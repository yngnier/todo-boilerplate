import React from "react";
import { NavLink, useParams } from "react-router-dom";

const TodoDetails = (props) => {
  let { id } = useParams();
  return (
    <>
      <div>
        <NavLink to={`/edit/${id}`}> TodoDetails {id}</NavLink>
      </div>
    </>
  );
};

export default TodoDetails;
