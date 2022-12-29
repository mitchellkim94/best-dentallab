import React from "react";
import BlockButton from "../buttons/BlockButton";
import { useRecoilValue } from "recoil";
import { pageTitle } from "../../store/page";
import { navigate } from "gatsby";

interface TitleHeaderProps {
    subtitle?: string;
    title?: string;
}

export default function TitleHeader(props: TitleHeaderProps) {
    const title = useRecoilValue(pageTitle);

    const toContact = () => {
        navigate("/contact");
    }

    return (
        <div className="title_header_wrap">
            <header className="title_header">
                <div className="title_box">
                    {
                        props.title ? <h2>{ props.title }</h2> : null
                    }
                    { 
                        props.title == null && props.subtitle 
                        ? <>
                            <span>{ props.subtitle }</span> 
                            <h3>{ title }</h3>   
                        </>
                        : <h2>{ title }</h2>
                    }
                </div>
                <BlockButton onClick={toContact}>견적문의</BlockButton>
            </header>
        </div>
    );
}