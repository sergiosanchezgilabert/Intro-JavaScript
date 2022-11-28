import { heroes } from "../data/herores";
import heroresDefault, { owners } from "../data/herores-default";


console.log(heroes);

const getHeroesById = (id) => {
    return heroes.find(elem => elem.id === id)
}
console.log(getHeroesById(2));

//Trae el registro que primero encuentra como coincidencia
const getHeroesById2 = (id) => heroes.find(elem => elem.id === id)
console.log(getHeroesById2(2));

//Traer todos los registros
const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)
console.log(getHeroesByOwner('DC'));

//Heroes como default
console.log(heroresDefault);

//Owners exportado cuando ya hay un default de heroes
console.log(owners);

export const getHeroesByIdExp = (id) => {
    return heroes.find(elem => elem.id === id)
}