import { Container, InputContainer } from "./style";

export default function Input ({ label, icon: Icon, register, name, error = '', ...rest }) {
    return (
        <Container>
            <p>{label}</p>
            <InputContainer>
                {Icon && <Icon/>}
                <input  {...register(name)}{...rest}/>
            </InputContainer>
            <div>
                {!!error && <span>{error}</span>}
            </div>
        </Container>
    )
}