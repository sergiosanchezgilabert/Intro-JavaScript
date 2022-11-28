const arreglo = new Array(100)//solo para arrays con tamaño fijo
//arreglo.push(1)//esto no se puede hacer
console.log(arreglo);

const arreglo2 = [1, 2, 3, 4]
console.log(arreglo2);

let arreglo3 = [...arreglo2, 5]
console.log(arreglo3);

const arreglo4 = arreglo3.map(function (numero) {
    return numero * 2

})
console.log(arreglo4);

