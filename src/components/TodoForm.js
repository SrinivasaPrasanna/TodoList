// src/TodoForm.js
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            addTodo({ id: uuidv4(), text: input, completed: false });
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default TodoForm;
