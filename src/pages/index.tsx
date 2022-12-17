import React from "react";
import IntroCard, { IntroCardProps } from "../components/layouts/IntroCard";
import PageLayout from "../components/layouts/PageLayout";
import SwipeContainer from "../components/layouts/SwipeContainer";
import CircleLabel from "../components/layouts/CircleLabel";
import BlockButton from "../components/buttons/BlockButton";

// Images
import introImg from "../images/intro.png";
import IntroDenture from "../images/intro_denture.png";
import printer from "../images/machine-3d_printer.png";
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
        { image: IntroDenture, label: '최첨단장비' },
        { image: IntroDenture, label: '환자맞춤형' },
        { image: IntroDenture, label: '전국배송' },
        { image: IntroDenture, label: '모든보철관리' },
    ];
    
    const systems: IntroCardData[] = [
        {
            bgImage: IntroDenture,
            title: <>DENTURE<br/>시스템</>,
            path: "/denture",
            onClick: () => {}
        },
        {
            bgImage: IntroDenture,
            title: <>CAD/CAM<br/>시스템</>,
            path: "/cadcam",
            onClick: () => {}
        },
        {
            bgImage: IntroDenture,
            title: <>MODELLESS<br/>시스템</>,
            path: "/modelless",
            onClick: () => {}
        },
    ];

    const machines: ImageInfo[] = [
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
        { image: printer, label: '3D Printer' },
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
                        체계적, 기술적, 보편적.
                    </h2>
                    {
                        systems.map((system, idx) => (
                            <Link to={system.path} className="system" key={`system#${idx}`}>                            
                                <IntroCard
                                    bgImage={system.bgImage}
                                    onClick={system.onClick}
                                >
                                    { system.title }
                                </IntroCard>
                            </Link>
                        ))
                    }
                </section>
            </div>

            <section className="home home_machines">
                <h2 className="text--grey container">
                    <strong className="text--black">보유장비. </strong>정성에<br/>
                    기술을 더하다.
                </h2>
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
            </section>

            <section className="home home_more container">
                <h2>베스트 기공소 더 알아보기</h2>
                <div className="buttons">
                    <BlockButton size="large" color="#D2D2D7" theme="light">인스타그램</BlockButton>
                    <BlockButton size="large" color="#D2D2D7" theme="light">카카오채널</BlockButton>
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