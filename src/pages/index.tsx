import React from "react";
import IntroCard, { IntroCardProps } from "../components/layouts/IntroCard";
import PageLayout from "../components/layouts/PageLayout";
import CircleLabel from "../components/layouts/CircleLabel";
import BlockButton from "../components/buttons/BlockButton";

// Images
import introImg from "../images/intro.png";
import choiceDelivery from "../images/choices/delivery.png";
import choiceIso from "../images/choices/iso.png";
import choicePatient from "../images/choices/patient.png";
import choiceEquipment from "../images/choices/equipment.png";
import choiceResarch from "../images/choices/research.png";
import gateCadcam from "../images/cad/gate_cadcam.png";
import gateDenture from "../images/denture/gate_denture.png";
import gateModelless from "../images/modelless/gate_modelless.png";
import gateMachines from "../images/machines/gate_machines.png";

import { Link } from "gatsby";
import ImageSection from "../components/layouts/ImageSection";

interface ImageInfo {
    image?: string,
    label: string
}

interface IntroCardData extends IntroCardProps {
    title: JSX.Element;
    path: string;
}

export default function HomePage()  {
    const choices: ImageInfo[] = [
        { image: choiceEquipment, label: '최첨단장비' },
        { image: choicePatient, label: '환자맞춤형' },
        { image: choiceDelivery, label: '전국배송' },
        { image: gateDenture, label: '모든보철관리' },
        { image: choiceResarch, label: '연구전담부서' },
        { image: choiceIso, label: 'ISO인증완료' }
    ];
    
    const systems: IntroCardData[] = [
        {
            bgImage: gateDenture,
            title: <>DENTURE<br/>시스템</>,
            path: "/denture",
            onClick: () => {}
        },
        {
            bgImage: gateCadcam,
            title: <>CAD/CAM<br/>시스템</>,
            path: "/cadcam",
            theme: 'dark',
            onClick: () => {}
        },
        {
            bgImage: gateModelless,
            title: <>MODELLESS<br/>시스템</>,
            path: "/modelless",
            onClick: () => {}
        },
        {
            bgImage: gateMachines,
            title: <>보유장비</>,
            path: "/machines",
            onClick: () => {}
        },
    ];
    
    return (
        <PageLayout grey>
            <ImageSection
                className="home_intro" 
                bgImage={introImg}
                headerTitle="''"
            >
                <h1 className="text--white">
                    깨지지 않는<br/>
                    <strong className="text--blue">신뢰로</strong>
                </h1>

            </ImageSection>

            <div className="container">
                <section className="home home_choice">
                    <h2 className="text--grey">
                        베스트한 선택은<br/>
                        <strong className="text--black">베스트</strong>를 선택하는 것.
                    </h2>
                    <div className="choice">
                        {
                            choices.map((choice, key) => (
                                <CircleLabel
                                    image={choice.image!}
                                    label={choice.label}
                                    key={`choice#${key}`}
                                />
                            ))
                        }
                    </div>
                </section>

                <section className="home home_systems">
                    <h2 className="text--grey">
                        <strong className="text--blue">베스트 시스템,</strong><br/>
                        체계적, 기술적, 미래지향적.
                    </h2>
                    <ul className="home_systems--list">
                        {
                            systems.map((system, idx) => (
                                <li className="system" key={`system#${idx}`}>
                                    <Link to={system.path}>                            
                                        <IntroCard
                                            bgImage={system.bgImage}
                                            onClick={system.onClick}
                                            theme={system.theme}
                                        >
                                            { system.title }
                                        </IntroCard>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
            </div>

            <section className="home home_more container">
                <h2>베스트 기공소 더 알아보기</h2>
                <div className="buttons">
                    <BlockButton size="large" color="#D2D2D7" theme="light" onClick={() => {
                        location.href = 'https://instagram.com/bestdentallab';
                    }}>인스타그램</BlockButton>
                    <BlockButton size="large" color="#D2D2D7" theme="light" onClick={() => {
                        location.href = 'http://pf.kakao.com/_ZLUxos';
                    }}>카카오채널</BlockButton>
                </div>
            </section>

            <footer className="home home_footer container">
                <p className="text--grey">
                    <b>베스트 치과기공소</b><br/>
                    대표 : 송부근  |  사업자등록번호 : 127-99-91381<br/>
                    전화번호 : 031-821-2492  |  이메일 : bestdentallab101@gmail.com<br/>
                    주소 : 경기도 의정부시 호국로 1297 태화빌딩 4층<br/>
                </p>
                <small className="text--grey">Copyright © 2022 베스트치과기공소. 모든 권리 보유.</small>
            </footer>
        </PageLayout>
    )
}