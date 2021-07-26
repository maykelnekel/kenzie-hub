import styled from "styled-components";

export const Header = styled.div `
    height: 4rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 1px 4px var(--gray);
    display: flex;
    align-items: center;

    h1 {
        /* font-size: 3rem; */
        padding-left: 1rem;
    }
`

export const Footer = styled.div `
    height: 4rem;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
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
`