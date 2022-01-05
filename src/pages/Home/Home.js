// import components
import Header from "../../components/Header/Header";
import MainSlider from "../../components/MainSlider/MainSlider";
import CompanyCard from "../../components/CompanyCard/CompanyCard";

import { GlobalStyles } from "../../GlobalStyles";

function Home() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <Header></Header>
            <MainSlider></MainSlider>
            <CompanyCard></CompanyCard>
        </>
    )
}

export default Home;