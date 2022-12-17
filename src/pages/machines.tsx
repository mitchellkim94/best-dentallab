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

export default function MachinesPage() {
    const machines: InfoCardProps[] = [
        {
            infoImg: imgPrinter,
            imgTitle: '3D 프린터'
        },
        {
            infoImg: imgCasting,
            imgTitle: '고주파 주조기'
        },
        {
            infoImg: imgLegin,
            imgTitle: '자동 레진 주입기'
        },
        {
            infoImg: imgZirMiller,
            imgTitle: '지르코니아 밀링머신'
        },
        {
            infoImg: imgAutMiller,
            imgTitle: '커스텀어버트먼트 밀링머신'
        },
        {
            infoImg: imgFurnace,
            imgTitle: '포세린 퍼니스'
        },
        {
            infoImg: imgSintering,
            imgTitle: '지르코니아 신터링 머신'
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