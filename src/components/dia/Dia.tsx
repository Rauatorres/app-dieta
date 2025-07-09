import Refeicao from "./Refeicao";

// type Prato = {
//     nome: 
// }

export default (props: any) => {
    function exibirRefeicoes(){
        const refeicoes = [
            { nome: "café da manhã" },
            { nome: "lanche da manhã" },
            { nome: "almoço" },
            { nome: "lanche da tarde" },
            { nome: "jantar" },
            { nome: "ceia" }
        ];

        function pratos(pratos: any[], refeicao: string){
            return pratos.filter(prato => {
                return prato.nome == refeicao;
            })
        }

        return refeicoes.map((refeicao)=>{
            return (
                <Refeicao nome={refeicao.nome} pratos={pratos(props.pratos, refeicao.nome)}/>
            )
        })
    }

    return (
        <div>
            <div>{props.nome}</div>
            {exibirRefeicoes()}
        </div>
    );
}