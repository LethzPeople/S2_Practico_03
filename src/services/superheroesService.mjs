// Importa el repositorio de superheroes
import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

// Crea una instancia del repositorio
const superHeroRepository = new SuperHeroRepository();

// Superheroe por su ID
export async function obtenerSuperheroePorId(id) {
    return await superHeroRepository.obtenerPorId(id); 
}

// Obtener todos los superheroes
export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos(); 
}

// Busca superheroes por un atributo 
export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await superHeroRepository.buscarPorAtributo(atributo, valor);
}

// Obtener superheroes mayores de 30 años
export async function obtenerSuperheroesMayoresDe30() {
    return await superHeroRepository.obtenerMayoresDe30(); 
}

