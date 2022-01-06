import styled from 'styled-components';

export const CompanyContainer = styled.div`
    display:flex;
    flex-direction:row;
    place-content:center space-evenly;  
    flex-wrap:wrap;

    margin-top:2.5vh;

    padding:16px;

    width:100%;
    height:calc(20% - 20px);


    @media(max-width:600px){
        gap:10px;
    }

    .card{
        display:flex;
        align-items:center;
        justify-content:center;

        position:relative;

        width: calc(18.5% - 20px);
        height:100%;

        background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));
        border-radius: 6px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        border:4px solid #D5D9E140;
        border-radius:20px;
        transition: all .5s;

        &:hover{
            cursor:pointer;
            border:4px solid #D5D9E1;
            transform:scale(1.05);

            video{
                opacity:1;
            }
        }

        @media(max-width:600px){
            width:30%;
        }

        img{
            display: block;
            height: 100%;
            width: 100%;
            z-index:1;
            
            object-fit: cover;
            pointer-events:none;
        }

        video{
            position:absolute;
            top:0;

            opacity:0;
            transition:opacity .5s;

            height:100%;
            width:100%;
            object-fit:cover;
            border-radius:16px;
        }
    }
`;