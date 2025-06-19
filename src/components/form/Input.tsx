
type InputProps = {
    type: string;
    placeholder: string;
    onchange: Function;
    style: CSSModuleClasses
}

export default (props: InputProps) => 
    <input className={`input ${props.style.input}`} type={props.type} placeholder={props.placeholder} onChange={(e) => props.onchange(e.target.value)}/>