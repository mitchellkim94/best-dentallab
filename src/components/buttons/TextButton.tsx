import React, { PropsWithChildren } from "react"
import { IconType } from "react-icons";

type TextButtonProps = JSX.IntrinsicElements["button"] & {
    left?: IconType;
    right?: IconType;
}

export default function TextButton(props: PropsWithChildren<TextButtonProps>) {
    return (
        <button className="text_button" onClick={props.onClick}>
            { props.left ? <props.left size={16}/> : null }
            { props.children }
            { props.right ? <props.right size={16}/> : null }
        </button>
    )
}