import { useHistory } from "react-router-dom";
import Button from "../../components/button";
import HeaderAndFooter from "../../components/HeaderAndFooter";
import { ButtonsContainer, Container, ContainerIntra, Message } from "./style";

export default function Home ({authenticated}) {
    const history = useHistory();

    const handleNavigation = (path) => {
        return history.push(path);
    }

    return (
        <Container>
            <ContainerIntra>
                <h1>Kenzie Hub!</h1>
                <Message>
                    <p>
                        Bem vindo ao Kenzie Hub, compartilhe seu progresso com outros alunos!
                    </p>
                </Message>
                <ButtonsContainer>
                    <span>Já possui uma conta?</span>
                <Button onClick={() => handleNavigation('/login')} >
                    Logar
                </Button>
                </ButtonsContainer>
                <ButtonsContainer>
                    <span>Ainda não está cadastrado?</span>
                <Button greenSchema={true} onClick={() => handleNavigation('/register')} >
                    Cadastrar
                </Button>
                </ButtonsContainer>
            </ContainerIntra>
            <HeaderAndFooter/>
        </Container>
    )
}