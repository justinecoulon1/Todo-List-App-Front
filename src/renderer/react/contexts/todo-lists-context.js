import React, { createContext, useContext } from "react";

let allTodoLists = [];
let idSequence = 1;

const TodoListContext = createContext();

export function useTodoListsContext() {
    const context = useContext(TodoListContext);
    if (!context) {
        throw new Error("useTodoListsContext must be used within a TodoListProvider");
    }
    return context;
};

export function TodoListProvider({ children }) {
    const [todoLists, setTodoLists] = React.useState(allTodoLists);
    allTodoLists = todoLists;

    function addTodoList() {
        const id = idSequence++;
        const newTodo = {
            id,
            text: `Todo Item ${id}`,
        };
        setTodoLists([...todoLists, newTodo]);
    };

    return (
        <TodoListContext.Provider value={{ todoLists, addTodoList }}>
            {children}
        </TodoListContext.Provider>
    );
}