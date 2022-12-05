import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import MenuHeader from "../components/MenuHeader";
import TitleHeader from "../components/TitleHeader";

export default function CadcamPage()  {
    return (
        <PageLayout>
            <MenuHeader>
                <TitleHeader title="개요" subtitle="CAD/CAM"/>
            </MenuHeader>
            <div>
                캐드캠페이지입니다.
            </div>
        </PageLayout>
    )
}
