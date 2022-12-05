import React from "react";
import { PropsWithChildren } from "react";
import '../../styles/index.scss'

interface PageLayoutProps {
    grey?: boolean
}

export default function PageLayout({ children, grey}: PropsWithChildren<PageLayoutProps>) {
    return (
        <main className={`page_layout ${grey ? 'grey' : null}`}>
            { children }
        </main>
    )
}