import * as React from "react";
import { useLocation } from "react-router-dom";
import { TodoListHeader } from "../renderer/react/todo-list-page/todo-list-header";

export function TodoList() {
    const location = useLocation();
    const todoList = location.state.todoList;

    return (
        <section class="todo-list-header-container unselectable">
            <TodoListHeader todoList={todoList} />
        </section>
    )
}
