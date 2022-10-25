  //a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma 
// das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
    function exercicioDois(numero1,numero2) {
        const soma=numero1 + numero2
         return soma
 }
         console.log(exercicioDois(2,4))

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro 
// número é maior ou igual ao segundo.
      const letrab=function(n1,n2) {
            const maiorOuIgual=n1 >=n2
             return maiorOuIgual
      }
          console.log(letrab(4,2))
//(c) Uma função que receba um número e imprima no console um boleano informando 
         // se o número é par ou não.
         const letrac=(numero) => {
             const parOuImpar=numero % 2 === 0
              return parOuImpar
         }
            console.log(letrac(3))
//(d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% 
        // referente ao INSS.
          function letraD(salario) {
            const desconto= salario * 0.90 
              return `O salario com o desconto do INSS SERÁ ${desconto}`
          }
              console.log(letraD(1200))