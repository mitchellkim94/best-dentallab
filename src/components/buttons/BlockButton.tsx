import React, { PropsWithChildren } from "react"

export default function BlockButton(props: PropsWithChildren<JSX.IntrinsicElements["button"]>) {
    return (
        <button className="block_button" onClick={props.onClick}>
            { props.children }
        </button>
    )
}