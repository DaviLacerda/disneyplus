import { useState, useEffect } from 'react'

import { CardsContainer } from "./styles";

// import cards
import RecommendedCards from '../../assets/cards/recommended'
import NewCards from '../../assets/cards/news'
import AcclaimedCards from '../../assets/cards/acclaimed'
import StarWarsCards from '../../assets/cards/starwars'

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SliderContainer } from '../MainSlider/styles';

function CardSection() {
    const [recommendedCard, setRecommendedCard] = useState([])
    const [recommendedRedirect, setRecommendedRedirect] = useState([])

    const [newCard, setNewCard] = useState([])
    const [newRedirect, setNewRedirect] = useState([])

    const [acclaimedCard, setAcclaimedCard] = useState([])
    const [acclaimedRedirect, setAcclaimedRedirect] = useState([])

    const [starWarsCard, setStarWarsCard] = useState([])
    const [starWarsRedirect, setStarWarsRedirect] = useState([])

    SwiperCore.use([Navigation])

    useEffect(() => {
        for(let i = 0; i < RecommendedCards.length ; i++){
            setRecommendedCard(currentList => [...currentList, RecommendedCards[i].card]);
            setRecommendedRedirect(currentList => [...currentList, RecommendedCards[i].name.toLowerCase().replace(/([ :])/g,"-")])
        }
        
        for(let j = 0; j < NewCards.length ; j++){
            setNewCard(currentList => [...currentList, NewCards[j].card]);
            setNewRedirect(currentList => [...currentList, NewCards[j].name.toLowerCase().replace(/([ :])/g,"-")])
        }

        for(let k = 0; k < AcclaimedCards.length ; k++){
            setAcclaimedCard(currentList => [...currentList, AcclaimedCards[k].card]);
            setAcclaimedRedirect(currentList => [...currentList, AcclaimedCards[k].name.toLowerCase().replace(/([ :])/g,"-")])
        }

        for(let s = 0; s < StarWarsCards.length ; s++){
            setStarWarsCard(currentList => [...currentList, StarWarsCards[s].card]);
            setStarWarsRedirect(currentList => [...currentList, StarWarsCards[s].name.toLowerCase().replace(/([ :])/g,"-")])
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
                    slidesPerGroup={1}
                    navigation
                    >
                        {recommendedCard.length && recommendedCard.map((recommendedImage, recommendedIndex) => {
                            return (
                                <SwiperSlide key={`${recommendedRedirect}${recommendedIndex}`}>
                                    <div className="contentSlider__content">
                                        <a href={recommendedRedirect[recommendedIndex]}>
                                            <img src={recommendedImage}></img>
                                        </a>                
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
                        {newCard.length && newCard.map((newImage, newIndex) => {
                            return (
                                <SwiperSlide  key={`${newRedirect}${newIndex}`}>
                                    <div className="contentSlider__content">
                                        <a href={newRedirect[newIndex]}>
                                            <img src={newImage}></img>
                                        </a>
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
                        {acclaimedCard.length && acclaimedCard.map((acclaimedImage, acclaimedIndex) => {
                            return (
                                <SwiperSlide key={`${acclaimedRedirect}${acclaimedIndex}`}>
                                    <div className="contentSlider__content">
                                        <a href={acclaimedRedirect[acclaimedIndex]}>
                                            <img src={acclaimedImage}></img>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </SliderContainer>

                <h3>Star Wars</h3>
                <SliderContainer className='contentSlider__slider'>
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    navigation
                    >
                        {starWarsCard.length && starWarsCard.map((starWarsImage, starWarsIndex) => {
                            return (
                                <SwiperSlide key={`${starWarsRedirect}${starWarsIndex}`}>
                                    <div className="contentSlider__content">
                                        <a href={starWarsRedirect[starWarsIndex]}>
                                            <img src={starWarsImage}></img>
                                        </a>
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