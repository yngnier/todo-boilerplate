import "./style/pages.scss";
import "./style/todo.scss";

import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import TodoDetails from "./pages/TodoDetails";

function App() {
  return (
    <>
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<TodoDetails />}>
            <Route path=":id" element={<TodoDetails />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
