//Qual o maior

let maior = 0;
let array = [1,2,3,10,5];
for(let i = 0; i < array.length; i++){
  let temporaria = array[i];
  if(temporaria > maior){
    maior = temporaria;
  }
}

console.log(maior);

//Qual o menor
let menor = 99999999;
let lista = [10,2,3,10,5];
for(let i = 0; i < lista.length; i++){
  let temporaria = lista[i];
  if(temporaria < menor){
    menor = temporaria;
  }
}

console.log(menor);