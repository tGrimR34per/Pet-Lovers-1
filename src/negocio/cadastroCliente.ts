import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"
import RG from "../modelo/rg"
import Cadastro from "./cadastro"

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        console.log(`\nIniciando cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor, informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor, informe o nome social do cliente: `)

        let valor = this.entrada.receberTexto(`Por favor, informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor, informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissaoCPF = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissaoCPF);

        let valor2 = this.entrada.receberTexto(`Por favor, informe o número do rg: `);
        let data2 = this.entrada.receberTexto(`Por favor, informe a data de emissão do rg, no padrão dd/mm/yyyy: `);
        let partesData2 = data.split('/')
        let ano2 = new Number(partesData2[2].valueOf()).valueOf()
        let mes2 = new Number(partesData2[1].valueOf()).valueOf()
        let dia2 = new Number(partesData2[0].valueOf()).valueOf()
        let dataEmissaoRG = new Date(ano2, mes2, dia2)
        let rg = new RG(valor2, dataEmissaoRG);

        let cliente = new Cliente(nome, nomeSocial, cpf, dataEmissaoCPF, rg, dataEmissaoRG);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído:)\n`);
    }
}