import React, { PropsWithChildren, useEffect, useRef } from "react";
import useTitleObserver from "../hooks/useTitleObserver";

interface ExplainLayoutProps {
    headerTitle?: string;
    title?: string | JSX.Element;
    imageSrc?: string;
}

export default function ExplainLayout(props: PropsWithChildren<ExplainLayoutProps>) {
    const explainSection = useRef<HTMLDivElement>(null);

    useTitleObserver(explainSection, props.headerTitle);

    return (
        <div className="explain_layout" ref={explainSection}>
            {
                props.title
                ? <h2 className="explain_layout--title">
                    { props.title }
                </h2>
                : null
            }
            
            {
                props.imageSrc
                ? <div className="explain_layout--image">
                    <img src={props.imageSrc} alt={`${props.title}_image`}/>
                </div>
                : null
            }

            <section className="explain_layout--info">
                { props.children }
            </section>
        </div>
    );
}