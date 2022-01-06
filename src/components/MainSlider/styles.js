import styled from 'styled-components';

export const SliderContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;

    margin-top:18.5vh;

    @media(min-width:481px){
        margin-top:10vh;
    }

    @media(min-width:900px){
        margin-top:7.5vh;
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
        max-height:500px;

        .content{
            display:flex;
            align-items:center;
            justify-content:center;

            position:relative;

            width:100%;
            height:100%;

            padding:16px 32px;

            @media(max-width:600px){
                height:350px;
            }

            &:hover{
                cursor:pointer;

                img:not(:last-child){
                    filter:brightness(0.9);
                    border:3px solid #f0f0f0;
                }
            }

            img:not(:last-child){
                width:100%;
                height:100%;
                max-height:500px;

                box-shadow: 0px 7px 17px -1px #000000;

                filter:brightness(0.75);
                border:3px solid #fff0;
                transition:filter .5s, border .5s;
                will-change:filter border;
                
                object-fit:cover;

                border-radius:8px;

                @media(max-width:300px){
                    object-position:69.5%;
                }

                @media(min-width:300px){
                    object-position:76.5%;
                }
            }

            
            .overlay{
                position:absolute !important;
                top:15% !important;

                width:27% !important;
                left:10% !important;
                height:fit-content !important;
            }

            img:last-child{
                position: absolute;
                top: 0;

                width:100%;
                height:100%;

                @media(max-width:600px){
                    width:100%;
                    height:auto;

                    top:3vh;
                    left:5vw;
                }
            }
        }
    }
`;