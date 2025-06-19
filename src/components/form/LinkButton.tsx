type Link = {
    path: string;
    texto: string;
    style: CSSModuleClasses
}

export default (props: Link) => 
    <a className={'loginLinkButton ' + props.style.loginLinkButton} href={props.path}>{props.texto}</a>