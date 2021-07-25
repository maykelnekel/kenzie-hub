import {CardsContainer, Container, Form, FormContainer } from "./style";
import Input from '../../components/input/'
import Button from "../../components/button";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Redirect} from "react-router-dom";
import api from "../../services/api";
import {toast} from 'react-toastify'
import { useEffect, useState } from "react";
import Card from '../../components/card'

export default function Dashboard ({authenticated, userData}) {
    const [techs, setTechs] = useState([]);
    const [userId] = useState(userData.id);
    const [token] = useState(JSON.parse(localStorage.getItem('@KenzieHub:token')))
    
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
        api.get(`/users/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response)=>
            setTechs(response.data.techs)
            
        )
        .catch((err) => console.log(err))
    }

    const submitTech = (data) => {
        api.post('/users/techs',  {
            title: data.title,
            status: data.status,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        )
        .then((response ) => {
            loadTech()
            toast.success('A tecnologia ' + data.title + ' foi adicionada')
        })
        .catch((err)=> toast.error('Verifique se a tecnologia já está cadastrada'))
    }
    useEffect(() => {
        return loadTech();
    },[])

    useEffect(() => () => {})

     if (!authenticated) {
        return <Redirect to='/login'/>
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
                        techs.map((item) => 
                            <Card 
                            key={item.id}
                            title={item.title}
                            status={item.status}
                            techId={item.id}
                            token={token}
                            loadTech={loadTech}
                            techs={techs}
                            />
                        )
                    }
                </CardsContainer>
            </FormContainer>
        </Container>
    )
}