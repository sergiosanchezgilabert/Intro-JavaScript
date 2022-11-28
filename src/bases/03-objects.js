const persona = {
    nombre: 'Sergio',
    apellido: 'Sanchez',
    edad: 26,
    direccion: {
        ciudad: 'Jaen',
        codigopostal: '23008',
    },
}
console.log(persona);

const persona2 = persona;//esto hace una copia por referencia, donde si alteras persona2-> alteras persona
persona2.nombre = 'Juan'
console.log(persona2, persona);

const persona3 = { ...persona }//manera correcta de copiar un objeto y poder cambiar valores de objeto
persona3.nombre = 'Alex'
console.log(persona3, persona);