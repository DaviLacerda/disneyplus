import styled from 'styled-components';

export const SliderContainer = styled.div`
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

        height:400px;

        img{
            width:75%;
            height:100%;
            object-fit:contain;
        }
    }
`;