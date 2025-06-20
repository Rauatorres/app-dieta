import { IoMdHome } from "react-icons/io";
import NavbarLink from "./content/NavbarLink";
import User from "./content/User";
import { GiMeal } from "react-icons/gi";
import { FaUser } from "react-icons/fa6";


export default (props: { username: string })=>
<nav>
    <User username={props.username} />
    <ul>
        <li><NavbarLink url="home" text="home" icon={<IoMdHome />} /></li>
        <li><NavbarLink url="pratos" text="pratos" icon={<GiMeal />} /></li>
        <li><NavbarLink url="usuario" text="usuario" icon={<FaUser className="NavbarLinkIconUsuario"/>} /></li>
    </ul>
</nav>



