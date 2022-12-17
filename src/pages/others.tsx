import React from "react";
import InfoCard, { InfoCardProps } from "../components/layouts/InfoCard";
import anodizingImg from "../images/cad/anodizing.png";
import PageLayout from "../components/layouts/PageLayout";
import ExplainLayout from "../components/layouts/ExplainLayout";
import MenuHeader from "../components/headers/MenuHeader";
import TitleHeader from "../components/headers/TitleHeader";

export default function OthersPage()  {
    const others: InfoCardProps[] = [
        {
            infoImg: anodizingImg,
            imgTitle: '황금빛 어노다이징'
        },
        {
            infoImg: anodizingImg,
            imgTitle: '황금빛 어노다이징'
        },
        {
            infoImg: anodizingImg,
            imgTitle: '황금빛 어노다이징'
        },
    ];

    return (
        <PageLayout>
            <TitleHeader title="모든 보철물"/>
            
            <ExplainLayout
                title={<>그 외 모든<br/>보철물</>}
            >
                {
                    others.map((other, idx) => (
                        <InfoCard
                            key={`others#${idx}`}
                            imgTitle={other.imgTitle}
                            infoImg={other.infoImg}
                        />
                    ))
                }
            </ExplainLayout>
        </PageLayout>
    )
}
