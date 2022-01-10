import { useState, useEffect } from 'react'

import { CardsContainer } from "./styles";
import RecommendedCards from '../../assets/cards/recommended'

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SliderContainer } from '../MainSlider/styles';

function CardSection() {
    const [posterCard, setPosterCard] = useState([])
    SwiperCore.use([Navigation])

    useEffect(() => {
        for(let i = 0; i < RecommendedCards.length ; i++){
            setPosterCard(currentList => [...currentList, RecommendedCards[i].card]);
        }
    }, [])

    return (
        <CardsContainer>
            <section className="contentSlider" id="foryou">
                <h3>Recommended For You</h3>
                <SliderContainer className='contentSlider__slider'>
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    navigation
                    >
                        {posterCard.length && posterCard.map((poster) => {
                            return (
                                <SwiperSlide>
                                    <div className="contentSlider__content">
                                        <img src={poster}></img>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </SliderContainer>
            </section>
        </CardsContainer>
    )
}

export default CardSection;