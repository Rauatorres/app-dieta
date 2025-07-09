import type { ChangeEventHandler } from "react";

const Input = (props: { onchange: ChangeEventHandler<HTMLInputElement>,  value: string}) => 
<input type="text" onChange={props.onchange} value={props.value}/>

export default Input;