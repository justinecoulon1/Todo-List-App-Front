import * as React from "react";
import homeButtonImg from "/src/img/home.png"
import editButtonImg from "/src/img/edit.png"
import openButtonImg from "/src/img/open.png"
import { useNavigate } from "react-router-dom";

export function TodoListHeader({ todoList }) {
    const navigate = useNavigate();
    return (
        <>
            <section class="header-container-right-side">
                <img src={homeButtonImg} alt="homeButtonImg" className="home-button-image clickable hoverable-button" onClick={() => goBackToMenu()} />
                <form>
                    <input type="text" id="todo-list-title" name="todo-list-title" placeholder={todoList.text} class="todo-list-name-form"/>
                </form>
            </section>
            <section class="header-container-left-side">
                <img src={editButtonImg} alt="editButtonImg" className="edit-button-image clickable hoverable-button" />
                <img src={openButtonImg} alt="openButtonImg" className="open-button-image clickable hoverable-button" />
            </section>
        </>
    )

    function goBackToMenu() {
        navigate("/main_window");
    }
}