import axios from "axios";
import { useState, useEffect } from "react";

import { SliderContainer } from "./styles";

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'

// import images
// import img1 from '../../assets/img1.jpg'
// import img2 from '../../assets/img2.jpg'

function MainSlider() {
    const [url, setUrl] = useState([])

    SwiperCore.use([Navigation])

    async function getPoster(name, index) {
        const film = await axios.get(`http://www.omdbapi.com/?apikey=3ae69467&s=${name}`); 
        let data = film.data.Search[index].Poster
        setUrl(currentList => [...currentList, data]);
    }

    useEffect(() => {
        for(let i = 0; i < 6; i++){
            getPoster('star wars', i);
        }
    }, [])

    return (
        <SliderContainer>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop='true'
                navigation
            >
                {url.map((index) => {
                    return <SwiperSlide><img src={index}></img></SwiperSlide>
                })}
            </Swiper>
        </SliderContainer>
    )
}

export default MainSlider;