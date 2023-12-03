import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";

export default class ListagemQuantidadeProdutosServicosPorCliente extends Listagem {
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
        console.log(`\nLista dos 10 clientes que mais consumiram produtos ou serviços:`);

        // Calculate the quantity consumed for each client
        const clientesQuantidade = new Map<Cliente, number>();

        /// Quantidade de produtos
        this.clientes.forEach(cliente => {
            const quantidadeProdutos = cliente.getProdutosConsumidos.length;
            clientesQuantidade.set(cliente, quantidadeProdutos);
        });

        // Quantidade de serviços
        this.clientes.forEach(cliente => {
            const quantidadeServicos = cliente.getServicosConsumidos.length;
            if (clientesQuantidade.has(cliente)) {
                clientesQuantidade.set(cliente, clientesQuantidade.get(cliente)! + quantidadeServicos);
            } else {
                clientesQuantidade.set(cliente, quantidadeServicos);
            }
        });

        // Sort the clients based on the total consumed quantity
        const sortedClientes = Array.from(clientesQuantidade.entries()).sort((a, b) => b[1] - a[1]);

        // Get the top 10 clients
        const top10Clientes = sortedClientes.slice(0, 10);

        // Display the list
        top10Clientes.forEach(([cliente, quantidade]) => {
            console.log(`Cliente: ${cliente.nome}`);
            console.log(`Quantidade total consumida: ${quantidade}`);
            console.log(`--------------------------------------`);
        });

        console.log(`\n`);
    }
}