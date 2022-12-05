import React, { PropsWithChildren } from "react"

type BlockButtonProps = PropsWithChildren<JSX.IntrinsicElements["button"]> & {
    color?: string;
    theme?: "light" | "dark";
    size?: "small" | "medium" | "large"
};

export default function BlockButton(props: BlockButtonProps) {
    return (
        <button 
            className={`block_button ${props.size} ${props.theme}`} 
            onClick={props.onClick}
            style={{
                backgroundColor: `${props.color || null}`
            }}
        >
            { props.children }
        </button>
    )
}