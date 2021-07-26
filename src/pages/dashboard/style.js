import styled from "styled-components";
export const Div = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        text-align: center;
        font-size: 1.8rem;
        width: 90%;
    }
`
export const Container = styled.div `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
export const Header = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 1px 4px var(--gray);
    margin-bottom: 1rem;
    width: 100%;
    h1 {
        padding: 0.5rem;
        color: var(--blue);
    }
    div {
        padding-right: 1rem;
    }
    .NavButton {
        border-radius: 0;
        width: 100px;
        &:hover {
            background-color: var(--blue);
            color: var(--white);
        }
    }
`
export const ProfileContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 500px;
    height: 300px;
    padding: 0.5rem;
    h3,h4{
        color: var(--blue);
        margin-bottom: 1.2rem;
    }
    Span{
        font-weight: 700;
    }

    @media (min-width: 1024px) {
        width: 500px;
    }
`
export const Profile = styled.div `
    box-shadow: 0px 1px 4px var(--gray);
    border-radius: 5px;
    padding: 0.5rem;
    li {
        list-style-type: none ;
        line-height: 2rem;
    }
`
export const FormContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 500px;
    height: 300px;
    padding: 0.5rem;
    
    @media (min-width: 1024px) {
        width: 500px;
    }
`

export const Form = styled.form `
    width: 70%;
    .AttButton {
        background-color: var(--green);
        color: var(--white);
        border-color: var(--green);
        &:hover{
            border-color: var(--green);
            background-color: var(--green);
            filter: brightness(120%);
        }
    }
`

export const CardsContainer = styled.div `
    width: 90%;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`