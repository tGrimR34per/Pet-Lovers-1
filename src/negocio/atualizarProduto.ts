import Entrada from "../io/entrada";
import Atualizar from "./atualizar";
import Produto from "../modelo/produto";

export default class AtualizarProduto extends Atualizar{
    private produtos: Array<Produto>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nIniciando atualização do cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do produto a ser atualizado: `);

        let produto = this.produtos.find((c) => c.getNome() === nome);

        if (produto) {
            let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do produto: `);

            produto.nome = nome;

            console.log(`\nCadastro de produto atualizado :)\n`);
        } else {
            console.log(`Produto não encontrado: (\n`);
        }
    }

}