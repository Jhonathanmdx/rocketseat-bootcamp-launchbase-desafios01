// Programa para armazenar dados de um programador (no caso EU!)
// ===================***VETORES E OBJETOS***===================\\

const programador = {
    nome: 'Jhonathan',
    idade: 26,
    tecnologias: [
        {
            nome: 'C++',
            especialidade: 'Desktop'
        },
        {
            nome: 'Python',
            especialidade: 'DataScience'                                //Criando vetor para armazenar dados das tecnologias
        },                                                               
        {
            nome: 'JavaScript',
            especialidade: 'Web/Mobile'
        }
    ]
}
console.log(`O usuario ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com a especialidade em ${programador.tecnologias[0].especialidade}`)
