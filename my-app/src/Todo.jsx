import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Todo.css";

const Todo = () => {
  const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
  const saveTasks = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

  const [tasks, setTasks] = useState(getTasks());
  const [notes, setNotes] = useState(localStorage.getItem("quickNotes") || "");
  const [newTaskInput, setNewTaskInput] = useState("");

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("quickNotes", notes);
  }, [notes]);

  function parseTaskInput(input) {
    const dateRegex = /(by|due|on)\s*(\w+\s+\d{1,2})|(\w+\s+\d{1,2})$/i;
    const match = input.match(dateRegex);

    if (match) {
      let dueDate = match[2] || match[3];
      const description = input.replace(match[0], "").trim();
      return { description: description || input, dueDate };
    }
    return { description: input, dueDate: null };
  }

  const addTask = (event) => {
    event.preventDefault();
    if (newTaskInput.trim() === "") return;

    const { description, dueDate } = parseTaskInput(newTaskInput.trim());
    const updated = [...tasks, { description, dueDate, completed: false }];
    setTasks(updated);
    setNewTaskInput("");
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <div className="todo-container">
      <div className="page-header">
        <Link to="/dashboard" className="back-arrow">&lt;</Link>
      </div>

      <h1 className="page-title">My To Do List</h1>

      <form id="new-task-form" onSubmit={addTask}>
        <input
          type="text"
          id="new-task-input"
          placeholder="Add a new task (e.g., Study SWE 363 by Oct 20)"
          required
          value={newTaskInput}
          onChange={(e) => setNewTaskInput(e.target.value)}
        />
        <button type="submit" id="add-task-btn">Add</button>
      </form>

      <ul id="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-checkbox-wrapper" onClick={() => toggleComplete(index)}>
              <span className="task-check-mark">✓</span>
            </div>
            <div className="task-details">
              <p className="task-description">{task.description}</p>
              {task.dueDate && <span className="task-due-date">due date: {task.dueDate}</span>}
            </div>
            <button className="delete-btn" onClick={() => deleteTask(index)}>X</button>
          </li>
        ))}
      </ul>

      <div className="notes-section">
        <h2 className="notes-title">Quick Notes</h2>
        <textarea
          id="quick-notes"
          placeholder="Enter your notes here... (Notes save automatically)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Todo;