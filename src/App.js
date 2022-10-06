import React, { useState } from "react";
import "./App.css";

function Block(props) {
  return (
    <div className="squareStyle">
      {props.todo.content}
    </div>
  
  );
}

function App() {

  //number 초기값
  let number = 3;

  //초기상태
  const initialState = {
    id: 0,
    content: "",
  };

  //디폴트 todos
  const [todos, setTodos] = useState([
    {id:1, content:"react를 배워봅시다."},
  ]);

  const [todo, setTodo] = useState(initialState);

  
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <div className="layoutCss">
      <form onSubmit={onSubmitHandler}>
        <div>
          <input
            type="text"
            name="content"
            value={todo.content}
            onChange={onChangeHandler}
          />
          <button>추가하기</button>
        </div>
      </form>

      <h1>Todo List</h1>

      <div className="formCss">
        {todos.map((todo) => {
          return (
            <Block todo={todo} key={todo.id} setTodos={setTodos}
              />
          );
        })}
      </div>    
    </div>
  );
}

export default App;