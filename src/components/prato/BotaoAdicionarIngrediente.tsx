import axios from "axios";
import { apiUrl } from "../var/url";

export default (props: any) =>{
    function addIngrediente(){
        async function apiIngrediente(){
            const res = await axios.post(`${apiUrl}/novo/ingrediente/${props.idPrato}`, {
                nome: 'novo ingrediente'
            });
            // console.log(props.idPrato);
            // console.log(res.data);
            if (res){
                props.setIngredientes([...props.ingredientes, res.data]);
            }
        }
        apiIngrediente();
    }

    return (
        <button onClick={addIngrediente}>+</button>
        // <button onClick={props.setIngredientes(ingredientes => [...ingredientes, ])}>+</button>
        
    )
}