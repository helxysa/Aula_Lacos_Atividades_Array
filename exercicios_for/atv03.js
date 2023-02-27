let par = [];
let impar = [];
for(let i = 0; i < 10; i++){
  if(i % 2 === 0){
    par.push(i);
  } else if(i % 2 !== 0){
    impar.push(i);
  }

}
console.log(`Os numeros PARES ${par}`);
console.log(`Os numeros PARES ${impar}`);
