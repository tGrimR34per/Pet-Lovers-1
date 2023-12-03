import CPF from "./cpf"
import Pet from "./pet"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private dataEmissaoCPF: Date
    private rg: RG
    private dataEmissaoRG: Date
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    private pets: Array<Pet>
    
    constructor(nome: string, nomeSocial: string, cpf: CPF, dataEmissaoCPF: Date, rg: RG, dataEmissaoRG: Date) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.dataEmissaoCPF = dataEmissaoCPF
        this.rg = rg
        this.dataEmissaoRG = dataEmissaoRG
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
        this.pets = []
    }

    public get getCpf(): CPF {
        return this.cpf
    }

    public get getDataEmissaoCPF(): Date {
        return this.dataEmissaoCPF
    }

    public get getRg(): RG {
        return this.rg
    }

    public get getDataEmissaoRG(): Date {
        return this.dataEmissaoRG
    }

    public get getDataCadastro(): Date {
        return this.dataCadastro
    }

    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }

    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }

    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    
    public get getPets(): Array<Pet>{
        return this.pets
    }
    
    public adicionarPet(pet: Pet): void {
        this.pets.push(pet);
    }
}