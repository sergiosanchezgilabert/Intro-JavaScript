import { getHeroesByIdExp } from "./bases/08-imp-exp-find";

const timeout = 2000

/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesByIdExp(5)
        resolve(heroe)
        //reject('No se puedo encontrar el heroe')
    }, timeout);
});


promesa.then((heroe) => {
    console.log('Then de la promesa', heroe);
})
    .catch(err => console.warn(err))*/

const getHeroesByIdAsync = (id) => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesByIdExp(5)
            heroe !== undefined ? resolve(heroe) : reject('No se puedo encontrar el heroe')
        }, timeout);
    });

    return promesa
}

//getHeroesByIdAsync(4).then(heroe => console.log('Heroe', heroe)).catch(err => console.warn(err))
getHeroesByIdAsync(4).then(console.log).catch(console.warn) //coge referencias de lo devuelto en las funciones que llama