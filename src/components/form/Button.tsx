import type React from "react";
import style from './styles/form/form.module.css';

type ButtonProps = {
    type: undefined | "submit" | "reset" | "button";
    texto: string;
    path?: string;
    action?: (..._args: any[]) => Promise<any>
}

export default (props: ButtonProps) =>{
    async function submitHandler(e: React.SyntheticEvent){
        e.preventDefault();
        if(props.action != undefined){
            await props.action();
        }
    }

    const path = props.path;
    
    if(typeof path == 'string'){
        return (
            <button className={
                props.texto == 'cadastrar' ? `${style.button} ${style.cadastrarLinkButton}` : style.button
            } onClick={() => window.location.href = path} type={props.type}>{props.texto}</button>
        );
    }else{
        return props.type == "submit" ? 
        <button className={style.button} onClick={(e) => submitHandler(e)} type={props.type}>{props.texto}</button> :
        <button className={style.button} type={props.type}>{props.texto}</button>
    }

}