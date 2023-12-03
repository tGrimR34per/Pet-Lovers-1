import Pet from "../modelo/pet";
import Cliente from "../modelo/cliente";
import Entrada from "../io/entrada";
import Atualizar from "./atualizar";

export default class AtualizarPet extends Atualizar {
    private clientes: Array<Cliente>
    private pets: Array<Pet>;
    private entrada: Entrada;

    constructor(pets: Array<Pet>, clientes: Array<Cliente>) {
        super();
        this.pets = pets;
        this.clientes = clientes;
        this.entrada = new Entrada();
    }

    public atualizar(): void {
        console.log(`\nIniciando atualização do pet`);
        let cpf = this.entrada.receberTexto(`Por favor, informe o número do CPF do cliente dono do pet: `);

        // Procurar o cliente com base no CPF informado
        let cliente = this.clientes.find((c) => c.getCpf.getValor === cpf);

        if (cliente) {
            let nomePet = this.entrada.receberTexto(`Por favor, informe o nome do pet: `);

            let pet = cliente.getPets.find((p) => p.getNome === nomePet);

            if (pet) {
                console.log("Pet encontrado: \n", pet, "\n Altere as informações do pet: ");

                let nome = this.entrada.receberTexto(`Por favor informe o nome do pet: `);
                let raca = this.entrada.receberTexto(`Por favor informe a raça do pet: `);
                let genero = this.entrada.receberTexto(`Por favor informe o genero do pet: `);
                let tipo = this.entrada.receberTexto(`Por favor informe o tipo do pet: `);

                pet.nome = nome;
                pet.raca = raca;
                pet.genero = genero;
                pet.tipo = tipo;

                console.log(`\nCadastro de pet atualizado:)\n`);

            } else {
                console.log("Pet não encontrado: (");
            }

        } else {
            console.log(`Cliente não encontrado: (\n`);
        }
    }

}