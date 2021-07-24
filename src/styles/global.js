import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: 0;
        outline: 0;
    }
    :root {
        --white: #f5f5f5;
        --blue: #004EF3;
        --black: #0c0d0d;
        --gray: #666368;
        --red: #c53030;
        --green: #009813;
    }
    body, input, button {
        font-family: 'Raleway', sans-serif;;
        font-size: 1rem;
    }
    h1,h2,h3,h4,h5,h6 {
        font-family: 'Otomanopee One', sans-serif;
    }
    button {
        cursor: pointer;
    }
    a {
        text-decoration: none;
    }

`