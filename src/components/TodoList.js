// src/TodoList.js
import React from 'react';
import styles from './TodoList.module.css';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className={styles.listItem}>
                    <span>{todo.text}</span>
                    <div className={styles.buttonsContainer}>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button className={styles.edit} onClick={() => {
                            const newText = prompt("Edit your task", todo.text);
                            if (newText) {
                                editTodo(todo.id, { ...todo, text: newText });
                            }
                        }}>Edit</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
