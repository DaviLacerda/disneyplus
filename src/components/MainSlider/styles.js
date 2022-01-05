import styled from 'styled-components';

export const SliderContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;

    margin-top:25vh;

    @media(min-width:900px){
        margin-top:10vh;
    }

    .swiper-button-next, .swiper-button-prev{
        color:rgb(249, 249, 249);
        
        &:after{
            font-size:2em;
        }
    }

    .swiper{
        width:100%;
        padding:16px;
    }

    .swiper-slide{
        display:flex;
        align-items:center;
        justify-content:center;

        width:100%;
        height:500px;

        .content{
            display:flex;
            align-items:center;
            justify-content:center;

            position:relative;

            width:100%;
            max-width:1400px;
            height:100%;

            &:hover{
                cursor:pointer;

                img{
                    filter:brightness(0.9);
                    outline:3px solid #fff;
                }
            }

            img{
                width:100%;
                height:100%;

                box-shadow: 0px 7px 17px -1px #000000;

                filter:brightness(0.75);
                outline:3px solid #fff0;
                transition:filter .5s, outline .5s;
                will-change:filter outline;
                
                object-fit:cover;

                border-radius:20px;
            }

            h1{
                font-family:'Nunito',sans-serif;

                position:absolute;
                top:7.5%;
                left:5%;
            }
        }
    }
`;