import React from "react";

interface CircleLabel {
    image: string;
    label: string;
}

export default function CircleLabel({ image, label }: CircleLabel) {
    return (
        <div className="circle_label">
            <div className="circle_label--img">
                <img src={image} alt="circle"/>
            </div>
            <span className="circle_label--label">{ label }</span>
        </div>
    )
}