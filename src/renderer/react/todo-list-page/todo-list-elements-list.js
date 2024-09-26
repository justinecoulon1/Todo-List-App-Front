import * as React from "react";
import todoListTypeImg from "/src/img/normal_todo.png"
import { useTodoListElementsContext } from "../contexts/todo-list-elements-context";

export function TodoListElementsList() {
    const { todoListElements } = useTodoListElementsContext();
    return (
        <>
            {todoListElements.map((todoElement) => (
                <TodoListElementCard todoListElement={todoElement} />
            ))}
        </>
    )
}

function TodoListElementCard({ todoListElement }) {
    return (
        <div key={todoListElement.id} className="todo-list-card clickable unselectable">
            <img src={todoListTypeImg} alt="todoTypeImg" className="todo-list-type-image clickable hoverable-button" />
            <span>{todoListElement.text}</span>
        </div>
    )
}