import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Atualizar from "./atualizar";

export default class AtualizarCliente extends Atualizar{
    private clientes: Array<Cliente>;
    private entrada: Entrada;

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nIniciando atualização do cadastro do cliente`);
        let cpf = this.entrada.receberTexto(`Por favor, informe o número do CPF do cliente a ser atualizado: `);

        // Procurar o cliente com base no CPF informado
        let cliente = this.clientes.find((c) => c.getCpf.getValor === cpf);

        if (cliente) {
            // Cliente encontrado, solicitar novos dados para atualização
            let nome = this.entrada.receberTexto(`Por favor, informe o novo nome do cliente: `);
            let nomeSocial = this.entrada.receberTexto(`Por favor, informe o novo nome social do cliente: `);

            // Atualizar os dados do cliente
            cliente.nome = nome;
            cliente.nomeSocial = nomeSocial;

            console.log(`\nCadastro atualizado:)\n`);
        } else {
            console.log(`Cliente não encontrado: (\n`);
        }
    }

}