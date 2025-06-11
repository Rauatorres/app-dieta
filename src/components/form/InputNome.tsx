type InputProps = {
    onchange: Function
}

export default (props: InputProps) => 
    <input type="text" placeholder="Nome" onChange={(e) => props.onchange(e.target.value)}/>