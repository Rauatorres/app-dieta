import axios from "axios";
import type { PratoType } from "../../types/prato";
import { apiUrl } from "../var/url";
import { useState, type ChangeEvent } from "react";
import Input from "./Input";
import BotaoAdicionarIngrediente from "./BotaoAdicionarIngrediente";
import Ingrediente from "./Ingrediente";
import { FaBowlFood, FaCaretUp } from "react-icons/fa6";
import { PiCookingPot, PiCookingPotFill } from "react-icons/pi";
import Preparo from "./Preparo";

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
    const [nomeEditar, setNomeEditar] = useState(props.nome)
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
            const res = await axios.put(`${apiUrl}/prato`, {
                usuario: props.usuario,
                prato: props.id,
                campos: {
                    nome: nomeEditar,
                    preparo: preparo
                }
            });
            if(res.data){
                setNome(nomeEditar);
            }
            // console.log(res.data);
        }
        editarPrato();
        setModoEditar(false);
        // console.log(`${nome} ${preparo}`);
    }

    return (
        <div style={{display: display}} className="Prato">
            <div className="Block">
                <div className="Area PratoTituloArea">
                    <div className="IconeTituloBox"><FaBowlFood /></div>
                    {mostrarElemento((<span>{nome}</span>), (<Input value={nomeEditar} onchange={(e: ChangeEvent<HTMLInputElement>) => setNomeEditar(e.target.value)} />))}
                    
                </div>
                <div className="Area AreaIngredientes">
                    <div className="Ingredientes">{mostrarIngredientes()}</div>
                    <div className="AreaBotaoAddIngrediente"><BotaoAdicionarIngrediente idPrato={props.id} setIngredientes={setIngredientes} ingredientes={ingredientes}/></div>
                </div>
            </div>
            <div className="Block">
                <div className="Area ModoDePreparoTituloArea">
                    <div><PiCookingPotFill /></div>
                    <div>Modo de Preparo</div>
                </div>
                {mostrarElemento((<Preparo texto={preparo}/>), (<Input value={preparo} onchange={(e: ChangeEvent<HTMLInputElement>) => setPreparo(e.target.value)} />))}
                <div>
                    {mostrarElemento((
                        <div className="Area AreaBotoes">
                            <button className="botao1" onClick={() => {setModoEditar(true)}}>editar</button>
                            <button className="botao2" onClick={excluir}>excluir</button>
                        </div>
                    ), (
                        <div className="Area AreaBotoes">
                        <button className="botao1" onClick={editar}>salvar</button> 
                        <button className="botao2" onClick={() => setModoEditar(false)}>cancelar</button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="Area "><button><FaCaretUp /></button></div>
        </div>
    );
}
