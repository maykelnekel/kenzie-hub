import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;

`
export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-bottom: 5rem;
        color: var(--blue);
    }
`
export const Form = styled.form `
    width: 300px;
    padding: 20px;
    box-shadow: 0 0 10px 1px var(--black);
    border-radius: 5px;
    button {
        background-color: var(--blue);
        color: var(--white);
        height: 3rem;
    }
`
export const FormFooter = styled.div `
    margin-top: 10px;
    text-align: center;
`