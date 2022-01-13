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
    const [redirect, setRedirect] = useState([])

    SwiperCore.use([Navigation, Autoplay])

    let arrayWithBanners = banners;

    function getPoster(param) {   
        setUrl(currentList => [...currentList, param.banner]);
        setLogo(currentList => [...currentList, param.logo]);
        setRedirect(currentList => [...currentList, param.name.toLowerCase().replace(/([ :])/g,"-")]);
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
                autoplay={{delay: 6000}}
                centeredSlides='true'
            >
                {url.length !== 0 && url.map((banner, index, keyValue) => {
                    if(index == 0 || index == 5 || index == 6){
                        return (
                            <SwiperSlide key={`content__${redirect[index]}`}>
                                <div className="content">
                                    <a href={redirect[index]}>
                                        <img src={banner}></img>
                                        <img src={logo[index]} className="overlay"></img>
                                    </a>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    else return (
                            <SwiperSlide key={`content__${redirect[index]}`}>
                                <div className="content">
                                    <a href={redirect[index]}>
                                        <img src={banner}></img>
                                        <img src={logo[index]}></img>
                                    </a>
                                </div>
                            </SwiperSlide>
                        )
                })}
            </Swiper>
        </SliderContainer>
    )
}

export default MainSlider;