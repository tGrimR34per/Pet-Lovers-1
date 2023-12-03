import Entrada from "../io/entrada"
import Produto from "../modelo/produto"
import Cadastro from "./cadastro"

export default class CadastroProduto extends Cadastro {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    
    constructor(produtos: Array<Produto>) {
        super();
        this.produtos = produtos;
        this.entrada = new Entrada();
    }

    public cadastrar(): void {
        console.log(`\nIniciando cadastro do produto`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
        let preco = parseFloat(this.entrada.receberTexto(`Por favor, informe o preço do produto: `));

        let produto = new Produto(nome, preco);
        this.produtos.push(produto);
        console.log(`\nCadastro de produto concluído: )\n`);
    }
}