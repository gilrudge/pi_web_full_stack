let numero = 4;

if (numero % 2 === 0){
  console.log('É par')
}

else {
  console.log('É impar');
}

let numero2 = 7;

if (numero2 > 0){
  console.log('positivo');
}

else if (numero2 ===0){
  console.log('zero')
}

else{
  console.log('negativo');
}


let num3 = [];

if (num3){
  console.log('truthy');
}

else{
  console.log('Falsy');
}

let paridade = numero % 2 ? 'impar' : 'par';
console.log(paridade);

let num2 = -4;

let abs_num2 = num2 > 0 ? num2 : -1*num2;
console.log(abs_num2)


console.log(1>2 || true);





