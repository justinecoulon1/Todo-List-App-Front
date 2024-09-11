import * as React from "react";
import { CreateTodoListButton } from "../renderer/react/home-page/create-todo-list-button";
import { TodoListsList } from "../renderer/react/home-page/todo-lists-list";
import { TodoListProvider } from "../renderer/react/contexts/todo-lists-context";

export function Home() {
    return (
        <TodoListProvider>
            <section class="create-todo-button-container unselectable">
                <CreateTodoListButton />
            </section>
            <section class="todo-lists-list-container">
                <TodoListsList />
            </section>
        </TodoListProvider>
    )
}