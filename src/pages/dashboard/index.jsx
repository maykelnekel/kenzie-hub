import {CardsContainer, Container, Form, FormContainer } from "./style";
import Input from '../../components/input/'
import Button from "../../components/button";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import {toast} from 'react-toastify'
import { useEffect, useState } from "react";
import Card from '../../components/card'

export default function Dashboard ({authenticated}) {
    const {cardData, setCardData} = useState();
    const history = useHistory();
    const {token} = useState(JSON.parse(localStorage.getItem('@KenzieHub:token')))
    const schema = yup.object().shape({
        title: yup
        .string()
        .required('Adicione uma nova tecnologia'),
        status: yup
        .string(),
    })
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(schema),
    })

    const loadTech = () => {
        // const newTech = {title, status}
        api.post('/users/techs', {
            headers: {
                Autorization: `Bearer ${token}`,
            },
        })
        .then((response)=>{
            console.log(response)
        })
        .catch((err)=>toast.error(err.message))
    }
    // if (!authenticated) {
    //     return <Redirect to='/login'/>
    // }
    useEffect(() => {
        loadTech();
    }, [])

    const submitTech = (data) => {
        api.post('/users/techs', {
            title: data.title,
            status: data.status,
        }, {
            headers: {
                Autorization: `Bearer ${token}`,
            },
        })
        .then(()=>{
            loadTech()
            toast.success('A tecnologia ' + data.title + ' foi adicionada')
        })
        .catch((err)=>toast.error(err.message))
    }
    return (
        <Container>
            <h1>Kenzie Hub</h1>
            <FormContainer>  
                <Form onSubmit={handleSubmit(submitTech)}>
                    <h1>Login</h1>
                    <Input 
                    register={register}
                    error={errors.title?.message}
                    name={'title'}
                    label='Adicionar nova tecnologia' 
                    placeholder='tecnologia'
                    />
                    <Input
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
                    </datalist>
                    <Button type='submit'>Adicionar</Button>
                </Form>
                <CardsContainer>
                    {
                        [1,2,3].map((item) => 
                            <Card title={'teste'}/>
                        )
                    }
                </CardsContainer>
            </FormContainer>
        </Container>
    )
}