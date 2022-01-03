import axios from "axios";
import { useState, useEffect } from "react";

import { SliderContainer } from "./styles";

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation , Autoplay} from "swiper";

import 'swiper/css'
import 'swiper/css/navigation'

// import images
// import img1 from '../../assets/img1.jpg'
// import img2 from '../../assets/img2.jpg'

function MainSlider() {
    const [url, setUrl] = useState([])
    const [title, setTitle] = useState([])

    SwiperCore.use([Navigation, Autoplay])

    async function getPoster(name, index) {
        const film = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=bdadbcdd7ea9e811044fec7cfcc65261&language=en-US&query=${name}`); 

        let banner = film.data.results[index].backdrop_path;
        let title = film.data.results[index].title;

        setUrl(currentList => [...currentList, banner]);
        setTitle(currentList => [...currentList, title]);
    }

    useEffect(() => {
        for(let i = 0; i < 6; i++){
            getPoster('star wars', i);
        }
    }, [])

    return (
        <SliderContainer>
            <Swiper
                spaceBetween={650}
                slidesPerView={3}
                loop='true'
                navigation
                autoplay
            >
                {url.length !== 0 && url.map((banner, index) => {
                    let h1 = title[index];
                    return (
                            <SwiperSlide>
                                <div className="content">
                                    <img src={`http://image.tmdb.org/t/p/w500/${banner}`}></img>
                                    <div className="title">
                                        <h1>{h1}</h1>
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