const fs = require('fs')

const lerArquivoSync = nomeDoArquivo => {
    console.log('Lendo arquivo sync')
    const arquivo = fs.readFileSync(nomeDoArquivo, {encoding: 'utf8'})
    console.log('Lido arquivo sync')
}

const lerArquivoAsync = nomeDoArquivo => {
    console.log('Lendo arquivo async')
    const arquivo = fs.readFile(nomeDoArquivo, {encoding: 'utf8'})
    console.log('Lido arquivo async')
}

// lerArquivoAsync('App.css')

// const imprimirEDepois = (strImprimir, oQueFazerDepois) => {
//     console.log(strImprimir)
//     oQueFazerDepois('Peterson')
// }

// const congratular = nome => console.log('PARABENSS', nome)

// imprimirEDepois('oi', congratular)

// const calcular = (fnCalculo, fnSucesso, fnExc) => {
//     try {
//         const resultado = fnCalculo()
//         fnSucesso(resultado)
//     } catch (e) {
//         fnExc(e)
//     }
// }

// const soma = () => 2 + 3
// const depoisDaSoma = resultado => console.log('resultado', resultado)
// const casoExcessao = ex => console.error('Erro', ex)

// calcular(soma, depoisDaSoma, casoExcessao)

const arr = [1, 2, 3]
const multiplicarPor2 = nmbr => nmbr * 2
const transformed = arr.map(multiplicarPor2)
arr.forEach((valor, index) => {
    console.log(`recebido o valor ${valor} no index ${index}`)
})
console.log(transformed)
