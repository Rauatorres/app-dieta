export default (props: { texto: string }) => {
    function mostrarPreparo(){
        if (props.texto != null && props.texto && undefined || props.texto != ""){
            return props.texto;
        }else{
            return "Descrição...";
        }
    }

    return (
        <div className="Area Preparo">
            {mostrarPreparo()}
        </div>
    );
}