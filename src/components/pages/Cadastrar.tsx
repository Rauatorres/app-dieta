import Form from "../form/initialPageForm";
import LinkButton from "../form/LinkButton";
import type { LoginProps } from "../types/PageProps";

import style from "../form/styles/cadastrar.module.css";

export default (props: LoginProps)=>{
    return (
        <Form style={style} submitButtonText="cadastrar" setCookie={props.setCookie} apiPath="cadastrar" 
        aditionalButtons={( 
            <LinkButton style={style} texto="voltar para a pagina de login" path="/" />
        )}/>
    );
}