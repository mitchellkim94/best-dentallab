import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import TitleHeader from "../components/headers/TitleHeader";
import ImageSection from "../components/layouts/ImageSection";
import BlockButton from "../components/buttons/BlockButton";
import InfoCard, { InfoCardProps } from "../components/layouts/InfoCard";

import cadcamIntroImg from "../images/cad/intro.png";
import zirconiaImg from "../images/cad/zirconia_crown.png";
import customAbutmentImg from "../images/cad/custom_abutment.png";
import anodizingImg from "../images/cad/anodizing.png";
import inlayimg from "../images/cad/hybrid_ceramic_inlay.png";
import printerImg from "../images/cad/3d_printer.png";
import printerModel from "../images/cad/printer/model.png";
import printerFipper from "../images/cad/printer/fipper.png";
import printerGuide from "../images/cad/printer/guide.png";
import printerCrown from "../images/cad/printer/crown.png";

import { MdContentCut, MdCloseFullscreen, MdHistory, MdOutlineSignalWifi0Bar, MdInsertEmoticon, MdOutlineExpand, MdArrowDownward } from "react-icons/md";
import ExplainLayout from "../components/layouts/ExplainLayout";

export default function CadcamPage()  {
    const zirconiaExplains: InfoCardProps[] = [
        {
            icon: MdContentCut,
            title: '선택삭제',
            desc: '마운팅 후 선택삭제를 통해 정확한 교합 조정이 진행됩니다. 간단하지만 강력하게 감소하는 체어타임을 느껴보세요.'
        },
        {
            icon: MdCloseFullscreen,
            title: '마이크로미터 조정',
            desc: '치과마다 다른 셋팅 값에 마이크로미터 단위로 대응합니다. 완벽에 가까운 컨택이 가능해집니다.'
        },
        {
            icon: MdHistory,
            title: '더욱 줄어드는 체어타임',
            desc: '모든 셋팅과 함께 쌓여가는 데이터에 따라 점점 더 체어타임은 줄어듭니다. 지속적인 추적의 힘을 가져가세요.'
        },
    ];

    const printerResults: InfoCardProps[] = [
        {
            infoImg: printerModel,
            imgTitle: '구강스캔 모델'
        },
        {
            infoImg: printerFipper,
            imgTitle: 'Flexible Fipper'
        },
        {
            infoImg: printerCrown,
            imgTitle: 'Provisional Crown'
        },
        {
            infoImg: printerGuide,
            imgTitle: 'Surgical Guide'
        },
    ];

    return (
        <PageLayout>
            <TitleHeader subtitle="CAD/CAM"/>
            
            <ImageSection 
                headerTitle="개요"
                className="cad_intro" 
                bgImage={cadcamIntroImg}
            >
                <h1>
                    CAD/CAM<br/>
                    System
                </h1>

                <h2>지르코니아</h2>
                <h2>커스텀<br/>어버트먼트</h2>
                <h2>하이브리드<br/>세라믹인레이</h2>
                <h2>3D 프린팅</h2>

                <div>
                    <p>
                        컴퓨팅 파워의<br/>
                        <strong className="text--yellow">강력한</strong> 설계/제작
                    </p>
                    <BlockButton
                        color="#e3ba3e"
                        size="large"
                    >지금 문의하기</BlockButton>
                </div>

            </ImageSection>
            
            {/* 지르코니아 */}
            <ExplainLayout
                headerTitle="지르코니아"
                title={<>만족도 높은<br/>지르코니아 크라운의 비밀</>}
                imageSrc={zirconiaImg}
            >
                {
                    zirconiaExplains.map((explain, idx) => (
                        <InfoCard
                            key={`zirconia#${idx}`}
                            icon={explain.icon}
                            title={explain.title}
                            desc={explain.desc}
                        />
                    ))
                }
            </ExplainLayout>
            
            {/* 커스텀 어버트먼트 */}
            <ExplainLayout
                headerTitle="커스텀 어버트먼트"
                title={<>이제는 필수가 된<br/>환자 맞춤형 지대주<br/>(Custom Abutment)</>}
                imageSrc={customAbutmentImg}
            >
                <p>모든 환자의 잇몸은 다릅니다. 입안에 들어가는 기공물도 모두 달라야합니다.</p>
                <div className="point_explain">
                    <MdOutlineSignalWifi0Bar size={32}/>
                    <span>자유로운 각도. 정확한 패스.</span>
                </div>
                <div className="point_explain">
                    <MdInsertEmoticon size={32}/>
                    <span>Emergence Profile.</span>
                </div>
                <div className="point_explain">
                    <MdOutlineExpand size={32}/>
                    <span>크라운의 일정한 두께 확보.</span>
                </div>
                <div className="point_explain">
                    <MdArrowDownward size={32}/>
                    <span>교합압 감소.</span>
                </div>
                <p>환자 개개인에게 맞춘 커스텀 어버트먼트의 특징 덕분에 파절 위험성은 감소하고 유지와 지지 형태는 최적화 됩니다.</p>
                <InfoCard
                    infoImg={anodizingImg}
                    title="황금빛 어노다이징"
                    desc="전기적 표면 처리 기술로 부식 저항성과 내구성은 향상되고 지르코니아 전치부 식립시 메탈 색이 비춰 나오는 것을 방지합니다."
                />
            </ExplainLayout>
            
            {/* 하이브리드 세라믹 인레이 */}
            <ExplainLayout
                headerTitle="하이브리드 세라믹 인레이"
                title={<>아름답고 튼튼한<br/>하이브리드 세라믹 인레이</>}
                imageSrc={inlayimg}
            >
                <p>레진 인레이보다 아름다운 외관과 세라믹 인레이보다 깨지지 않는 하이브리드 소재의 인레이입니다.</p>
                <div className="inlay_info_card">
                    <div className="inlay_info_card--data">
                        <div className="info_bar">
                            <div>
                                <span className="bar bar--80"></span>
                                <span className="bar_title">세라믹</span>
                            </div>
                            <strong>80%</strong>
                        </div>
                        <p>변색과 착색 없음</p>
                    </div>
                    <span className="hr_border"></span>
                    <div className="inlay_info_card--data">
                        <div className="info_bar">
                            <div>
                                <span className="bar bar--20"></span>
                                <span className="bar_title">고강도레진</span>
                            </div>
                            <strong>20%</strong>
                        </div>
                        <p>
                            레진의 탄성으로 낮은 파절 위험<br/>
                            <br/>
                            수월한 셋팅
                        </p>
                    </div>
                </div>
            </ExplainLayout>
            
            {/* 3D 프린터 */}
            <ExplainLayout
                headerTitle="3D 프린터"
                title={<>무한한 가능성<br/>3D Printing</>}
                imageSrc={printerImg}
            >
                {
                    printerResults.map((result, idx) => (
                        <InfoCard
                            key={`printer#${idx}`}
                            infoImg={result.infoImg}
                            imgTitle={result.imgTitle}
                        />
                    ))
                }
            </ExplainLayout>
        </PageLayout>
    )
}
