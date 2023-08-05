import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { TodoApp } from './components/TodoApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="app-container">
      <TodoApp />
    </div>
  </React.StrictMode>,
)
