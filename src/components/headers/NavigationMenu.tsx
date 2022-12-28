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

    const foots = [
        {
            title: '견적문의',
            path: '/contact'
        },
        {
            title: '인스타그램',
            path: 'https://instagram.com/bestdentallab'
        },
        {
            title: '카카오채널',
            path: 'http://pf.kakao.com/_ZLUxos',
        }
    ]

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
                    <header className="menu--header">
                        <div className="menu--btn--head"></div>
                        <span>베스트 치과기공소</span>
                        <div className="menu--btn">
                            <IconButton icon={<MdClose size={24}/>} onClick={close}/>
                        </div>
                    </header>
                    <ul className="menu--list">
                        {
                            menus.map((menu, idx) => (
                                <li key={`link#${idx}`}>
                                    <Link to={menu.path}>{menu.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <ul className="menu--list menu--footer">
                        {
                            foots.map((foot, idx) => (
                                <li key={`foot#${idx}`}>
                                    <Link to={foot.path}>{foot.title}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </ModalLayout>
        </div>
    )
}