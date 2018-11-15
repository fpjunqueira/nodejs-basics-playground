console.log("Iniciando a boiada\n")

const valorCabecaInicial = 800
const valorCabecaFinal = 2000
const tempoParaRevenda = 2
const quantidadeDeAnosDeInvestimento = 10
const anoAtual = 2018
const anoFinal = 2018 + quantidadeDeAnosDeInvestimento

console.log('Inciando cálculo\n')

let anoDaVenda = anoAtual
let quantidadeDeBoisCompradosNoPeriodo = 5
let lucroLiquidoNoPeriodo = 0
let lucroBrutoNoPeriodo = 0
let valorInvestidoNoPeriodo = valorCabecaInicial * quantidadeDeBoisCompradosNoPeriodo
let lucroTotalBruto = 0
let lucroTotalLiquido = 0

let proporcao = valorCabecaFinal / valorCabecaInicial
console.log(`Proporcao: ${proporcao}`)

console.log('-------------------------------------')

console.log(`ano corrente: ${anoAtual} \n`)
console.log(`quantidade de bois comprados: ${quantidadeDeBoisCompradosNoPeriodo}`)
console.log(`lucro bruto no perído: ${lucroBrutoNoPeriodo}\n`)
console.log(`lucro liquido no período: ${lucroLiquidoNoPeriodo}\n`)

console.log('-------------------------------------')

for(anoDaVenda = (anoDaVenda + tempoParaRevenda); anoDaVenda <= anoFinal; anoDaVenda+=tempoParaRevenda) {

    lucroBrutoNoPeriodo = quantidadeDeBoisCompradosNoPeriodo * valorCabecaInicial * proporcao
    // lucroLiquidoNoPeriodo = lucroBrutoNoPeriodo - valorInvestidoNoPeriodo
    
    quantidadeDeBoisCompradosNoPeriodo = lucroBrutoNoPeriodo / valorCabecaInicial

    console.log(`ano de negociação: ${anoDaVenda} \n`)
    console.log(`quantidade de bois comprados: ${quantidadeDeBoisCompradosNoPeriodo}`)
    console.log(`lucro bruto no perído: ${lucroBrutoNoPeriodo}\n`)
    // console.log(`lucro liquido no período: ${lucroLiquidoNoPeriodo}\n`)
    
    lucroTotalBruto = lucroTotalBruto + lucroBrutoNoPeriodo
    lucroTotalLiquido = lucroTotalLiquido + lucroLiquidoNoPeriodo

    console.log('-------------------------------------')
    
}
console.log(`lucro liquido total: ${lucroTotalLiquido}`)
console.log(`lucro bruto total: ${lucroTotalBruto}`)

console.log('cálculo finalizado')

// tabela:

// ano | lucro bruto | Investimento Próximo Período |    