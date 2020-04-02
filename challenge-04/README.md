# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
//boolean representation with arrow (best way!)
isTruthy = x => !!x

//boolean representation
var isTruthy = function(x){
    return !!x;
}
//conditional ternary 
//In the conditinal ternary the ? dot asume the value "if" and the : of "else"
var isTruthy = function(x){
    return x ? true : false;
}

//compared with the logic operator === (type && value) 
function isTruthy(x){
    if(x === true){
        return true
    }else{
        return false
    }
}

//comparing just the boolean type
function isTruthy(x){
    if(x === true){
        return true
    }else{
        return false
    }
}

//compared with the logic operator ! (negation) before the parameter
function isTruthy(x){
    if(!x === true){
        return false
    }else{
        return true
    }
}
//compared with the logic operator != (negation) after the parameter

function isTruthy(x){
    if(x != true){
        return false
    }else{
        return true
    }
}

//compared with the logic operator != (negation) after the parameter, considering the type and the value
function isTruthy(x){
    if(x !== true){
        return true
    }else{
        return false
    }
}

//resolved with arrow function
isTruthy = x => (x===true)

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy = x => !!x
[Function: isTruthy]
isTruthy(false)
//false
isTruthy(null)
//false
isTruthy(undefined)
//false
isTruthy('')
//false
isTruthy(0)
//false
isTruthy(-0)
//false
isTruthy(NaN)
//false


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(1,2,3,4,5,6,7,8,9,10)

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
marca: "bmw",
modelo: "m3",
placa: "placa",
ano: 2020,
cor: "black",
quantasPortas: 4,
assentos: 5, 
quantidadePessoas: 5   
}

//comment why let, refactoring to AirBnB
let carro = {
marca: "bmw",
modelo: "m3",
placa: "placa",
ano: 2020,
cor: "black",
quantasPortas: 4,
assentos: 5, 
quantidadePessoas: 5   
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(){
    carro.cor = "black-plus"
}

let mudarCor = function(){
    carro.cor = "black-plus"
}

//with arrow
mudarCor = () => carro.cor = "black-block"


/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function(){
   return carro.cor 
}

let obterCor = function(){
   return carro.cor 
}
//arrow function
obterCor = () => carro.cor 

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function(){
   return carro.modelo 
}

let obterModelo = function(){
   return carro.modelo 
}
// obterModelo = () => carro.modelo 

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
var obterMarca = function(){
   return carro.marca 
}

let obterMarca = function(){
   return carro.marca 
}

// obterMarca = () => carro.marca 


/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function(){
   return "Esse carro é um " + carro.marca + " " + carro.modelo + "." 
}

let obterMarcaModelo = function(){
   return "Esse carro é um " + carro.marca + " " + carro.modelo + "." 
}

//Em funcoes arrow tanto function quanto return sao declarados implícitamente 
obterMarcaModelo = () => "Esse carro é um " + carro.marca + " " + carro.modelo + "." 
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
//revisar se parametros para funcoes estao para challenge 04 ou para challenge 05
 let adicionarPassaeiros08 = function(carro){
     if(carro.assentos - carro.quantidadePessoas < 5){
        return "O carro já está lotado!"
     } else {
         carro.assentos % quantidadePessoas
        return "Só cabem mais" + carro.pessoa + "pessoas!"
     }
 }
/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
?

// Mude a cor do carro para vermelho.
?

// E agora, qual a cor do carro?
?

// Mude a cor do carro para verde musgo.
?

// E agora, qual a cor do carro?
?

// Qual a marca e modelo do carro?
?

// Adicione 2 pessoas no carro.
?

// Adicione mais 4 pessoas no carro.
?

// Faça o carro encher.
?

// Tire 4 pessoas do carro.
?

// Adicione 10 pessoas no carro.
?

// Quantas pessoas temos no carro?
?
```
