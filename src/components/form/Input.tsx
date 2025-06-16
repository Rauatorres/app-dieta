import style from './styles/form/form.module.css';

type InputProps = {
    type: string;
    placeholder: string
    onchange: Function
}

export default (props: InputProps) => 
    <input className={style.input} type={props.type} placeholder={props.placeholder} onChange={(e) => props.onchange(e.target.value)}/>