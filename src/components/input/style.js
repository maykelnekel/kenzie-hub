import styled, { css } from "styled-components";

export const Container = styled.div `
    text-align: left;
    margin-bottom: 10px;
    span {
        color: var(--red)
    }
    p {
        font-weight: 700;
        color: var(--blue);
    }
`;

export const InputContainer = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    transition: 300ms;
   
    ${props => props.isErrored && css `
        border-color: var(--red);
        svg {
            color: var(--red);
        }
    `}
    input {
        margin-top: 5px;
        background: transparent;
        align-items: center;
        flex: 1;
        border: 1px solid var(--blue);
        border-radius: 3px;
        color: var(--black);
        padding: 0.3rem;
        width: 100%;
        &::placeholder {
            color: var(--gray)
        }
    }
    svg {
        margin-right: 1rem;
    }



`;