import styled from 'styled-components';

export const CardsContainer = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    margin-top:2.5vh;

    display:flex;
    flex-direction:column;
    gap:40px;

    width:100%;
    padding:0 32px;
    
    font-family:'Nunito',sans-serif;
    font-weight:bold;

    .contentSlider{
        display:flex;
        flex-direction:column;

        h3{
            width:fit-content;
            padding:0 16px;
        }

        .contentSlider__slider{
            display:flex;
            flex-direction:row;
            flex-wrap:wrap;
            gap:8px;

            ${'' /* reset swiper default margin top */}
            margin:0;

            height:fit-content;

            .swiper{
                height:fit-content;
            }

            .swiper-button-next:after, .swiper-button-prev:after{
                color:#f0f0f000;
                font-size:3em;
                transition:color .3s;
            }

            .swiper-button-next:hover::after, .swiper-button-prev:hover::after{
                color:#f0f0f0;
            }

            .swiper-wrapper{
                height:fit-content;
            }

            .contentSlider__content{
                width:100%;
                height:82.5%;
                
                img{
                    width:100%;
                    height:100%;

                    object-fit:cover;
                    border-radius:6px;

                    background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
                    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

                    border:3px solid #D5D9E140;
                    transition:all .3s;

                    &:hover{
                        cursor:pointer;
                        border:3px solid #f0f0f0;
                        transform:scale(1.05);
                    }
                }
            }
        }   
    }
`;