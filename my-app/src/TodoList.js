import { useState } from "react";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (inputText === "") return;

    setTodos([...todos, inputText]);
    setInputText("");
  };

  return (
    <div>
      <h2>TODOリスト</h2>

      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button onClick={addTodo}>追加</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
