const personajes = ['Goku', 'Vegetta', 'Trunks']
console.log(personajes[0]);

const [pos1] = personajes
console.log(pos1);//Goku

const [, pos2] = personajes
console.log(pos2);//Vegetta

const [, , pos3] = personajes
console.log(pos3);//Trunks

const retornaArreglo = () => {
    return ['ABC', 123]
}
const [letras, numeros] = retornaArreglo()
console.log(letras, numeros);

const functUseState = (valor) => {
    return [valor, () => { console.log('Hola Mundo'); }]
}
const arr = functUseState('Goku')
console.log(arr);
arr[1]()

//Ejercicio
const [nombre, setNombre] = arr
console.log(nombre);
setNombre()