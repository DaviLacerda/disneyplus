import { useState, useEffect } from "react";

import { CardsContainer } from "./styles";

// import cards
import RecommendedCards from "../../assets/cards/recommended";
import NewCards from "../../assets/cards/news";
import AcclaimedCards from "../../assets/cards/acclaimed";
import StarWarsCards from "../../assets/cards/starwars";

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SliderContainer } from "../MainSlider/styles";

function CardSection() {
    const [recommendedCard, setRecommendedCard] = useState([]);
    const [newCard, setNewCard] = useState([]);
    const [acclaimedCard, setAcclaimedCard] = useState([]);
    const [starWarsCard, setStarWarsCard] = useState([]);

    SwiperCore.use([Navigation]);

    useEffect(() => {
        for (let i = 0; i < RecommendedCards.length; i++) {
            setRecommendedCard((currentList) => [
                ...currentList,
                RecommendedCards[i],
            ]);
        }

        for (let j = 0; j < NewCards.length; j++) {
            setNewCard((currentList) => [...currentList, NewCards[j]]);
        }

        for (let k = 0; k < AcclaimedCards.length; k++) {
            setAcclaimedCard((currentList) => [
                ...currentList,
                AcclaimedCards[k],
            ]);
        }

        for (let s = 0; s < StarWarsCards.length; s++) {
            setStarWarsCard((currentList) => [
                ...currentList,
                StarWarsCards[s],
            ]);
        }
    }, []);

    return (
        <CardsContainer>
            <section className="contentSlider" id="foryou">
                <h3>Recommended For You</h3>
                <SliderContainer className="contentSlider__slider">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        navigation
                    >
                        {recommendedCard.length &&
                            recommendedCard.map((card) => {
                                return (
                                    <SwiperSlide key={card.name.toLowerCase()}>
                                        <div className="contentSlider__content">
                                            <a
                                                href={card.name
                                                    .toLowerCase()
                                                    .replace(/([ :])/g, "-")}
                                            >
                                                <img
                                                    src={card.card}
                                                    alt={card.name}
                                                    width='100%'
                                                    height='100%'
                                                ></img>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </SliderContainer>

                <h3>New to Disney+</h3>
                <SliderContainer className="contentSlider__slider">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        slidesPerGroup={5}
                        navigation
                    >
                        {newCard.length &&
                            newCard.map((card) => {
                                return (
                                    <SwiperSlide key={card.name.toLowerCase()}>
                                        <div className="contentSlider__content">
                                            <a
                                                href={card.name
                                                    .toLowerCase()
                                                    .replace(/([ :])/g, "-")}
                                            >
                                                <img
                                                    src={card.card}
                                                    alt={card.name}
                                                    width='100%'
                                                    height='100%'
                                                ></img>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </SliderContainer>

                <h3>Critically Acclaimed</h3>
                <SliderContainer className="contentSlider__slider">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        slidesPerGroup={5}
                        navigation
                    >
                        {acclaimedCard.length &&
                            acclaimedCard.map((card) => {
                                return (
                                    <SwiperSlide key={card.name.toLowerCase()}>
                                        <div className="contentSlider__content">
                                            <a
                                                href={card.name
                                                    .toLowerCase()
                                                    .replace(/([ :])/g, "-")}
                                            >
                                                <img
                                                    src={card.card}
                                                    alt={card.name}
                                                    width='100%'
                                                    height='100%'
                                                ></img>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </SliderContainer>

                <h3>Star Wars</h3>
                <SliderContainer className="contentSlider__slider">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        slidesPerGroup={5}
                        navigation
                    >
                        {starWarsCard.length &&
                            starWarsCard.map((card) => {
                                return (
                                    <SwiperSlide key={card.name.toLowerCase()}>
                                        <div className="contentSlider__content">
                                            <a
                                                href={card.name
                                                    .toLowerCase()
                                                    .replace(/([ :])/g, "-")}
                                            >
                                                <img
                                                    src={card.card}
                                                    alt={card.name}
                                                    width='100%'
                                                    height='100%'
                                                ></img>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </SliderContainer>
            </section>
        </CardsContainer>
    );
}

export default CardSection;
