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
                autoplay={{delay: 6000}}
                centeredSlides='true'
            >
                {url.length !== 0 && url.map((banner, index) => {
                    let title = logo[index];
                    if(index == 0 || index == 5 || index == 6){
                        return (
                            <SwiperSlide>
                                <div className="content">
                                    <img src={banner}></img>
                                    <img src={title} className="overlay"></img>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    else return (
                            <SwiperSlide>
                                <div className="content">
                                    <img src={banner}></img>
                                    <img src={title}></img>
                                </div>
                            </SwiperSlide>
                        )
                })}
            </Swiper>
        </SliderContainer>
    )
}

export default MainSlider;