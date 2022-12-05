import React from "react";
import IntroCard from "../components/layouts/IntroCard";
import PageLayout from "../components/layouts/PageLayout";
import MenuHeader from "../components/MenuHeader";

import IntroDenture from "../images/intro_denture.png";

export default function HomePage()  {
    return (
        <PageLayout>
            <MenuHeader/>
            <div className="contents">
                메인페이지 입니다.

                <IntroCard
                    bgImage={IntroDenture}
                    onClick={() => {}}
                >
                    Denture<br/>
                    시스템
                </IntroCard>
            </div>
        </PageLayout>
    )
}