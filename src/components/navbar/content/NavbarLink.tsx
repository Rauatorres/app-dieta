
type NavbarLinkProps = {
    url: string,
    text: string, 
    icon: React.ReactNode
}

export default (props: NavbarLinkProps) =>
<a href={`/${props.url}`}><span className="NavbarLinkIconBox">{props.icon}</span><span>{props.text}</span></a>