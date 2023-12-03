import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";

//CLIENTES
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import AtualizarCliente from "../negocio/atualizarCliente";
import ApagarCliente from "../negocio/apagarCliente";

//PETS
import CadastroPets from "../negocio/cadastroPets";
import ListagemPets from "../negocio/listagemPets";
import AtualizarPet from "../negocio/atualizarPets";
import ApagarPets from "../negocio/apagarPets";

//SERVIÇOS
import CadastroServico from "../negocio/cadastrarServico";
import ListagemServicos from "../negocio/listagemServicos";
import AtualizarServico from "../negocio/atualizarServico";
import ApagarServico from "../negocio/apagarServico";

//PRODUTOS
import CadastroProduto from "../negocio/cadastrarProduto";
import ListagemProdutos from "../negocio/listagemProdutos";
import AtualizarProduto from "../negocio/atualizarProduto";
import ApagarProduto from "../negocio/apagarProduto";

//CONSUMO
import PedirServico from "../negocio/pedirServico";
import ListagemServicoPorCPF from "../negocio/listagemServicoPorCPF";
import PedirProduto from "../negocio/pedirProduto";
import ListagemProdutoPorCPF from "../negocio/listagemProdutoPorCPF";

//LISTAGEM
import ListagemQuantidadeProdutosServicosPorCliente from "../negocio/listagemQuantidadeProdutosServicosPorCliente";
import ListagemValorProdutosServicosPorCliente from "../negocio/listagemValorProdutosServicosPorCliente";
import ListagemQuantidadeProdutosServicosTotal from "../negocio/listagemQuantidadeProdutosServicosTotal";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Apagar cliente`);
    
    console.log(`5 - Cadastrar pet`);
    console.log(`6 - Listar todos os pets`);
    console.log(`7 - Atualizar pet`);
    console.log(`8 - Apagar pet`);
    
    console.log(`9 - Cadastrar serviço`);
    console.log(`10 - Listar todos os serviços`);
    console.log(`11 - Atualizar serviço`);
    console.log(`12 - Apagar serviço`);
    
    console.log(`13 - Cadastrar produto`);
    console.log(`14 - Listar todos os produtos`);
    console.log(`15 - Atualizar produto`);
    console.log(`16 - Apagar produto`);
    
    console.log(`17 - Pedir serviço`);
    console.log(`18 - Registro de serviços por cliente`);
    console.log(`19 - Pedir produto`);
    console.log(`20 - Registro de produtos por cliente`)
    
    console.log(`21 - Top 10 Clientes que mais consumiram em quantidade`)
    console.log(`22 - Top 5 Clientes que mais consumiram em valor`)
    console.log(`23 - Total de Serviços e Produtos mais consumidos`)
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;

        case 3:
            let atualizacao = new AtualizarCliente(empresa.getClientes)
            atualizacao.atualizar()
            break;

        case 4:
            let apagar = new ApagarCliente(empresa.getClientes)
            apagar.apagar()
            break;

        case 5:
            let cadastroPets = new CadastroPets(empresa.getPets, empresa.getClientes)
            cadastroPets.cadastrar()
            break;

        case 6:
            let listagemPets = new ListagemPets(empresa.getClientes)
            listagemPets.listar()
            break;

        case 7:
            let atualizacaoPet = new AtualizarPet(empresa.getPets, empresa.getClientes)
            atualizacaoPet.atualizar()
            break;

        case 8:
            let apagarPets = new ApagarPets(empresa.getClientes)
            apagarPets.apagar()
            break;

        case 9:
            let cadastrarServico = new CadastroServico(empresa.getServicos)
            cadastrarServico.cadastrar()
            break;

        case 10:
            let listagemServicos = new ListagemServicos(empresa.getServicos);
            listagemServicos.listar()
            break;

        case 11:
            let atualizacaoServico = new AtualizarServico(empresa.getServicos);
            atualizacaoServico.atualizar();
            break;

        case 12:
            let apagarServico = new ApagarServico(empresa.getServicos);
            apagarServico.apagar();
            break;

        case 13:
            let cadastrarProduto = new CadastroProduto(empresa.getProdutos);
            cadastrarProduto.cadastrar();
            break;

        case 14:
            let listagemProdutos = new ListagemProdutos(empresa.getProdutos);
            listagemProdutos.listar();
            break;

        case 15:
            let atualizacaoProduto = new AtualizarProduto(empresa.getProdutos);
            atualizacaoProduto.atualizar();
            break;

        case 16:
            let apagarProduto = new ApagarProduto(empresa.getProdutos);
            apagarProduto.apagar();
            break;

        case 17:
            let pedirServico = new PedirServico(empresa.getServicos, empresa.getClientes);
            pedirServico.pedir();
            break;

        case 18:
            let listagemServicoPorCPF = new ListagemServicoPorCPF(empresa.getServicos, empresa.getClientes);
            listagemServicoPorCPF.listar();
            break;

        case 19:
            let pedirProduto = new PedirProduto(empresa.getProdutos, empresa.getClientes);
            pedirProduto.pedir();
            break;

        case 20:
            let listagemProdutoPorCPF = new ListagemProdutoPorCPF(empresa.getProdutos, empresa.getClientes);
            listagemProdutoPorCPF.listar();
            break;

        case 21:
            let top10ClientesConsumo = new ListagemQuantidadeProdutosServicosPorCliente(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            top10ClientesConsumo.listar();
            break;
            
        case 22:
            let top5ClientesConsumo = new ListagemValorProdutosServicosPorCliente(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            top5ClientesConsumo.listar();
            break;

        case 23:
            let totalConsumo = new ListagemQuantidadeProdutosServicosTotal(empresa.getProdutos, empresa.getServicos, empresa.getClientes);
            totalConsumo.listar();
            break;

        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
            
        default:
            console.log(`Operação não entendida: (`)
    }
}