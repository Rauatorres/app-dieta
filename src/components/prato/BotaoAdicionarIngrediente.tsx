import axios from "axios";
import { apiUrl } from "../var/url";

import styles from './styles/ingredientes/addButton.module.css';
import { MdAdd } from "react-icons/md";
import { RiAddLine } from "react-icons/ri";

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
        <button className={styles.button} onClick={addIngrediente}><RiAddLine /></button>
        // <button onClick={props.setIngredientes(ingredientes => [...ingredientes, ])}>+</button>
        
    )
}