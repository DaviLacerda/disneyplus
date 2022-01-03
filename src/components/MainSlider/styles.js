import styled from 'styled-components';

export const SliderContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    width:100%;

    margin-top:100px;


    .swiper-button-next, .swiper-button-prev{
        color:rgb(249, 249, 249);
        
        &:after{
            font-size:2em;
        }
    }

    .swiper-slide{
        display:flex;
        align-items:center;
        justify-content:center;

        width:100%;
        height:400px;

        .content{
            position:relative;

            img{
                width:fit-content;
                height:100%;
                object-fit:contain;

                border-radius:30px;
            }

            .title{
                h1{
                    font-family:'Nunito',sans-serif;

                    position:absolute;
                    top:100%;
                    left:0;
                    z-index:1;
                } 
            }
        }

        
    }
`;