import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

export default function Todo() {
  // Initialize state inside the component
  const [tasks, setTasks] = useState<string[]>(["task 1", "task 2", "task 3"]);
  const [inputValue, setInputValue] = useState<string>("");
  const [done, setDone] = useState<string[]>([]);

  // Handler to add a new task
  const addTask = () => {
    if (inputValue.trim()) { // Check if input is not empty
      setTasks([...tasks, inputValue]);
      setInputValue(""); // Clear the input field
    }
  };

  // Handler to mark a task as done
  const donetask = (finished: string) => {
    setDone([...done, finished]);
    const newTasks = tasks.filter(task => task !== finished);
    setTasks(newTasks);
  };

  // Handler to delete a task
  const deleteTask = (id: string) => {
    const newTasks = tasks.filter(task => task !== id);
    setTasks(newTasks);
  };

  // Handler to update the input value
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/4 border-2 p-4 rounded-lg">
      <h1 className="font-extrabold text-center mb-8 text-3xl font-sans">TO-DO List</h1>
        <div className="flex mb-4 space-x-2 h-10">
          <Input
            type="text"
            label="Add Task"
            value={inputValue}
            onChange={handleInputChange}
            className="mr-2"
          />
          <Button size="sm" className=" ml-2" onClick={addTask}>Add</Button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded">
              <span>{task}</span>
              <div className="flex space-x-2">
                <Button size="sm" color="red" onClick={() => deleteTask(task)} variant="outlined">Delete</Button>
                <Button size="sm" color="green" onClick={() => donetask(task)} variant="outlined">Done</Button>
              </div>
            </li>
          ))}
        </ul>
        <h1 className="mt-4 font-semibold text-center text-xl">Completed Tasks</h1>
        <ul>
          {done.map((task, index) => (
            <li key={index} className="flex justify-between items-center mb-2 p-2 border border-gray-300 rounded">
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
