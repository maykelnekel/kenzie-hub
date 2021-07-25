import { Container, ElementCard } from "./style";
import Button from "../button";
import Input from "../input";

export default function Card ({title, status, }) {

    return (
        <Container>
            <ElementCard>
                <h3>{title}</h3>
                <p>teste</p>
                {/* <Input
                    register={register}
                    error={errors.status?.message}
                    name={'status'}
                    label='Nível de conhecimento' 
                    list='status'
                    />
                    <datalist id='status'>
                        <option value='Iniciante'/>
                        <option value='Intermediário'/>
                        <option value='Avançado'/>
                    </datalist> */}
                <Button>Excluir</Button>
            </ElementCard>
        </Container>
    )
}