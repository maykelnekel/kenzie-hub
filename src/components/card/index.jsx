import { Container, ElementCard } from "./style";
import Button from "../button";
import Input from "../input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { Form } from "../../pages/dashboard/style";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export default function Card ({title, status, techId, token, loadTech, techs}) {
    
    const [id] = useState(techId);
    const schema = yup.object().shape({
        status: yup
        .string(),
    })
    const {
        register,
        handleSubmit,
    } = useForm({
        resolver: yupResolver(schema),
    })
    const updateStatus = (data) => {
        api.put(`/users/techs/${id}`, {
            status: data.status,
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
        )
        .then(_ => {
            toast.success('Nível de '+ title +' atualizado')
            loadTech()
        })
        .catch(error => console.log(error))
    }
    
    const deleteTech = (id) => {
        api.delete(`/users/techs/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(_ => {
            toast.success('Tecnologia removida')
            loadTech()
        })
        .catch(error => console.log(error))
    }
    useEffect(() => {
        loadTech()
    }, [])
    
    useEffect(() => () => {})

    return (
        <Container>
            <ElementCard>
                <h3>{title}</h3>
                <p>Nível de conhecimento: <span>{status}</span></p>
                <Form onSubmit={handleSubmit(updateStatus)}>        
                    <Input
                    className='AttLevel'
                    register={register}
                    name={'status'}
                    list='status'
                    placeholder='Alterar nível -'
                    />
                    <datalist id='status'>
                        <option value='Iniciante'/>
                        <option value='Intermediário'/>
                        <option value='Avançado'/>
                    </datalist>
                    <Button className='AttButton' type='submit' greenSchema={true}>Atualizar</Button>
                </Form>
            </ElementCard>
                <Button onClick={() => deleteTech(techId)}>Excluir</Button>
        </Container>
    )
}