import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import TitleHeader from "../components/headers/TitleHeader";
import InfoCard, { InfoCardProps } from "../components/layouts/InfoCard";
import ExplainLayout from "../components/layouts/ExplainLayout";

import imgCombo from "../images/denture/combo.png";
import imgCuring from "../images/denture/curing.png";
import imgInvocap from "../images/denture/invocap.png";
import imgPartial from "../images/denture/partial.png";
import imgValplast from "../images/denture/valplast.png";
import { SEO } from "../components/seo";

export default function DenturePage()  {
    const dentures: InfoCardProps[] = [
        {
            infoImg: imgCuring,
            title: <>탄탄한 기본기<br/>일반 Curing</>,
            desc: '일반적인 열중합 방식의 덴쳐로서 보험틀니로 많이 사용됩니다.',
        },
        {
            infoImg: imgInvocap,
            title: <>더 단단하게<br/>Ivo-cap Curing</>,
            desc: '열중합과 가압방식이 합쳐진 형태로 일반 중합방식보다도 강도, 경도가 우수한 프리미엄 덴쳐입니다.',
        },
        {
            infoImg: imgValplast,
            title: <>더 유연하게<br/>ValPlast</>,
            desc: '가볍고 탄성이 우수해 사용성이 좋고 부러질 위험이 적습니다. 임플란트 시술 후 임시덴쳐로도 활용이 가능합니다. 치아에 Undercut이 심한 환자분, Metal Clasp가 보이는걸 꺼리시는 환자분께도 적합합니다.',
        },
        {
            infoImg: imgPartial,
            title: <>완벽한 메탈 프레임<br/>Partial Denture</>,
            desc: '고주파 주조기를 사용함으로써 메탈 프레임의 적합도, 탄력성, 안정성이 우수합니다.',
        },
        {
            infoImg: imgCombo,
            title: <>유연하고 단단한<br/>Combo Denture</>,
            desc: 'Flexible Denture의 장점과 Patial Metal Frame의 장점이 합쳐진 프리미엄 덴쳐로 Metal Clasp가 노출되지 않아 심미성이 좋고 Metal Frame이 들어가 튼튼한 덴쳐입니다.',
        },
    ];

    return (
        <PageLayout>
            <TitleHeader title="Denture System"/>
            
            <ExplainLayout
                title={<>베스트기공소의<br/>DentureSystem</>}
            >   
                {
                    dentures.map((denture, idx)=> (
                        <InfoCard
                            key={`denture#${idx}`}
                            infoImg={denture.infoImg}
                            title={denture.title}
                            desc={denture.desc}
                        />
                    ))
                }
            </ExplainLayout>
        </PageLayout>
    )
}

export const Head = () => {
    return (
        <SEO title="베스트 치과기공소 - Denture"/>
    )
}
