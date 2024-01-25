import {HomePageLayout, HomePageTitle, HomePageSubtitle } from "./HomePageContent.style";

const HomePageContent = ({style}) => {
    return (
        <HomePageLayout style = {style}>
            <HomePageTitle>facesmash</HomePageTitle>
            <HomePageSubtitle>Выберите элемент меню</HomePageSubtitle>
        </HomePageLayout>
    )
} 

export default HomePageContent;