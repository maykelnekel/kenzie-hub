import styled from "styled-components";

export const Footer = styled.div `
    height: 4rem;
    width: 100vw;
    box-shadow: 0 -1px 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;
    font-size: 0.8rem;
    div {
        display: flex;
        align-items: center;
        color: var(--blue);
        text-decoration: underline;
    }
    svg {
        margin-right: 5px;
    }
    p {
        margin-right: 1rem ;
    }
`