type NavbarLinkProps = {
    url: string,
    text: string
}

export default (props: NavbarLinkProps) =>
<a href={`/${props.url}`}>{props.text}</a>