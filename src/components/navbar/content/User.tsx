import { FaUser } from "react-icons/fa6";

type NavbarUserArea = {
    username: string
}

export default (props: NavbarUserArea) =>{
    return (
        <div className="NavUserBox">
            <div><FaUser /></div><span>{props.username}</span>
        </div>
    );
}