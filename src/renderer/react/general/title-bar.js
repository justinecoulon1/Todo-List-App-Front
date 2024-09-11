import * as React from "react";
import todoListLogo from "/src/img/logo.png"
import menuButtonImage from "/src/img/menu.png"
import { useSidebarContext } from "../contexts/sidebar-context";

export function TitleBar() {
    const { isOpened, setIsOpened } = useSidebarContext()
    return (
        <section class="title-bar unselectable">
            <div class="title-bar-container">
                <img src={menuButtonImage} alt="menu" className="nav-menu-button-image clickable hoverable-button" onClick={() => setIsOpened(!isOpened)} />
                <img src={todoListLogo} alt="logo" className="logo-image" />
                <div class="title-bar-text">Todo List App</div>
            </div>
        </section>
    )
}