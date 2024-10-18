import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'; // Correct path
import TodoForm from './components/TodoForm'; // Already correct
import styles from './App.module.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos'));
        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const editTodo = (id, updatedTodo) => {
        setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className={styles.appContainer}>
            <h1>To-Do List</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
        </div>
    );
};

export default App;
