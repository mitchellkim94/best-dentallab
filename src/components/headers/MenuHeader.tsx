import React from "react";
import { MdMenu } from "react-icons/md";
import logo from "../../images/logo.svg";
import IconButton from "../buttons/IconButton";

export default function MenuHeader() {
    return (
        <nav>
            <div className="menu_header">
                <div className="head"></div>
                <div className="center">
                    <img src={logo} alt="" />
                </div>
                <div className="tail">
                    <IconButton icon={<MdMenu size={24}/>}/>
                </div>
            </div>
        </nav>
    );
}