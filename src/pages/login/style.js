import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100vh;

`
export const FormContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        margin-bottom: 1rem;
        color: var(--blue);
    }
`
export const Form = styled.form `
    width: 230px;
    padding: 20px;
    box-shadow: 0 0 10px 1px var(--black);
    border-radius: 5px;
    button {
        color: var(--white);
        height: 2.5rem;
    }
    @media (min-width: 1024px) {
        width: 350px;
    }
    
`
export const FormFooter = styled.div `
    margin-top: 10px;
    text-align: center;
    p {
        font-size: 0.8rem;
    }
    span {
        font-weight: 700;
        text-decoration: underline;
    }
`