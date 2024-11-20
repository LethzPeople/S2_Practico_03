// Importa Express y los controladores 
import express from 'express';
import {
    obtenerSuperheroePorIdController, 
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30Controller 
} from '../controllers/superheroesControllers.mjs';


const router = express.Router();


router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/mayores-30', obtenerSuperheroesMayoresDe30Controller); 


export default router;