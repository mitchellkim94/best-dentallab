import React from "react";
import TitleHeader from "../components/headers/TitleHeader";
import PageLayout from "../components/layouts/PageLayout";
import { MdChevronRight, MdModelTraining, MdOutlineWidgets, MdQrCodeScanner, MdSave } from "react-icons/md";

import introModelless from "../images/modelless/intro_modelless.png";
import scanImg from "../images/modelless/scan.png";
import InfoCard, { InfoCardProps } from "../components/layouts/InfoCard";
import ExplainLayout from "../components/layouts/ExplainLayout";
import { SEO } from "../components/seo";

export default function ModellessPage()  {
    const explains: InfoCardProps[] = [
        {
            icon: MdSave,
            title: '데이터기반',
            desc: '러버인상보다 더 적은 오차로 Custom Abutment부터 Zirconia crown까지 원스텝으로 제작합니다. 지속적으로 수집한 데이터를 기반으로 구강내 조정없이 세팅이 가능해집니다. '
        },
        {
            icon: MdModelTraining,
            title: '전문인력',
            desc: '충분한 노하우와 제작 경험을 갖춘 전문 인력으로 구성되어있어 믿고 맡기실 수 있습니다.'
        },
        {
            icon: MdOutlineWidgets,
            title: '넓은활용',
            desc: '이제 알지네이트는 서랍에 넣어두세요. 구강스캔 파일만 있다면 기공소에서 출력한 모델을 기반으로 가의치, 개인트레이, 임시덴처까지 제작 가능합니다.'
        },
    ];

    return (
        <PageLayout>
            <TitleHeader title="Modelless"/>

            <ExplainLayout
                title={<>모델없이<br/>완벽한 모델링<br/>Modelless</>}
                imageSrc={introModelless}
            >
                <div className="info_card">
                    <div className="info_card--icon">
                        <MdQrCodeScanner size={48}/>
                    </div>
                    <h3 className="info_card--title">디지털 구강스캔</h3>

                    <div className="info_card--desc modelless_info">
                        <div className="modelless_process">
                            치과<MdChevronRight size={24}/>구강스캔<MdChevronRight size={24}/>기공소                    
                        </div>
                        <div className="info_card--image">
                            <img src={scanImg} alt="scan_img" />
                        </div>
                        <p>
                            치과에서 환자의 구강스캔파일을 실시간으로 치과기공소에 전달하세요. 작업 가능여부를 바로 확인받아 스캔오류로 인한 환자 재방문을 방지합니다.
                        </p>
                    </div>
                </div>

                {
                    explains.map((explain, idx) => (
                        <InfoCard
                            key={`modelless#${idx}`}
                            icon={explain.icon}
                            title={explain.title}
                            desc={explain.desc}
                        />
                    ))
                }
            </ExplainLayout>
        </PageLayout>
    )
}

export const Head = () => {
    return (
        <SEO title="베스트 치과기공소 - 모델리스"/>
    )
}