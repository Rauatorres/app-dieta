import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../var/url";
import { FaCheck } from "react-icons/fa6";

import style from './styles/ingredientes/deleteButton.module.css';

type IngredienteProps = {
    id: number,
    nome: string
}

export default (props: IngredienteProps) =>{
    const [ingredienteDisponivel, setIngredienteDisponivel] = useState(true);
    const [mostrarBotaoDeletar, setMostrarBotaoDeletar] = useState(false);
    const [modoEditar, setModoEditar] = useState(false);
    const [nome, setNome] = useState(props.nome);
    const [nomeEditar, setNomeEditar] = useState(nome);

    function editar(){
        async function api(){
            const res = await axios.put(`${apiUrl}/ingrediente/${props.id}`, {
                nome: nomeEditar
            });
            if(res.data){
                setNome(nomeEditar);
                setModoEditar(false);
            }
        }
        api();
        // console.log(modoEditar);
    }

    function mostrarIngrediente(){
        if(ingredienteDisponivel){
            return (
                <div className="Ingrediente" onMouseOver={() => setMostrarBotaoDeletar(true)} onMouseLeave={() => setMostrarBotaoDeletar(false)} >
                    <span onClick={() => setModoEditar(true)}>
                        {modoEditar? (<><input onBlur={editar} onChange={(e) => setNomeEditar(e.target.value)} type="text" value={nomeEditar} /></>) : nome}
                    </span>
                    {/* {modoEditar? (<button onClick={editar}><FaCheck /></button>) : (<></>)} */}
                    {botaoDeletar()}
                </div>
            );
        }else{
            return (<></>);
        }
    }

    function excluirIngrediente(){
        async function api(){
            const res = await axios.delete(`${apiUrl}/ingrediente/${props.id}`);
            if(res){
                setIngredienteDisponivel(false);
            }
        }
        api()
    }

    function botaoDeletar(){
        if(mostrarBotaoDeletar){
            return(
                <button className={style.button} onClick={excluirIngrediente}>-</button>
            )
        }else{
            return(
                <></>
            )
        }
    }

    return (
        <>{mostrarIngrediente()}</>
    );
}