import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Input from "./Input";
import { apiUrl } from "../var/url";
import LoginErrorMsg from "../errorMsg/LoginErrorMsg";

type UserFormProps = {
    setCookie: (name: string, value: any, options?: any) => void;
    apiPath: string;
    aditionalButtons: React.ReactNode
}

export default (props: UserFormProps)=>{
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMsg, setErrorMsg] = useState('');


    async function action(){
        const result = await axios.post(`${apiUrl}/${props.apiPath}`, { nome: nome, senha: senha });
        if('error' in result.data){
            setErrorMsg(result.data.error);
        }else{
            props.setCookie('idusuario', result.data.id, {
                path: '/'
            });
            props.setCookie('nome', result.data.nome, {
                path: '/'
            });
            window.location.href = '/home';
        }
    }

    return (
        <>
            <form>
                <Input type="text" placeholder="Nome" onchange={setNome}/>
                <Input type="password" placeholder="Senha" onchange={setSenha} />
                <Button type="submit" texto="login" action={action} />
                {props.aditionalButtons}
            </form>
            <LoginErrorMsg msg={errorMsg} />
        </>

    )
}