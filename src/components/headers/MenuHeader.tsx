import React from "react";
import logo from "../../images/logo.svg";
import useResponsive from "../../hooks/useResponsive";
import NavigationMenu from "./NavigationMenu";

export default function MenuHeader() {
    const isDesktop = useResponsive();

    return (
        <nav className="nav_header">
            <div className="menu_header">
                {
                    isDesktop
                    ? <div className="head" onClick={() => location.href = '/'}>
                        <div className="center">
                            <img src={logo} alt="" />
                        </div>
                        <span>베스트 치과기공소</span>
                    </div>
                    : <>
                        <div className="head"></div>
                        <div className="center" onClick={() => location.href = '/'}>
                            <img src={logo} alt="" />
                        </div>
                    </>
                }
                <div className="tail">
                    <NavigationMenu/>
                </div>
            </div>

        </nav>
    );
}