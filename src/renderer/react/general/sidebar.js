import React from "react";
import todoListsImg from "/src/img/normal_todo.png"
import settingsImg from "/src/img/settings.png"
import statisticsImg from "/src/img/statistics.png"
import { Link, useLocation } from "react-router-dom";
import { useSidebarContext } from "../contexts/sidebar-context";

export const SidebarData = [
    {
        title: "Todo Lists",
        path: "/main_window",
        img: todoListsImg
    },
    {
        title: "Statistics",
        path: "/statistics",
        img: statisticsImg
    },
    {
        title: "Settings",
        path: "/settings",
        img: settingsImg
    },
];

export function Sidebar() {
    const { isOpened, setIsOpened } = useSidebarContext()
    return (
        <nav className={isOpened ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items">
                {SidebarData.map((item) =>
                (
                    <li className="nav-text" onClick={() => setIsOpened(false)}>
                        <SideBarLink linkTo={item.path} linkName={item.title} linkImage={item.img}/>
                    </li>
                )
                )}
            </ul>
        </nav>
    )
}

function SideBarLink({ linkTo, linkName, linkImage }) {
    const currentRoute = useLocation().pathname
    const className = currentRoute === linkTo ? "nav-menu-link active" : "nav-menu-link"
    return (
        <Link class={className} to={linkTo}>
            <img src={linkImage} alt="menu_item" className="nav-menu-image" />{linkName}
        </Link>
    )
}