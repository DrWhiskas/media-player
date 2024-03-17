import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: "Rubik", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #738CF3;
    }
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }
    a{
        text-decoration: none;
    }
    ul{
        list-style: none;
    }
    .hidden{
        display: none;
    }
    .btn-dark{
    background-color: #222323;
    color: #F8F9FE;
    transition: all ease-in-out .2s;
    }
    .btn-dark:hover{
    background-color: #3a3a3a;
    }
`;

export default GlobalStyle;