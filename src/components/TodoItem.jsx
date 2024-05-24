import React, { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";

function TodoItem({ todo, removeTodo, updateTodo }) {
  const [editTable, setEditTable] = useState(false);
  const [newUpdateTodo, setNewUpdateTodo] = useState(todo.content);

  const removeItemTodo = () => {
    removeTodo(todo.id);
  };

  const n_updateTodo = () => {
    const request = {
      id: todo.id,
      content: newUpdateTodo,
    };
    updateTodo(request);
    setEditTable(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center space-x-2 mt-3">
        <div className="relative py-2 px-4 w-80 rounded-md border">
          {editTable ? (
            <input
              type="text"
              value={newUpdateTodo}
              onChange={(e) => setNewUpdateTodo(e.target.value)}
              className=" relative  rounded-md border-none focus:outline-none h-6 w-64 border-slate-400"
            />
          ) : (
            todo.content
          )}

          {editTable ? (
            <IoMdCheckmark
              onClick={n_updateTodo}
              className="absolute text-green-500 top-2 bottom-2 right-3 text-2xl "
            />
          ) : (
            <CiEdit
              className="absolute text-pink-500 top-2 bottom-2 right-3 text-2xl "
              onClick={() => setEditTable(true)}
            />
          )}
        </div>

        <button>
          <IoMdTrash
            onClick={removeItemTodo}
            className="bg-red-500 text-white p-2 text-u-4xl rounded-md"
          />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
