import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemQuantidadeProdutosServicosTotal extends Listagem {
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(produtos: Array<Produto>, servicos: Array<Servico>, clientes: Array<Cliente>) {
        super()
        this.produtos = produtos;
        this.servicos = servicos;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }
    
    public listar(): void {
        console.log(`\nLista de produtos e serviços mais consumidos:`);

        const quantidadeMap = new Map<string, number>();

        this.produtos.forEach(produto => {
            const nomeProduto = produto.nome;
            const quantidadeProdutos = produto.getQuantidadeConsumida();
            if (quantidadeMap.has(nomeProduto)) {
                quantidadeMap.set(nomeProduto, quantidadeMap.get(nomeProduto)! + quantidadeProdutos);
            } else {
                quantidadeMap.set(nomeProduto, quantidadeProdutos);
            }
        });

        this.servicos.forEach(servico => {
            const nomeServico = servico.nome;
            const quantidadeServicos = servico.getQuantidadeConsumida();
            if (quantidadeMap.has(nomeServico)) {
                quantidadeMap.set(nomeServico, quantidadeMap.get(nomeServico)! + quantidadeServicos);
            } else {
                quantidadeMap.set(nomeServico, quantidadeServicos);
            }
        });

        const sortedQuantidades = Array.from(quantidadeMap.entries()).sort((a, b) => b[1] - a[1]);

        sortedQuantidades.forEach(([nome, quantidade]) => {
            console.log(`Nome do item: ${nome}`);
            console.log(`Quantidade total consumida: ${quantidade}`);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }
}