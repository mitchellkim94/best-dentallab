import React, { PropsWithChildren } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "gatsby";
import IconButton from "../buttons/IconButton";
import useModal from "../hooks/useModal";
import ModalLayout from "../layouts/ModalLayout";

export default function NavigationMenu() {
    const [isOpen, open, close] = useModal();

    const menus = [
        {
            title: 'DENTURE 시스템',
            path: "/denture",
        },
        {
            title: 'CAD/CAM 시스템',
            path: "/cadcam",
        },
        {
            title: 'MODELLESS 시스템',
            path: "/modelless",
        },
        {
            title: '보유장비',
            path: "/machines",
        },
    ];

    return (
        <div className="navigation">
            {/* Activator */}
            <IconButton icon={<MdMenu size={24}/>} onClick={open}/>

            <ModalLayout 
                isOpen={isOpen} 
                close={close} 
                position={'right'}
            >
                <div className="navigation_menu">
                    <div className="menu--btn">
                        <IconButton icon={<MdClose size={24}/>} onClick={close}/>
                    </div>
                    <ul className="menu--list">
                        {
                            menus.map((menu, idx) => (
                                <li key={`link#${idx}`}>
                                    <Link to={menu.path}>{menu.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </ModalLayout>
        </div>
    )
}