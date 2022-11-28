
const saludar = function (nombre) {
    return `Hola, ${nombre}`
}

//funcion flecha
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`
}

//funcion flecha acortada
const saludar3 = (nombre) => `Hola, ${nombre}`


console.log(saludar('Goku'));
console.log(saludar2('Vegetta'));
console.log(saludar3('Gohan'));

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'MaestroMutenroy'
    }
}
console.log(getUser());

const getUser2 = () =>
({
    uid: 'ABC123',
    username: 'MaestroMutenroy'
})
console.log(getUser2());

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC456',
        username: nombre
    }
}
const usuarioActivo = getUsuarioActivo('tortuga')
console.log(usuarioActivo);

const getUsuarioActivo2 = (nombre) => ({
    uid: 'ABC456',
    username: nombre
})
const usuarioActivo2 = getUsuarioActivo2('Videl')
console.log(usuarioActivo2);