import { useState } from 'react'
import './App.css'

let nextId = 1

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: nextId++, text, completed: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="board">
      <h1 className="board__title">タスクボード</h1>

      <div className="input-row">
        <input
          className="input-row__text"
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="新しいタスクを入力…"
        />
        <button className="input-row__btn" onClick={addTask}>
          追加
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty">タスクがありません</p>
      ) : (
        <ul className="task-list">
          {tasks.map(task => (
            <li
              key={task.id}
              className={`task-item${task.completed ? ' task-item--done' : ''}`}
            >
              <input
                className="task-item__checkbox"
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-item__text">{task.text}</span>
              <button
                className="task-item__delete"
                onClick={() => deleteTask(task.id)}
                aria-label="削除"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
