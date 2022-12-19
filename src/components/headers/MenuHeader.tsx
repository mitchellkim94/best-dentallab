import React from "react";
import logo from "../../images/logo.svg";
import NavigationMenu from "./NavigationMenu";

export default function MenuHeader() {
    return (
        <nav className="nav_header">
            <div className="menu_header">
                <div className="head"></div>
                <div className="center" onClick={() => location.href = '/'}>
                    <img src={logo} alt="" />
                </div>
                <div className="tail">
                    <NavigationMenu/>
                </div>
            </div>

        </nav>
    );
}