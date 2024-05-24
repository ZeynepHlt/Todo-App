import React, { useState } from "react";
import { TiPlus } from "react-icons/ti";

function TodoCreate({ onCreateTodo }) {
  //inputtan girilen değeri tutacak değişken
  const [newTodo, setNewTodo] = useState("");

  //ekle butonuna baılınca tetiklenecek fonksiyon
  const addTodo = () => {
    if (!newTodo) {
      alert("lütfen bir değer giriniz..");
      return; //eğer input boşsa çalıştırma sonlandır
    }
    const request = {
      //id olarak 0-9999 arasında bir sayı ata
      id: Math.floor(Math.random() * 99999),
      content: newTodo,
    };
    onCreateTodo(request);
    setNewTodo("");
  };

  return (
    <div>
      <div className="flex items-center justify-center space-x-2 w-full">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          placeholder="Todo Giriniz.."
          className="py-2 px-4 w-80 rounded-md border border-slate-400"
        />
        <button>
          <TiPlus
            onClick={addTodo}
            className="bg-green-500 p-2 text-white text-u-4xl rounded-md"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;
