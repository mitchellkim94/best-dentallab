import React, { PropsWithChildren } from "react"

type TextButtonProps = JSX.IntrinsicElements["button"] & {
    left?: JSX.Element;
    right?: JSX.Element;
}

export default function TextButton(props: PropsWithChildren<TextButtonProps>) {
    return (
        <button className="text_button" onClick={props.onClick}>
            { props.left }
            { props.children }
            { props.right }
        </button>
    )
}