import React from "react";
import { PropsWithChildren } from "react";
import '../../styles/index.scss'

export default function PageLayout({ children }: PropsWithChildren) {
    return (
        <main className="page_layout">
            { children }
        </main>
    )
}