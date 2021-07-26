import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-content: center;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 1px var(--gray);
    padding: 1rem;
    margin: 1rem;

    Button {
        border-color: var(--red);
        background-color: var(--white);
        color: var(--red);
        width: 50%;
        height: 1.6rem;
        font-size: 0.8rem;
        &:hover{
        background-color: var(--red);
        color: var(--white);
        filter: brightness(100%);
        }
    }    
`

export const ElementCard = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 90%;
    width: 100%;
    h3 {
        color: var(--blue);
        font-size: 1.5rem;
    }
    span {
        font-size: 1.2rem;
        font-weight: 700;
        line-height: 2rem;
    }
    input {
        width: 100%;
    }
`
export const Form = styled.form `
    width: 100%;
`