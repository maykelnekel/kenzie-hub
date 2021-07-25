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
import { set } from "react-hook-form";
import axios from "axios";

export default function Dashboard ({authenticated, userData}) {
    const {cardData, setCardData} = useState();
    const history = useHistory();
    const [nextPage, setNextPage] = useState('https://kenziehub.me/users?perPage=15&page=1')
    const [userId] = useState('ff9a65f4-f066-4b21-8430-789badcee27b');
    console.log(userData)
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
        api.get(nextPage, {
            headers: {
                Autorization: 'Bearer ${token}',
            },
        })
        .then((response)=>{
            if (response.data.length > 0) {
                setNextPage(response.headers.nexturl)
            }
        })
        .catch((err)=>toast.error(err.message))
    }
    // if (!authenticated) {
    //     return <Redirect to='/login'/>
    // }
    useEffect(() => {
        loadTech();
    },[])
    
    const submitTech = (data) => {
        axios.post(nextPage, {
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