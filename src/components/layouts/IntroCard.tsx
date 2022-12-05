import React, { MouseEventHandler, PropsWithChildren } from "react"
import TextButton from "../buttons/TextButton";
import { MdChevronRight } from "react-icons/md";

interface IntroCardProps {
    bgImage?: string;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export default function IntroCard(props: PropsWithChildren<IntroCardProps>) {
    return (
        <div 
            className="intro_card" 
            style={{
                backgroundImage: `url(${props.bgImage})`
            }}
        >
            <h3>{ props.children }</h3>

            <TextButton 
                right={<MdChevronRight size={16}/>}
                onClick={props.onClick}
            >
                더 알아보기
            </TextButton>
        </div>
    )
}