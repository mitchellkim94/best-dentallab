import React from "react";
import TitleHeader from "../components/headers/TitleHeader";
import ExplainLayout from "../components/layouts/ExplainLayout";
import InfoCard, { InfoCardProps } from "../components/layouts/InfoCard";
import PageLayout from "../components/layouts/PageLayout";

import imgPrinter from "../images/machines/printer.png";
import imgCasting from "../images/machines/casting.png";
import imgLegin from "../images/machines/legin.png";
import imgZirMiller from "../images/machines/zir_miller.png";
import imgAutMiller from "../images/machines/abut_miller.png";
import imgFurnace from "../images/machines/furnace.png";
import imgSintering from "../images/machines/sintering.png";
import { SEO } from "../components/seo";

export default function MachinesPage() {
    const machines: InfoCardProps[] = [
        {
            infoImg: imgPrinter,
            imgTitle: <>Sindoh A1sd<br/>(3D 프린터)</>
        },
        {
            infoImg: imgCasting,
            imgTitle: <>millenium-R-HD<br/>(고주파 주조기)</>
        },
        {
            infoImg: imgLegin,
            imgTitle: <><br/>(자동 레진 주입기)</>
        },
        {
            infoImg: imgZirMiller,
            imgTitle: <>imes-icore 150i<br/>(지르코니아 밀링머신)</>
        },
        {
            infoImg: imgAutMiller,
            imgTitle: <>DOF craft-5x<br/>(커스텀어버트먼트 밀링머신)</>
        },
        {
            infoImg: imgFurnace,
            imgTitle: <>ivoclar programat p319<br/>(포세린 퍼니스)</>
        },
        {
            infoImg: imgSintering,
            imgTitle: <>Tiger mini plus<br/>(지르코니아 신터링 머신)</>
        },
    ]

    return (
        <PageLayout>
            <TitleHeader title="보유장비"/>

            <ExplainLayout
                title={<>보유장비,<br/>정성에 기술을 더하다.</>}
            >
                {
                    machines.map((machine, idx) => (
                        <InfoCard
                            key={`machine#${idx}`}
                            infoImg={machine.infoImg}
                            imgTitle={machine.imgTitle}
                        />
                    ))
                }
            </ExplainLayout>
        </PageLayout>
    );
}

export const Head = () => {
    return (
        <SEO title="베스트 치과기공소 - 보유장비"/>
    )
}