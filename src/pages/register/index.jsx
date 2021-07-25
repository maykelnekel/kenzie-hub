import Input from "../../components/input";
import Button from "../../components/button";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, Form, FormContainer, FormFooter } from "./style";
import { Link } from "react-router-dom";

export default function Register () {
    const schema = yup.object().shape({
        name: yup
        .string()
        .required('Dado obrigatório'),
        email: yup
        .string()
        .required('Dado obrigatório')
        .email('E-mail inválido'),
        contact: yup
        .string()
        .required('Dado obrigatório'),
        course_module: yup
        .string()
        .required('Dado obrigatório'),
        password: yup
        .string()
        .min(6, 'Mínimo 6 caracteres')
        .required('Dado obrigatório'),
        confirmPassword: yup
        .string()
        .required('Dado obrigatório')
        .oneOf([yup.ref('password')], 'As senhas não coincidem'),
        bio: yup
        .string()
        ,
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })

    const submitData = (data) => console.log(data)
    return (
        <Container>
            <FormContainer>
                <h1>Formuláro de registro</h1>
                <Form onSubmit={handleSubmit(submitData)}>
                    <Input
                    register={register}
                    error={errors.name?.message}
                    name={'name'}
                    label='Nome' 
                    placeholder='nome'
                    />
                    <Input 
                    register={register}
                    error={errors.email?.message}
                    name={'email'}
                    label='E-mail' 
                    placeholder='e-mail'
                    />
                    <Input 
                    register={register}
                    error={errors.contact?.message}
                    name={'contact'}
                    label='Contato' 
                    placeholder='contato'
                    />
                    <Input
                    register={register}
                    error={errors.course_module?.message}
                    name={'course_module'}
                    label='Modulo do Curso' 
                    placeholder='modulo do curso'
                    list='modules'
                    />
                    <datalist id='modules'>
                        <option value='Primeiro módulo (Introdução ao Frontend)'/>
                        <option value='Segundo módulo (Frontend Avançado)'/>
                        <option value='Terceiro módulo (Introdução ao Backend)'/>
                        <option value='Quarto módulo (Backend Avançado)'/>
                    </datalist>
                    <Input 
                    register={register}
                    error={errors.password?.message}
                    name={'password'}
                    label='Senha' 
                    placeholder='senha'
                    type='password'
                    />
                    <Input 
                    register={register}
                    error={errors.confirmPassword?.message}
                    name={'confirmPassword'}
                    label='Confirmar senha' 
                    placeholder='confirmar senha'
                    type='password'
                    />
                    <Input 
                    register={register}
                    error={errors.bio?.message}
                    name={'bio'}
                    label='Sobre você'
                    placeholder=''
                    />
                    <Button type='submit'>Enviar cadastro</Button>
                    <FormFooter>
                        <p>
                            Já é cadastrado?  <Link to='/login'>Realizar login</Link>
                        </p>
                    </FormFooter>
                </Form>
            </FormContainer>
        </Container>
    )
}