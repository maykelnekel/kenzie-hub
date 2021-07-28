import Input from "../../components/input";
import Button from "../../components/button";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Form, FormContainer, FormFooter } from "./style";
import { Link, Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import {toast} from 'react-toastify'
import HeaderFunc from "../../components/header";
import FooterFunc from "../../components/footer";

export default function Login ({authenticated, setAuthenticated, setUserData}) {

    const history = useHistory();
    const schema = yup.object().shape({
        email: yup
        .string()
        .required('Dado obrigatório')
        .email('E-mail inválido'),
        password: yup
        .string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Dado obrigatório'),
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submitDataLogin = (data) => {
        api.post('/sessions', data)
        .then((res) => {
            const {token, user} = res.data;
            localStorage.setItem('@KenzieHub:token', JSON.stringify(token))
            setUserData(user)
            setAuthenticated(true)
            toast.success('Bem vindo ao Kenzie Hub!')
            return history.push('/dashboard')
        })
        .catch((error) => toast.error('Verifique seu e-mail ou senha'))
    }
    if (authenticated) {
        return <Redirect to='/dashboard'/>
    }
    return (
        <Container>
            <HeaderFunc/>
            <FormContainer>    
                <Form onSubmit={handleSubmit(submitDataLogin)}>
                    <h1>Login</h1>
                    <Input 
                    register={register}
                    error={errors.email?.message}
                    name={'email'}
                    label='E-mail' 
                    placeholder='e-mail'
                    />
                    <Input 
                    register={register}
                    error={errors.password?.message}
                    name={'password'}
                    label='Senha' 
                    placeholder='senha'
                    type='password'
                    />
                    <Button greenSchema={true} type='submit'>Fazer login</Button>
                    <FormFooter>
                        <p>
                            Ainda não se cadastrou?  <span><Link to='/register'>Realizar cadastro</Link></span>
                        </p>
                    </FormFooter>
                </Form>
            </FormContainer>
            <FooterFunc/>
        </Container>
    )
}