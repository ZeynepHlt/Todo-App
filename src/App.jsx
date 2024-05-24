import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  // girilen todoları toplamak için boş dizi (burada tanımlamamızın sebebi diğer komponentlere de ulaşabilmesi)
  const [todos, setTodos] = useState([]);

  // yeni todo oluştur
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]); //todos dizisini aç ve newTodo yu ona ekle
  };
  console.log(todos);

  // bir todo yu sil
  const removeTodo = (todoId) => {
    const extractTodo = todos.filter((todo) => todo.id !== todoId);
    // setTodos([...todos.filter((todo) => todo.id !== todoId)]);
    setTodos(extractTodo);
    // console.log(extractTodo);
  };

  //bir todo yu güncelleme
  const updateTodo = (editTodo) => {
    //* todos içinde gez, güncellenmiş olan todo yu al ve todos içerisinde id si eşit olan eski todo ile yer değiştir
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== editTodo.id) {
        return todo;
      } else {
        return editTodo;
      }
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className=" h-screen grid place-content-center mx-auto bg-gradient-to-b from-blue-500  to-teal-500 ">
        <div className="bg-white shadow-lg min-h-96 w-auto py-4 px-4">
          <h1 className="font-bold text-2xl text-center mb-2 ">TODO LİST</h1>
          {/* kullanması için create todo fonksiyonunu gönder */}
          <TodoCreate onCreateTodo={createTodo}></TodoCreate>
          <TodoList
            updateTodo={updateTodo}
            todos={todos}
            removeTodo={removeTodo}
          ></TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
