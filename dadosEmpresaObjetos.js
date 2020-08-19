//Programa para armazenar dados de uma empresa usando objetos :)
//CONSTRUCAO E IMPRESSAO DE OBJETOS

const empresa = {                   //objeto criado com sucesso :)
    usuario: 'Jhonathan',           //pode intercalar objetos
    nome: 'rocketseat',
    cor: 'roxo',
    foco: 'programacao',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260,
    }   
}
console.log(`${empresa.usuario}, a empresa ${empresa.nome} esta localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);