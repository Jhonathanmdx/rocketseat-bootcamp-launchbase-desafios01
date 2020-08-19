// Programa que calcula a media 
// das turmas de alunos e envia
// mensagem de calculo da media

const alunosDaTurmaA = [
    {
        nome: "Jhonathan",
        nota: 9.8        
    },
    {
        nome: "Andressa",
        nota: 10
    },
    {
        nome: "Giovana",
        nota: 2
    },
    {
        nome: "Sem nome",
        nota: 0
    }
]

const alunosDaTurmaB = [
    {
        nome: "Sarai",
        nota: 10        
    },
    {
        nome: "Susi",
        nota: 4
    },
    {
        nome: "Floki",
        nota: 2
    },
    {
        nome: "Novo Aluno",
        nota: 0
    }
]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++){
        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media 
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
    if ( media > 5 ) {
        console.log(`A media da turma ${turma} ${media}. Parabens!`)
    } else {
        console.log(`A media da turma ${turma} e menor que 5. Estude mais!!`)
    }
}

enviaMensagem(media1, 'turmaA')
enviaMensagem(media2, 'turmaB')

