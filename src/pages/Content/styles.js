import styled from 'styled-components';

export const ContentContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500&display=swap');

    display:flex;
    align-items:center;
    flex-direction:column;
    gap:12px;

    position:relative;

    @media(max-width:1200px){
        justify-content:center;
    }

    width:100%;
    height:100vh;

    color:#fff;
    font-family:'Nunito', sans-serif;
    font-size:0.875em;

    a{
        width:10%;
    }

    span{
        text-transform:uppercase;
        font-size:.675em;
    }

    @media(min-width:600px){
        font-size:1em;
        span{
            font-size:.7em;
        }
    }

    @media(min-width:1200px){
        font-size:1.125em;
        span{
            font-size:0.825em;
        }
    }

    .btn__error404{
        width:100%;
        height:100%;

        padding:12px;
        background-color:#f0f0f0;

        border:none;
        border-radius:20px;

        transition:background-color .5s, width .3s;

        &:hover{
            cursor:pointer;
            background-color:#f0f0f085;
        }
    }

    .content__bg{
        width:100%;
        height:100%;

        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        opacity:0.8;
        filter:brightness(0.525);

        transition:all .3s;
        will-change:opacity, brightness;

        z-index:-3;
    }

    .content__header{
        position:absolute;
        padding:16px;
        
        @media(min-width:1081px){
            top:45%;
            left:5%;
        }
    }

    p{
        width:100%;
        
        @media(min-width:1200px){
            max-width:50vw;
        }
        
        word-wrap:break-word;
    }
`;