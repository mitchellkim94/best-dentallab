import React from "react";

type IconButtonProps = JSX.IntrinsicElements["button"] & {
    icon: JSX.Element
}

export default function IconButton(props: IconButtonProps) {
    return (
        <button className="icon_button" onClick={props.onClick}>
            { props.icon }
        </button>
    );
}