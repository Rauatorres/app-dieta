import Button from "../form/Button";
import Form from "../form/initialPageForm";
import type { LoginProps } from "../types/PageProps";

import style from '../form/styles/login.module.css';

export default (props: LoginProps)=>{
    return (
        <Form style={style} submitButtonText="login" setCookie={props.setCookie} apiPath="login" 
        aditionalButtons={( 
            <Button style={style} type="button" texto="cadastrar" path="/cadastrar" />
        )}/>
    )
}