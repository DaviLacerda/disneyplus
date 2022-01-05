import axios from "axios";
import { useState, useEffect } from "react";

import { SliderContainer } from "./styles";

// import Banners
import banners from "../../assets/banners/banners";

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation , Autoplay} from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'

function MainSlider() {
    const [url, setUrl] = useState([])
    const [logo, setLogo] = useState([])

    SwiperCore.use([Navigation, Autoplay])

    let arrayWithBanners = banners;

    function getPoster(param) {   
        setUrl(currentList => [...currentList, param.banner]);
        setLogo(currentList => [...currentList, param.logo]);
    }

    useEffect(() => {
        for(let i = 0; i < arrayWithBanners.length; i++){
            getPoster(arrayWithBanners[i])
        }
    }, [])

    return (
        <SliderContainer>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                loop='true'
                navigation
                autoplay
                centeredSlides='true'
            >
                {url.length !== 0 && url.map((banner, index) => {
                    let title = logo[index];
                    return (
                            <SwiperSlide>
                                <div className="content">
                                    <img src={banner}></img>
                                    <div className="title">
                                        <img src={title}></img>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                })}
            </Swiper>
        </SliderContainer>
    )
}

export default MainSlider;