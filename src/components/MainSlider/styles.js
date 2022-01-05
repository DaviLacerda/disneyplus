import styled from 'styled-components';

export const SliderContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;

    margin-top:20vh;

    @media(min-width:481px){
        margin-top:15vh;
    }

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
                height:500px;
            }

            &:hover{
                cursor:pointer;

                img:not(:last-child){
                    filter:brightness(0.9);
                    outline:3px solid #fff;
                }
            }

            img:not(:last-child){
                width:100%;
                height:100%;
                max-height:500px;

                box-shadow: 0px 7px 17px -1px #000000;

                filter:brightness(0.75);
                outline:3px solid #fff0;
                transition:filter .5s, outline .5s;
                will-change:filter outline;
                
                object-fit:cover;

                border-radius:20px;

                @media(max-width:300px){
                    object-position:69.5%;
                }

                @media(min-width:300px){
                    object-position:76.5%;
                }
            }

            .title{
                img{
                    position: absolute;
                    top: 50%;
                    left:15%;
                    transform: translateY(-50%); 

                    width:auto;
                    height:75%;

                    @media(max-width:600px){
                        width:208px;
                        height:auto;

                        top:25%;
                        left:10%;
                    }
                }
            }
        }
    }
`;