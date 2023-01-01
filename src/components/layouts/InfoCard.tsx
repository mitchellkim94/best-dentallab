import React from "react";
import * as ReactIcon from "react-icons";

export interface InfoCardProps {
    infoImg?: string;
    imgTitle?: string | JSX.Element;
    icon?: ReactIcon.IconType;
    title?: string | JSX.Element;
    desc?: string;
};

export default function InfoCard(props: InfoCardProps) {
    return (
        <div className="info_card">
            {/* 이미지 */}
            {
                props.infoImg
                ? <div className="info_card--image">
                    <img src={props.infoImg} alt="" />
                </div>
                : null
            }

            {/* 아이콘 */}
            {
                props.icon
                ? <div className="info_card--icon">
                    <props.icon size={48}/>
                </div>
                : null
            }

            {/* 타이틀 */}
            {
                props.title
                ? <h3 className="info_card--title">
                    { props.title }
                </h3>
                : null
            }

            {/* 이미지 타이틀 */}
            {
                props.imgTitle
                ? <h4 className="info_card--img_title">
                    { props.imgTitle }
                </h4>
                : null
            }
            
            {/* 설명 */}
            {
                props.desc
                ? <p className="info_card--desc">
                    { props.desc }
                </p>
                : null
            }
        </div>
    );
}