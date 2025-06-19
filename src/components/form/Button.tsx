import type React from "react";

type ButtonProps = {
    type: undefined | "submit" | "reset" | "button";
    texto: string;
    path?: string;
    action?: (..._args: any[]) => Promise<any>;
    style: CSSModuleClasses
}

export default (props: ButtonProps) =>{
    async function submitHandler(e: React.SyntheticEvent){
        e.preventDefault();
        if(props.action != undefined){
            await props.action();
        }
    }

    const path = props.path;
    const style = props.style;
    
    if(typeof path == 'string'){
        return (
            <button className={
                props.texto == 'cadastrar' ? `button ${style.button} ${style.cadastrarLinkButton}` : `button ${style.button}`
            } onClick={() => window.location.href = path} type={props.type}>{props.texto}</button>
        );
    }else{
        return props.type == "submit" ? 
        <button className={`button ${style.button}`} onClick={(e) => submitHandler(e)} type={props.type}>{props.texto}</button> :
        <button className={`button ${style.button}`} type={props.type}>{props.texto}</button>
    }

}