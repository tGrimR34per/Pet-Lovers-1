import Entrada from "../io/entrada";
import Apagar from "./apagar";
import Produto from "../modelo/produto";

export default class ApagarProduto extends Apagar {
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public apagar(): void {
        console.log(`\n Iniciando exclusão do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto a ser excluído: `);

        let index = this.produtos.findIndex((c) => c.getNome() === nome);

        if (index !== -1) {
            this.produtos.splice(index, 1);
            console.log(`Cadastro do produto excluído:)\n`);
        } else {
            console.log(`Produto não encontrado: (\n`);
        }
    }
}