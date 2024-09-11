import * as React from "react";
import createTodoListButtonImg from "/src/img/plus.png"
import { useTodoListsContext } from "../contexts/todo-lists-context";

export function CreateTodoListButton() {
    const { addTodoList } = useTodoListsContext();
    return (
        <div class="create-todo-button clickable hoverable-button" onClick={() => addTodoList()}>
            <img src={createTodoListButtonImg} alt="createTodoListButtonImg" className="create-todo-button-image" />
            Create A Todo List
        </div>
    )
}