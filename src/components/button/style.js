import styled from "styled-components";


export const ElementButton = styled.button `
    background-color: ${(props) => (props.greenSchema ? '#009813' : '#f5f5f5')};
    color: ${(props) => (props.greenSchema ? '#f5f5f5' : '#004EF3')};
    border: 2px solid ${(props) => (props.greenSchema ? '#009813' : '#004EF3')};
    border-radius: 20px;
    height: 2rem;
    width: 100%;
    transition: 300ms;
    font-weight: 700;
    :hover {
        filter: brightness(120%);
    }

`;