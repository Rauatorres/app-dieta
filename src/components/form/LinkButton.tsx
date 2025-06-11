type Link = {
    path: string;
    texto: string
}

export default (props: Link) => 
    <a href={props.path}>{props.texto}</a>