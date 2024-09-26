import * as React from "react";
import { useLocation } from "react-router-dom";
import { TodoListHeader } from "../renderer/react/todo-list-page/todo-list-header";
import { AddElementButton } from "../renderer/react/todo-list-page/add-element-button";
import { TodoListElementProvider, useTodoListElementsContext } from "../renderer/react/contexts/todo-list-elements-context";
import { TodoListElementsList } from "../renderer/react/todo-list-page/todo-list-elements-list";

export function TodoList() {
    const location = useLocation();
    const todoList = location.state.todoList;

    return (

        <TodoListElementProvider>
            <TodoListContent todoList={todoList} />
        </TodoListElementProvider>
    )
}

function TodoListContent(todoList) {
    const { isEditMode } = useTodoListElementsContext();
    return (
        <>
            <section class="todo-list-header-container unselectable">
                <TodoListHeader todoList={todoList} />
            </section>
            {isEditMode && (
                <section class="create-element-button-container unselectable" id="create-element-button-container">
                    <AddElementButton />
                </section>
            )}
            <section class="todo-lists-list-container">
                <TodoListElementsList />
            </section>
        </>
    )
}