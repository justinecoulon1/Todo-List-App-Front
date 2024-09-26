import * as React from "react";
import todoListTypeImg from "/src/img/normal_todo.png"
import { useTodoListsContext } from "../contexts/todo-list-context";
import { useNavigate } from "react-router-dom";

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
    const navigate = useNavigate();
    return (
        <div key={todoList.id} className="todo-list-card clickable unselectable" onClick={() => openTodoList(todoList)}>
            <img src={todoListTypeImg} alt="todoTypeImg" className="todo-list-type-image clickable hoverable-button" />
            <span>{todoList.text}</span>
        </div>
    )

    function openTodoList(todoList) {
        navigate("/todo-list/${todoList.id}", {
            state: { todoList }
        });
    }
}