import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo, updateTodo }) {
  return (
    <div>
      {/* todos varsa (&& varsa anlamında kullanıloır)todos içerisinde dön ve her bir todo yu todoItem componentine props ile ilet */}
      {todos &&
        todos.map((todo) => (
          <TodoItem
            updateTodo={updateTodo}
            removeTodo={removeTodo}
            key={todo.id}
            todo={todo}
          ></TodoItem>
        ))}
    </div>
  );
}

export default TodoList;
