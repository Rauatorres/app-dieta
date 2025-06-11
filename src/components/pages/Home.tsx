type HomePageProps = {
    cookies: {
        [x: string]: any;
    };
    removeCookie: (name: string, options?: any) => void
}

export default (props: HomePageProps)=>{


    return (
        <div>
            <h1>Usuário: {props.cookies.nome}</h1>
        </div>

    );
}