import * as React from "react";
import todoListLogo from "/src/img/logo.png"
import menuButtonImage from "/src/img/menu.png"
import { Sidebar } from "./sidebar";

export function TitleBar() {
    const [isOpened, setIsOpened] = React.useState(false); 
    return (
        <section class="title-bar">
            <div class="title-bar-container">
                <img src={menuButtonImage} alt="menu" className="nav-menu-button-image" onClick={() => setIsOpened(!isOpened)} />
                <img src={todoListLogo} alt="logo" className="logo-image" />
                <div class="title-bar-text">Todo List App</div>
            </div>
            <Sidebar isOpened={isOpened} setIsOpened={setIsOpened}/>
        </section>
    )
}