// Importamos el modelo SuperHero y la interfaz 
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

// Definicion de la clase SuperHeroRepository 
class SuperHeroRepository extends IRepository {
  // Obtener un superheroe por su ID
  async obtenerPorId(id) {
    return await SuperHero.findById(id); 
  }

  // Obtener todos los superheroes
  async obtenerTodos() {
    return await SuperHero.find({});
  }

  // Busca superheroes por un atributo específico
  async buscarPorAtributo(atributo, valor) {
    const query = { [atributo]: new RegExp(valor, 'i') }; 
    return await SuperHero.find(query);
  }

  // Obtener superheroes mayores de 30 años
  async obtenerMayoresDe30() {
    return await SuperHero.find({
      edad: { $gt: 30 }, 
      planetaOrigen: 'Tierra',
      $expr: { $gte: [{ $size: "$poderes" }, 2] }
    });
  }
}


export default SuperHeroRepository;



