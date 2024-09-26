import * as React from "react";
import homeButtonImg from "/src/img/home.png"
import editButtonImg from "/src/img/edit.png"
import openButtonImg from "/src/img/open.png"
import validateButtonImg from "/src/img/validate.png"
import { useNavigate } from "react-router-dom";
import { useTodoListElementsContext } from "../contexts/todo-list-elements-context";

export function TodoListHeader({ todoList }) {
    const navigate = useNavigate();
    const { isEditMode, setIsEditMode } = useTodoListElementsContext();
    console.log((!isEditMode).toString())
    return (
        <>
            <section class="header-container-left-side">
                <img src={homeButtonImg} alt="homeButtonImg" className="home-button-image clickable hoverable-button" onClick={() => goBackToMenu()} />
                <form>
                    <input readonly={!isEditMode ? 'true' : undefined} type="text" name="todo-list-name-form" defaulttext={todoList.text} class="todo-list-name-form" id="todo-list-name-form" />
                </form>
            </section>

            <section class="header-container-right-side">
                {isEditMode ? (
                    <>
                        <img src={validateButtonImg} alt="validateButtonImg" className="header-button validate-button-image clickable hoverable-button" onClick={() => validateEdit(setIsEditMode)} id="validate-button-img" />
                    </>
                ) : (
                    <>
                        <img src={editButtonImg} alt="editButtonImg" className="header-button edit-button-image clickable hoverable-button" onClick={() => setIsEditMode(!isEditMode)} id="edit-button-img" />
                        <img src={openButtonImg} alt="openButtonImg" className="header-button open-button-image clickable hoverable-button" onClick={() => openTodoList()} id="edit-button-img" />
                    </>
                )}
            </section>
        </>
    )

    function goBackToMenu() {
        navigate("/main_window");
    }

    function toggleEditMode() {
        const addElementButtonContainer = document.getElementById("create-element-button-container");
        const todoListNameForm = document.getElementById("todo-list-name-form");
        const editButton = document.getElementById("edit-button-img");
        const openButton = document.getElementById("open-button-img");
        const validateButton = document.getElementById("validate-button-img");


        addElementButtonContainer.style.display = "flex";
        editButton.style.display = "none";
        openButton.style.display = "none";
        validateButton.style.display = "flex";
    }

    function getAddElementButtonContainer() {
        return document.getElementById("create-element-button-container")
    }

    function openTodoList() {
    }

    function validateEdit(setIsEditMode) {
        setIsEditMode(false);
    }
}