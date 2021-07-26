import styled from "styled-components";

export const Container = styled.div `
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const ContainerIntra = styled.div `
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h1 {
        font-size: 3rem;
        color: var(--blue);
    }
    @media (min-width:768px) {
        max-width: 500px;
    }
`
export const Message = styled.div `
        text-align: center;
        width: 80%;
        height: 100px;
        display: flex;
        align-items: center;
`

export const ButtonsContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    text-align: center;
    width: 55%;
    height: 100px;
    margin-top: 1rem;
    button {
        margin-top: 20px;
    }
    span {
        font-weight: bold;
    }
    @media (min-width:768px) {
        width: 40%;
        margin: 20px;
    }

`