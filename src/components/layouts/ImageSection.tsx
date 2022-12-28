import React, { PropsWithChildren, useRef } from "react";
import useTitleObserver from "../hooks/useTitleObserver";

type ImageSectionProps = JSX.IntrinsicElements["section"] & {
    headerTitle: string;
    bgImage: string;
};

export default function ImageSection(props: PropsWithChildren<ImageSectionProps>) {
    const section = useRef(null);

    useTitleObserver(section, props.headerTitle);

    return (
        <section
            ref={section}
            className={props.className}
            style={{
                minHeight: '100vh',
                backgroundImage: `url(${props.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            {props.children}
        </section>
    )
}