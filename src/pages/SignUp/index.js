import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';


const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório.'),
    email: Yup.string().email('Insira um e-mail válido.').required('O e-mail é obrigatório.'),
    password: Yup.string().min(6, 'No minimo 6 caracteres').required('O campo senha é obrigatório.'),
})

export default function SignUp() {
    function handleSubmit(data) {
        console.tron.log(data);
    }

    return (
        <>
            <img src = {logo} alt = "GoBarber" />

            <Form schema = {schema} onSubmit={handleSubmit}>
                <Input name = "name" placeholder = "Digite seu nome completo:" />
                <Input name = "email" type = "email" placeholder = "Digite seu e-mail:" />
                <Input name = "password" type = "password" placeholder = "Digite sua senha:" />

                <button type = "submit" >Acessar</button>
                <Link to = "/" >Já tenho login</Link>
            </Form>
        </>
    );
}
