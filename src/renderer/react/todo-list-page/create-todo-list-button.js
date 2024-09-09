import * as React from "react";
import createTodoListButtonImg from "/src/img/plus.png"

export function CreateTodoListButton() {
    return (

        <div class="create-todo-button">
            <img src={createTodoListButtonImg} alt="createTodoListButtonImg" className="create-todo-button-image" />
            Create A Todo List
        </div>

    )
}