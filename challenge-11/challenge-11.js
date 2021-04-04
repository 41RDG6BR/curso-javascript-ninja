// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
;(retornaSeVerdade = () => {
    const once = false;
    if(once === true) return console.log('true')    
    
    console.log('Entrou ao menos uma vez!')
    
})()

/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
const person = {
    name :'Rodrigo', 
    age: 33, 
    weight: 65,
    birthday: 'september'
}

/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
for (const prop in person){
    console.log(`The ${prop} of person is ${person[prop]}`)
}

/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
function moreThan() {
    if (person.age > 25) {
        console.log('The person has more than 25 years old?', true)
    }else{
        console.log('The person has more than 25 years old?', false)
    }
}

moreThan = (age) => {
    person.age = age;
    if (person.age > 25)return  console.log('The person has more than 25 years old?', true)
        console.log('The person has more than 25 years old?', false)
}
/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
console.log( 'De 0 a 10:' );
// ?

/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
console.log( 'Pares de 0 a 20:' );
// ?
