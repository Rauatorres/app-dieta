import NavbarLink from "./content/NavbarLink";
import User from "./content/User";



export default (_props: object)=>{
    return (
        <nav>
            <User username="username" />
            <ul>
                <li><NavbarLink url="home" text="home" /></li>
                <li><NavbarLink url="pratos" text="pratos" /></li>
                <li><NavbarLink url="usuario" text="usuario" /></li>
            </ul>
        </nav>
    );
}