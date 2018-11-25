/**
 * Calcular Juros
 * 
 * montante x (1 + taxaDeJuros)^parecelas
 */
const calculoJuros = 
    (montante, taxa, numeroParcelas) => montante * Math.pow(1 + taxa, numeroParcelas)

module.exports = {
    calculoJuros
}