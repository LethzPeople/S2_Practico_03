import mongoose from 'mongoose'; // Importamos Mongoose para trabajar con MongoDB

// Esquema para los superheroes
const superheroSchema = new mongoose.Schema({
  nombreSuperHeroe: { type: String, required: true },
  nombreReal: { type: String, required: true },
  edad: { type: Number, min: 0 },
  planetaOrigen: { type: String, default: 'Desconocido' },
  debilidad: String,
  poderes: [String],
  aliados: [String],
  enemigos: [String],
  creado: [String],
  createdAt: { type: Date, default: Date.now }
});

// Modelo SuperHero
const SuperHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-07');

export default SuperHero;

