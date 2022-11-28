const persona = {
    nombre: 'Sergio',
    edad: 26,
    clave: 'Ironman'
}
console.log(persona);

const { nombre: nombre2 } = persona//nombre2 es el renombre de nombre por si nombre ya lo tenemos definido en otro lado
console.log(nombre2);

const retornaPersona = (usuario) => {
    const { edad, nombre, clave } = usuario
    console.log(clave);
}
retornaPersona(persona)

//Saca solo el nombre en vez de todo el objeto
const retornaPersonaNombre = ({ nombre }) => {
    console.log(nombre);
}
retornaPersonaNombre(persona)

//Saca solo el nombre en vez de todo el objeto
const retornaPersonaNombreYRango = ({ nombre, rango = 'Millonario' }) => {
    console.log(nombre, rango);
}
retornaPersonaNombreYRango(persona)

//Ejercicio desestructurar info de return de function
const makeUser = ({ nombre, rango = 'Millonario' }) => {
    return {
        nameComplete: nombre,
        isRich: rango === 'Millonario' ? true : false,
        latlng: {
            lat: 645654.545,
            lng: -4234.555
        }
    }
}
//const { latlng:{lat,lng} } = makeUser(persona)
//console.log(latlng);//latlng no existe, existe lat y lng
const { nameComplete, isRich, latlng: { lat, lng } } = makeUser(persona)
console.log(lat, lng);
const isRichStr = isRich === true ? 'Si' : 'No'
console.log('Nombre Completo: ' + nameComplete + ', es rico: ' + isRichStr);
