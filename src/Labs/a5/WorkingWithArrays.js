import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const API = "http://localhost:4000/a5/todos";

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
        `${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(
          `${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (
          t.id === todo.id ? todo : t)));
      setTodo({});
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };



  useEffect(() => {
    fetchTodos();
  }, []);

  return (
      <div>
        <h3>Working with Arrays</h3>

        <h4>Todos From Server</h4>
        <button onClick={createTodo}
                className="btn btn-primary mb-2 w-100">
          Create Todo
        </button>
        <button onClick={updateTitle}
                className="btn btn-success mb-2 w-100">
          Update Title
        </button>
        <input className="form-control"
               value={todo.id}
               onChange={(e) => setTodo({ ...todo,
                 id: e.target.value })}
               type="number"
        />
        <input className="form-control"
               value={todo.title}
               onChange={(e) => setTodo({ ...todo,
                 title: e.target.value })}
               type="text"
        />
        <textarea
            className="form-control"
            onChange={(e) => setTodo({ ...todo,
              description: e.target.value })}
            value={todo.description}
            type="text"
        />
        <input
            className="form-control"
            onChange={(e) => setTodo({
              ...todo, due: e.target.value })}
            value={todo.due}
            type="date"
        />
        <label>
          <input
              onChange={(e) => setTodo({
                ...todo, completed: e.target.checked })}
              value={todo.completed} type="checkbox"
          />
          Completed
        </label>
        <button onClick={postTodo}
                className="btn btn-warning mb-2 w-100">
          Post Todo
        </button>
        <button onClick={updateTodo}
                className="btn btn-success mb-2 w-100">
          Update Todo
        </button>

        {errorMessage && (
          <div className="alert alert-danger mb-2 mt-2">
            {errorMessage}
          </div>
        )}

        <ul className="list-group">
          {todos.map((todo) => (
              <li key={todo.id}
                  className="list-group-item">
                <button
                    onClick={() => fetchTodoById(todo.id)}
                    className="btn btn-warning me-2 float-end" >
                  Edit
                </button>
                <button
                  onClick={() => removeTodo(todo)}
                  className="btn btn-danger float-end">
                  Remove
                </button>
                <button
                    onClick={() => deleteTodo(todo)}
                    className="btn btn-danger float-end ms-2">
                  Delete using app.delete
                </button>
                <input
                    checked={todo.completed}
                    type="checkbox" readOnly
                />
                {todo.title}
                <hr />
                ID: {todo.id}
                <p>{todo.description}</p>
                <p>{todo.due}</p>
              </li>
          ))}
        </ul>

        <h4>Retrieving Arrays</h4>
        <a href={API} className="btn btn-primary me-2">
          Get Todos
        </a>

        <h4>Retrieving an Item from an Array by ID</h4>
        <input
            className="form-control"
            value={todo.id}
            onChange={(e) => setTodo({ ...todo,
              id: e.target.value })}/>
        <a href={`${API}/${todo.id}`}
           className="btn btn-primary me-2">
          Get Todo by ID
        </a>

        <h4>Filtering Array Items</h4>
        <a href={`${API}?completed=true`}
           className="btn btn-primary me-2" >
          Get Completed Todos
        </a>

        <h4>Creating new Items in an Array</h4>
        <a href={`${API}/create`}
           className="btn btn-primary me-2">
          Create Todo
        </a>

        <h4>Deleting from an Array</h4>
        <input
            value={todo.id}
            onChange={(e) => setTodo({
              ...todo, id: e.target.value })}
            className="form-control mb-2"
            type="number"
        />
        <a href={`${API}/${todo.id}/delete`}
           className="btn btn-primary me-2">
          Delete Todo with ID = {todo.id}
        </a>

        <h4>Updating an Item in an Array</h4>
        <label for="updateItemId">
          ID of item to update
        </label>
        <input
            id="updateItemId"
            value={todo.id}
            onChange={(e) => setTodo({
              ...todo, id: e.target.value
            })}
            className="form-control mb-2"
            type="number"
        />
        <label for="updateItemTitle">
          Update item's title
        </label>
        <input
            id="updateItemTitle"
            value={todo.title}
            onChange={(e) => setTodo({
              ...todo, title: e.target.value })}
            className="form-control mb-2"
            type="text"
        />
        <a
            href={`${API}/${todo.id}/title/${todo.title}`}
            className="btn btn-primary me-2" >
          Update Title to {todo.title}
        </a>



      </div>
  );
}

export default WorkingWithArrays;
