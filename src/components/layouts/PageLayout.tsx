import React from "react";
import { PropsWithChildren } from "react";
import '../../styles/index.scss'
import MenuHeader from "../headers/MenuHeader";
import { RecoilRoot } from 'recoil';
import PopAlert from "../alerts/PopAlert";

interface PageLayoutProps {
    grey?: boolean
}

export default function PageLayout({ children, grey}: PropsWithChildren<PageLayoutProps>) {
    return (
        <RecoilRoot>
            <main className={`page_layout ${grey ? 'grey' : null}`}>
                <MenuHeader/>
                { children }
            </main>

            <PopAlert/>
        </RecoilRoot>
    )
}