import React from "react";
import BlockButton from "./buttons/BlockButton";

interface TitleHeaderProps {
    subtitle?: string;
    title: string;
}

export default function TitleHeader(props: TitleHeaderProps) {
    return (
        <div className="title_header">
            <div className="title_box">
                { props.subtitle ? <span>{ props.subtitle }</span> : null }
                <h3>{ props.title }</h3>
            </div>
            <BlockButton>견적문의</BlockButton>
        </div>
    );
}