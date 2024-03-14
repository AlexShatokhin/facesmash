import { FC } from "react";
import {HomePageLayout, HomePageTitle, HomePageSubtitle } from "./HomePageContent.style";

type HomePageContentProps = {
    style: object | null
}

const HomePageContent : FC<HomePageContentProps> = ({style}) => {
    return (
        <HomePageLayout style = {style}>
            <HomePageTitle>facesmash</HomePageTitle>
            <HomePageSubtitle>Выберите элемент меню</HomePageSubtitle>
        </HomePageLayout>
    )
} 

export default HomePageContent;