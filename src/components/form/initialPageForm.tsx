import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import Input from "./Input";
import { apiUrl } from "../var/url";
import LoginErrorMsg from "../errorMsg/LoginErrorMsg";

// import './styles/form.css';


type UserFormProps = {
    setCookie: (name: string, value: any, options?: any) => void;
    apiPath: string;
    aditionalButtons: React.ReactNode;
    style: CSSModuleClasses;
    submitButtonText: string
}

export default (props: UserFormProps)=>{
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const style = props.style;

    async function action(){
        const result = await axios.post(`${apiUrl}/${props.apiPath}`, { nome: nome, senha: senha });

        console.log(result.data);

        function userDataWithoutPassword(userObj: any){
            const userArray = Object.entries(userObj);
            const userArrayWithoutPassword = userArray.filter(([key, _value]) => key != 'senha');
            let userObjWithoutPassword: any = {};

            for(let [key, value] of userArrayWithoutPassword){
                userObjWithoutPassword[key] = value;
            }

            return userObjWithoutPassword;
        }

        if('error' in result.data){
            setErrorMsg(result.data.error);
        }else{
            // props.setCookie('idusuario', result.data.id, {
            //     path: '/'
            // });
            // props.setCookie('nome', result.data.nome, {
            //     path: '/'
            // });
            props.setCookie('usuario', result.data.nome, {
                path: '/'
            });
            window.location.href = '/home';
        }
    }

    function showErrorMsg(){
        console.log(errorMsg);
        console.log('teste');
        if(errorMsg != ''){
            return (<LoginErrorMsg msg={errorMsg} />);
        }else{
            return(<></>);
        }      
    }

    return (
        <>
            <form className={`form ${style.form}`}>
                <Input style={style} type="text" placeholder="Nome" onchange={setNome}/>
                <Input style={style} type="password" placeholder="Senha" onchange={setSenha} />
                <div className={style.buttonsBox}>
                    <Button style={style} type="submit" texto={props.submitButtonText} action={action} />
                    {props.aditionalButtons}
                </div>
            </form>
            {showErrorMsg()}
        </>

    )
}