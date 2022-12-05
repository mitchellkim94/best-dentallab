import React from "react";
import InfoCard from "../components/layouts/InfoCard";
import IntroCard from "../components/layouts/IntroCard";
import PageLayout from "../components/layouts/PageLayout";
import MenuHeader from "../components/MenuHeader";

import { MdContentCut } from "react-icons/md";
import IntroDenture from "../images/intro_denture.png";
import SwipeContainer from "../components/layouts/SwipeContainer";
import printer from "../images/machine-3d_printer.png";

interface Machine {
    image?: string,
    label: string
}

export default function HomePage()  {
    const machines: Machine[] = [
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
    ]

    return (
        <PageLayout grey>
            <MenuHeader/>
            <div className="container">
                메인페이지 입니다.

                <IntroCard
                    bgImage={IntroDenture}
                    onClick={() => {}}
                >
                    Denture<br/>
                    시스템
                </IntroCard>

                <InfoCard
                    icon={MdContentCut}
                    title="선택삭제"
                    desc="마운팅 후 선택삭제를 통해 정확한 교합 조정이 진행됩니다. 간단하지만 강력하게 감소하는 체어타임을 느껴보세요."
                />

            </div>
                <SwipeContainer
                    contents={
                        machines.map(machine => (
                            <div className="swipe_contents">
                                <div className="swipe_contents--image">
                                    <img src={machine.image}/>
                                </div>
                                <span>{ machine.label }</span>
                            </div>
                        ))
                    }
                />
        </PageLayout>
    )
}