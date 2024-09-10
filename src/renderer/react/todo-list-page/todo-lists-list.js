import * as React from "react";
import todoListTypeImg from "/src/img/normal_todo.png"
import { useTodoListsContext } from "../contexts/todo-lists-context";

export function TodoListsList() {
    const { todoLists } = useTodoListsContext();
    return (
        <>
            {todoLists.map((todo) => (
                <TodoListCard todoList={todo} />
            ))}
        </>
    )
}

function TodoListCard({ todoList }) {
    return (
        <div key={todoList.id} className="todo-list-card">
            <img src={todoListTypeImg} alt="todoTypeImg" className="todo-list-type-image clickable" />
            <span>{todoList.text}</span>
        </div>
    )
}