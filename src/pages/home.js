import * as React from "react";
import { CreateTodoListButton } from "../renderer/react/todo-list-page/create-todo-list-button";

export function Home() {
    return (
        <section class="create-todo-button-container">
            <CreateTodoListButton />
        </section>
    )
}