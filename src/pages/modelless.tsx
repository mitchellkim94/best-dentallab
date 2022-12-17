import React from "react";
import MenuHeader from "../components/headers/MenuHeader";
import TitleHeader from "../components/headers/TitleHeader";
import PageLayout from "../components/layouts/PageLayout";
import { MdChevronRight } from "react-icons/md";

import zirconiaImg from "../images/cad/zirconia_crown.png";
import InfoCard, { InfoCardProps } from "../components/layouts/InfoCard";
import ExplainLayout from "../components/layouts/ExplainLayout";

export default function ModellessPage()  {
    const explains: InfoCardProps[] = [
        {
            title: '디자인',
            desc: '모델리스로 더 적은 오차로 Custom Abutment부터 Zirconia까지 원스텝으로 작업합니다.'
        },
        {
            title: '제작',
            desc: '모델리스로 불가능하다면 아날로그의 불편한 과정을 겪어야 할까요? 가의치, 개인트레이 등 3D Printer를 활용하여 간편하고 빠르게 제작합니다.'
        },
        {
            title: '셋팅',
            desc: '모델리스의 장점은 모델이 없어지는 것이 아니라 작업가능여부를 피드백을 통해 실시간으로 주고 받을 수 있다는 것이죠. 지속적인 피드백을 통해 체어타임을 줄여보세요.'
        },
    ];

    return (
        <PageLayout>
            <TitleHeader title="Modelless"/>

            <ExplainLayout
                title={<>모델없이<br/>완벽한 모델링<br/>Modelless</>}
                imageSrc={zirconiaImg}
            >
                <div className="info_card">
                    <h3 className="info_card--title">스캔</h3>

                    <div className="info_card--desc modelless_info">
                        <h4>모델리스</h4>
                        <div className="modelless_process">
                            치과<MdChevronRight size={24}/>구강스캔<MdChevronRight size={24}/>기공소                    
                        </div>

                        <p>
                            치과에서 환자의 구강스캔파일을 실시간으로 기공소로 전달하세요. 작업 가능여부를 바로 컨펌받아 제작시작까지 걸리는 시간이 비약적으로 줄어듭니다.
                        </p>

                        <span className="hr_border"></span>
                        
                        <h4 className="opacity">아날로그</h4>
                        <p className="opacity">
                            러버인상채득, 기공소로의 배송, 석고인상확인까지 너무나 번거로운 과정에 제작시작까지 많은 시간이 소요되며 인상실패시 환자재방문까지 필요하게 됩니다.
                        </p>
                    </div>
                </div>

                {
                    explains.map((explain, idx) => (
                        <InfoCard
                            key={`modelless#${idx}`}
                            title={explain.title}
                            desc={explain.desc}
                        />
                    ))
                }
            </ExplainLayout>
        </PageLayout>
    )
}
