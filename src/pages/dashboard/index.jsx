import { Redirect } from "react-router-dom";
import { Container } from "./style";

export default function Dashboard ({authenticated}) {

    if (!authenticated) {
        return <Redirect to='/login'/>
    }
    return (
        <Container>
            <h1>dashboard</h1>
        </Container>
    )
}