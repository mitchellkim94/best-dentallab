import React, { PropsWithChildren } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "gatsby";
import IconButton from "../buttons/IconButton";
import useModal from "../../hooks/useModal";
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
                                <Link to={menu.path} key={`link#${idx}`}>
                                    <li>
                                        {menu.title}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <ul className="menu--list menu--footer">
                        {
                            foots.map((foot, idx) => (
                                <Link to={foot.path} key={`foot#${idx}`}>
                                    <li>
                                        {foot.title}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </ModalLayout>
        </div>
    )
}