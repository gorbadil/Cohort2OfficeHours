import { useState } from "react";
import "./App.css";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const handleNewTodoInput = (e) => {
    setNewTodo(e.target.value);
  };
  const handleAddNewTodo = () => {
    if (newTodo === "") return;
    const todoObj = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodos([...todos, todoObj]);
    setNewTodo("");
  };

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo 1",
      completed: false,
    },
  ]);

  const [updateTodo, setUpdateTodo] = useState({
    id: 0,
    title: "",
    completed: null,
  });

  const handleUpdateTitleInputClick = (todo) => {
    setUpdateTodo({
      id: todo.id,
      title: todo.title,
      completed: todo.completed,
    });
  };

  const handleUpdateTitleInputChange = (e) => {
    setUpdateTodo({
      ...updateTodo,
      title: e.target.value,
    });
  };

  const handleInputTitleOnBlur = () => {
    const id = updateTodo.id;
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              title: updateTodo.title,
            }
          : todo
      )
    );
    setUpdateTodo({
      id: 0,
      title: "",
      completed: null,
    });
  };

  const handleCompletedChange = (e) => {
    const id = parseInt(e.target.id);
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  return (
    <>
      <h1>Discord</h1>
      <h3>Todo Ekle</h3>
      <input
        type="text"
        placeholder="Todo"
        value={newTodo}
        onChange={handleNewTodoInput}
      />
      <br />
      <br />
      <button onClick={handleAddNewTodo}>Todo Ekle</button>
      <hr />
      <div className="todo">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              id={todo.id}
              type="checkbox"
              checked={todo.completed}
              onChange={handleCompletedChange}
              className={todo.completed ? "completed" : ""}
            />
            <input
              type="text"
              id={todo.id}
              value={updateTodo.id === todo.id ? updateTodo.title : todo.title}
              onFocus={() => handleUpdateTitleInputClick(todo)}
              onChange={handleUpdateTitleInputChange}
              onBlur={handleInputTitleOnBlur}
              className={`
              ${updateTodo.id === todo.id && "update"} 
              ${todo.completed && "completed"} 
              deactive`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
