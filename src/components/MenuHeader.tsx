import React, { PropsWithChildren } from "react";
import { MdMenu } from "react-icons/md";
import logo from "../images/logo.svg";
import IconButton from "./buttons/IconButton";

export default function MenuHeader({ children }: PropsWithChildren) {
    return (
        <header>
            <div className="menu_header">
                <div className="head"></div>
                <div className="center">
                    <img src={logo} alt="" />
                </div>
                <div className="tail">
                    <IconButton icon={<MdMenu size={24}/>}/>
                </div>
            </div>
            
            <div className="sub_header">
                { children }
            </div>
        </header>
    );
}