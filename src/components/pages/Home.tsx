import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { apiUrl } from "../var/url";
import Dia from "../dia/Dia";

type HomePageProps = {
    cookies: {
        [x: string]: any;
    };
    removeCookie: (name: string, options?: any) => void
}

export default (props: HomePageProps)=>{
    const [dias, setDias] = useState([]);
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        async function getDias(){
            const usuarioQuery = await axios.post(`${apiUrl}/usuario/${props.cookies.usuario}`);

            setDias(usuarioQuery.data.dias);
            setPratos(usuarioQuery.data.pratos)
            // console.log(dias);
        }
        getDias();
    }, []);

    function mostrarDias(){
        return dias.map((element: {
            id: number,
            nome: string,
            pratos: any[]
        })=>{
            console.log(element)
            return (
                <Dia key={element.id} nome={element.nome} pratos={pratos} />
            )
        })
    }

    return (
        <>
            <Navbar username={props.cookies.usuario} />
            <div>
                {mostrarDias()}
            </div>
        </>

    );
}