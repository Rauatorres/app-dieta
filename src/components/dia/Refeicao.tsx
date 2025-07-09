
type Prato = {
    nome: string
}

export default (props: any) =>{
    function mostrarPratosOption(){
        return props.pratos.map((prato: Prato) => {
            return (
                <option value="">{prato.nome}</option>
            );
        })
    }

    return (
        <div>
            <div>
                <div>{props.nome}</div>
                <select name="" id="">
                    <option value=""></option>
                    {mostrarPratosOption()}
                </select>
                <button>mudar</button>
            </div>
            <div>
                pratos
            </div>
        </div>
    )
}