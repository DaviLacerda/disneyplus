import { useState, useEffect } from 'react'

import { CardsContainer } from "./styles";

// import cards
import RecommendedCards from '../../assets/cards/recommended'
import NewCards from '../../assets/cards/news'
import AcclaimedCards from '../../assets/cards/acclaimed'

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SliderContainer } from '../MainSlider/styles';

function CardSection() {
    const [recommendedCard, setRecommendedCard] = useState([])
    const [newCard, setNewCard] = useState([])
    const [acclaimedCard, setAcclaimedCard] = useState([])

    SwiperCore.use([Navigation])

    useEffect(() => {
        for(let i = 0; i < RecommendedCards.length ; i++){
            setRecommendedCard(currentList => [...currentList, RecommendedCards[i].card]);
        }
        
        for(let j = 0; j < NewCards.length ; j++){
            setNewCard(currentList => [...currentList, NewCards[j].card]);
        }

        for(let k = 0; k < AcclaimedCards.length ; k++){
            setAcclaimedCard(currentList => [...currentList, AcclaimedCards[k].card]);
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
                    slidesPerGroup={5}
                    navigation
                    >
                        {recommendedCard.length && recommendedCard.map((recommendedImage) => {
                            return (
                                <SwiperSlide>
                                    <div className="contentSlider__content">
                                        <img src={recommendedImage}></img>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </SliderContainer>
                <h3>New to Disney+</h3>
                <SliderContainer className='contentSlider__slider'>
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    navigation
                    >
                        {newCard.length && newCard.map((newImage) => {
                            return (
                                <SwiperSlide>
                                    <div className="contentSlider__content">
                                        <img src={newImage}></img>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </SliderContainer>
                <h3>Critically Acclaimed</h3>
                <SliderContainer className='contentSlider__slider'>
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    navigation
                    >
                        {acclaimedCard.length && acclaimedCard.map((acclaimedImage) => {
                            return (
                                <SwiperSlide>
                                    <div className="contentSlider__content">
                                        <img src={acclaimedImage}></img>
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