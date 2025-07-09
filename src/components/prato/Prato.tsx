import axios from "axios";
import type { PratoType } from "../../types/prato";
import { apiUrl } from "../var/url";
import { useState, type ChangeEvent } from "react";
import Input from "./Input";
import BotaoAdicionarIngrediente from "./BotaoAdicionarIngrediente";
import Ingrediente from "./Ingrediente";

export default (props: PratoType) => {

    let preparoVerif: string | undefined;
    if(props.preparo == undefined ){
        preparoVerif = '';
    }else{
        preparoVerif = props.preparo;
    }

    const [display, setDisplay] = useState('block')
    const [modoEditar, setModoEditar] = useState(false);
    const [nome, setNome] = useState(props.nome);
    const [preparo, setPreparo] = useState(preparoVerif);
    const [ingredientes, setIngredientes] = useState(props.ingredientes);

    function mostrarIngredientes(){
        return ingredientes?.map(ingrediente => {
            return (
                <Ingrediente id={ingrediente.id} nome={ingrediente.nome}/>
            );
        });
    }
    
    function mostrarElemento(elementoVisualizar: any, elementoEditar: any){
        if(modoEditar){
            return elementoEditar;
        }else{
            return elementoVisualizar;
        }
    }

    function excluir(){
        async function excluirPrato(){
            await axios.delete(`${apiUrl}/prato/${props.id}`);
        }
        excluirPrato();
        setDisplay('none');
    }

    function editar(){
        // console.log('teste');
        async function editarPrato(){
            // console.log(props.usuario);
            await axios.put(`${apiUrl}/prato`, {
                usuario: props.usuario,
                prato: props.id,
                campos: {
                    nome: nome,
                    preparo: preparo
                }
            });
            // console.log(res.data);
        }
        editarPrato();
        setModoEditar(false);
        // console.log(`${nome} ${preparo}`);
    }

    return (
        <div style={{display: display}}>
            <div>
                <div>
                    <div></div>
                    {mostrarElemento((<span>{nome}</span>), (<Input value={nome} onchange={(e: ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />))}
                    
                </div>
                <div>{mostrarIngredientes()}</div>
                <div><BotaoAdicionarIngrediente idPrato={props.id} setIngredientes={setIngredientes} ingredientes={ingredientes}/></div>
            </div>
            <div>
                <div>Modo de Preparo</div>
                {mostrarElemento((<span>{preparo}</span>), (<Input value={preparo} onchange={(e: ChangeEvent<HTMLInputElement>) => setPreparo(e.target.value)} />))}
            </div>
            <div>
                {mostrarElemento((
                    <>
                        <button onClick={() => {setModoEditar(true)}}>editar</button>
                        <button onClick={excluir}>excluir</button>
                    </>
                ), (
                    <>
                       <button onClick={editar}>salvar</button> 
                       <button onClick={() => setModoEditar(false)}>cancelar</button>
                    </>
                ))}
            </div>
        </div>
    );
}
