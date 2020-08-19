//Programa para calcular a aposentadoria de uma pessoa.

const nome = "jhonathan";
const sexo = 'M';
const idade = 40;
const contribuicao = 20;

const aposentadoria = idade + contribuicao;

const tempoContribuicaoHomens = sexo == 'M' && contribuicao >= 35 && aposentadoria >= 95    // verificando dados se homem pode ou nao aposentar
const tempoContribuicaoMulheres = sexo == 'F' && contribuicao >= 30 && aposentadoria >= 85  // verificando dados se mulher pode ou nao aposentar

if ( tempoContribuicaoHomens || tempoContribuicaoMulheres ) {
    console.log(`${nome}, voce pode aposentar!`)
} else {
    console.log(`${nome}, voce ainda nao pode se aposentar!`)
}
