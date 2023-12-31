import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemValorProdutosServicosPorCliente extends Listagem {
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
        console.log(`\nLista dos 5 clientes que mais consumiram produtos ou serviços por valor:`);

        const clientesValor = new Map<Cliente, number>();

        // Cálculo do valor total dos produtos consumidos
        this.clientes.forEach(cliente => {
            const valorProdutos = cliente.getProdutosConsumidos.reduce((total, produto) => total + produto.getPreco(), 0);
            clientesValor.set(cliente, valorProdutos);
        });

        // Cálculo do valor total dos serviços consumidos
        this.clientes.forEach(cliente => {
            const valorServicos = cliente.getServicosConsumidos.reduce((total, servico) => total + servico.getPreco(), 0);
            if (clientesValor.has(cliente)) {
                clientesValor.set(cliente, clientesValor.get(cliente)! + valorServicos);
            } else {
                clientesValor.set(cliente, valorServicos);
            }
        });

        // Ordenação dos clientes pelo valor total consumido em ordem decrescente
        const sortedClientes = Array.from(clientesValor.entries()).sort((a, b) => b[1] - a[1]);

        // Obtenção dos top 5 clientes
        const top5Clientes = sortedClientes.slice(0, 5);

        // Exibição da lista
        top5Clientes.forEach(([cliente, valor]) => {
            console.log(`Cliente: ${cliente.nome}`);
            console.log(`Valor total consumido: R$${valor.toFixed(2)}`);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }
}
