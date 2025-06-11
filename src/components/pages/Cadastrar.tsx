import Form from "../form/initialPageForm";
import LinkButton from "../form/LinkButton";
import type { LoginProps } from "../types/PageProps";

export default (props: LoginProps)=>{
    return (
        <Form setCookie={props.setCookie} apiPath="cadastrar" 
        aditionalButtons={( 
            <LinkButton texto="voltar para a pagina de login" path="/" />
        )}/>
    )
}