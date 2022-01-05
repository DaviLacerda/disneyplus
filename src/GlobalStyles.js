import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        padding:0;
        margin:0;
        box-sizing:border-box;
        user-select:none;
    }

    body{
        background-color:#2A2F3F;
        min-height:200vh;
        width:100%;

        color:#f9f9f9;
    }
`;