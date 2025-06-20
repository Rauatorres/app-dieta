import Navbar from "../navbar/Navbar";

type HomePageProps = {
    cookies: {
        [x: string]: any;
    };
    removeCookie: (name: string, options?: any) => void
}

export default (props: HomePageProps)=>{


    return (
        <>
            <Navbar username={props.cookies.nome} />
            <div>
                <h1>Usuário: {props.cookies.nome}</h1>
            </div>
        </>

    );
}