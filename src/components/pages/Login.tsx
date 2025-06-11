import Button from "../form/Button";
import Form from "../form/initialPageForm";
import type { LoginProps } from "../types/PageProps";

export default (props: LoginProps)=>{
    return (
        <Form setCookie={props.setCookie} apiPath="login" 
        aditionalButtons={( 
            <Button type="button" texto="cadastrar" path="/cadastrar" />
        )}/>
    )
}