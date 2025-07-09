import axios from "axios";
import { apiUrl } from "../var/url";
// import React from "react";
// import Prato from "./Prato";

export default (props: any)=>{
    function adicionar(){
        // const ingredientes: string[] = [];

        const novoPrato = {
            usuario: props.usuario,
            nome: 'novo prato',
            categoria: '',
            preparo: '',
            ingredientes: []
        };

        async function adicionarPrato(){
            const res = await axios.post(`${apiUrl}/novo/prato`, novoPrato);
            // console.log(res.data.id);
            if(res.data){
                props.pratos.setPratos( [...props.pratos.pratos, novoPrato] );
            }
            // props.pratos.setPratos([ ...props.pratos.pratos, (<Prato id={res.data.id} nome={novoPrato.nome} categoria='' preparo="" ingredientes={[]} />) ]);
        }
        adicionarPrato();
    }

    return (
        <button onClick={adicionar}>adicionar</button>
    );
};