"use client";

import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState<string[]>([]);

  const [todo, setTodos] = useState<string>("");

  const [isEdit, setEdit] = useState<boolean>(false);

  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isEdit && selectedItemId) {
      const updatedItems = [...items];

      updatedItems[selectedItemId] = todo;
      setItems(updatedItems);

      setEdit(false);
    } else {
      setItems((prev) => [...prev, todo]);
    }

    setTodos("");
  };

  function handleTodoChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodos(e.target.value);
  }

  function handleDelete(id: number) {
    setItems((prev) => prev.filter((_, index) => index != id));
  }

  function handleEdit(id: number) {
    setTodos(items[id]);
    setSelectedItemId(id);
    setEdit(true);
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 border-2 bg-slate-200 border-white">
      <section
        id="form"
        className="flex border-2 border-green-700 min-w-[900px] "
      >
        <form
          action=""
          onSubmit={handleSubmit}
          className="space-y-10 min-w-full flex flex-col align-center justify-center bg-slate-400 min-h-full"
        >
          <h1 className="text-center  bg-red-200">Form</h1>
          <div className="flex space-x-12  max-w-[400px] self-center ">
            <label htmlFor="todo-input">Todo</label>
            <input
              type="text"
              name="todo"
              className="border"
              value={todo}
              onChange={(e) => handleTodoChange(e)}
            />
            <button className="px-14 py-2 bg-blue-500 rounded-full ">
              Submit
            </button>
          </div>
        </form>
      </section>

      <section id="displayList">
        <h1>Display all list</h1>
        <ul>
          {items.length > 0 &&
            items.map((item, index) => (
              <li className="flex justify-between space-x-6 ">
                <div className="">{index + "-" + item}</div>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
