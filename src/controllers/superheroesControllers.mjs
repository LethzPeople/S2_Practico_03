// Importamos funciones
import { 
  obtenerSuperheroePorId, 
  obtenerTodosLosSuperheroes, 
  buscarSuperheroesPorAtributo, 
  obtenerSuperheroesMayoresDe30 
} from "../services/superheroesService.mjs";

import { 
  renderizarSuperheroe, 
  renderizarListaSuperheroes 
} from "../views/responseView.mjs";

// Controlador para obtener un superhéroe por ID
export async function obtenerSuperheroePorIdController(req, res) {
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);
        if (!superheroe) {
            return res.status(404).send({ mensaje: 'Superhéroe no encontrado' });
        }
        res.status(200).json(superheroe); // Respuesta con el superhéroe en formato JSON
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener el superhéroe', error: error.message });
    }
}

// Controlador para obtener todos los superhéroes
export async function obtenerTodosLosSuperheroesController(req, res) {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        res.status(200).json(superheroes); // Respuesta con la lista de superhéroes en formato JSON
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener los superhéroes', error: error.message });
    }
}

// Controlador para buscar superhéroes por un atributo específico
export async function buscarSuperheroesPorAtributoController(req, res) {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo' });
        }
        res.status(200).json(superheroes); // Respuesta con los superhéroes encontrados en formato JSON
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al buscar los superhéroes', error: error.message });
    }
}

// Controlador para obtener todos los superhéroes mayores de 30 años
export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();
        if (superheroes.length === 0) {
            return res.status(404).send({ mensaje: 'No se encontraron superhéroes mayores de 30 años' });
        }
        res.status(200).json(superheroes); // Respuesta con los superhéroes mayores de 30 en formato JSON
    } catch (error) {
        res.status(500).send({ mensaje: 'Error al obtener superhéroes mayores de 30', error: error.message });
    }
}

