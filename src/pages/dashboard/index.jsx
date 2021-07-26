import {CardsContainer, Container, Div, Form, FormContainer, Header, Profile, ProfileContainer } from "./style";
import Input from '../../components/input/'
import Button from "../../components/button";
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect} from "react-router-dom";
import api from "../../services/api";
import {toast} from 'react-toastify'
import { useEffect, useState } from "react";
import Card from '../../components/card'

export default function Dashboard ({authenticated, setAuthenticated, userData}) {
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
    const handleLogout = () => {
        setAuthenticated(false)
        return <Redirect to='/'/>
    }
    useEffect(() => {
        return loadTech();
    },[])

    useEffect(() => () => {})

     if (!authenticated) {
        return <Redirect to='/'/>
    }
    
    return (
        <Div>
            <Header>
            <h1>Kenzie Hub</h1>
            <div>
                <Button className='NavButton' onClick={()=> handleLogout()}>Deslogar</Button>
            </div>
            </Header>
                <h3>Seja bem vindo {userData.name}!</h3>
        <Container>
            <ProfileContainer>
                <Profile>
                    <h4>Seus dados</h4>
                    <ul>
                        <li><span>Nome:</span> {userData.name}</li>
                        <li><span>E-mail:</span> {userData.email}</li>
                        <li><span>Módulo no curso:</span> {userData.course_module}</li>
                        <li><span>Contato:</span> {userData.contact}</li>
                        <li><span>Sobre:</span> {userData.bio}</li>
                    </ul>
                </Profile>
            </ProfileContainer>
            <FormContainer>  
                <Form onSubmit={handleSubmit(submitTech)}>
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
                    <Button greenSchema={true} type='submit'>Adicionar</Button>
                </Form>
            </FormContainer>
        </Container>

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
        </Div>
    )
}