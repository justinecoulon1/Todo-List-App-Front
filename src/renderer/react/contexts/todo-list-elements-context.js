import React, { createContext, useContext, useState } from "react";

let allTodoListElements = [];
let idSequence = 1;

const TodoListElementsContext = createContext();

export function useTodoListElementsContext() {
    const context = useContext(TodoListElementsContext);
    if (!context) {
        throw new Error("useTodoListElementsContext must be used within a TodoListElementProvider");
    }
    return context;
};

export function TodoListElementProvider({ children }) {
    const [todoListElements, setTodoListElements] = useState(allTodoListElements);
    const [isEditMode, setIsEditMode] = useState(false);
    allTodoListElements = todoListElements;

    function addTodoListElement() {
        const id = idSequence++;
        const newTodoElement = {
            id,
            text: `Todo Element ${id}`,
        };
        setTodoListElements([...todoListElements, newTodoElement]);
    };

    return (
        <TodoListElementsContext.Provider value={{ todoListElements, addTodoListElement, isEditMode, setIsEditMode }}>
            {children}
        </TodoListElementsContext.Provider>
    );
}