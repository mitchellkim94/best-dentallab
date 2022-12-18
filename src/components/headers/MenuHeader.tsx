import React from "react";
import { MdMenu } from "react-icons/md";
import logo from "../../images/logo.svg";
import IconButton from "../buttons/IconButton";
import NavigationMenu from "./NavigationMenu";

export default function MenuHeader() {
    return (
        <nav>
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