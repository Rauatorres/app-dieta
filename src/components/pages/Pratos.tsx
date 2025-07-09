import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import BotaoAdicionarPrato from "../prato/BotaoAdicionarPrato";
import axios from "axios";
import { apiUrl } from "../var/url";
import Prato from "../prato/Prato";
import type { PratoType } from "../../types/prato";

type HomePageProps = {
    cookies: {
        [x: string]: any;
    };
    removeCookie: (name: string, options?: any) => void
}

export default (props: HomePageProps)=>{
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        async function getPratos(){
            const res = await axios.post(`${apiUrl}/usuario/${props.cookies.usuario}`);
            setPratos(res.data.pratos);
        }
        getPratos();
    }, []);

    function showPratos(){
        // console.log(pratos);
        return pratos.map((prato: PratoType) => {
            // console.log(prato.ingredientes);
            return (
                <Prato
                    usuario={props.cookies.usuario}
                    id={prato.id}
                    nome={prato.nome}
                    categoria={prato.categoria}
                    ingredientes={prato.ingredientes}
                    preparo={prato.preparo}
                />
            );
        })
    }

    return (
        <div>
            <Navbar username={props.cookies.usuario} />
            <div>
                {showPratos()}
            </div>
            <BotaoAdicionarPrato usuario={props.cookies.usuario} pratos={{ pratos: pratos, setPratos: setPratos }} />
        </div>
    );
}