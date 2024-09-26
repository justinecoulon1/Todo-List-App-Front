import * as React from "react";
import createElementButtonImg from "/src/img/plus.png"
import { useTodoListElementsContext } from "../contexts/todo-list-elements-context";

export function AddElementButton() {
    const { addTodoListElement } = useTodoListElementsContext();
    return (
        <div class="create-todo-button clickable hoverable-button" onClick={() => addTodoListElement()}>
            <img src={createElementButtonImg} alt="createElementButtonImg" className="create-todo-button-image" />
            Add a task
        </div>
    )
}