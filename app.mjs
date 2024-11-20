import express from 'express';
import { connectDB } from './src/config/dbConfig.mjs';  
import superHeroRoutes from './src/routes/superHeroRoutes.mjs';

const app = express(); // Inicializar la app primero
const PORT = process.env.PORT || 3000;

// Middleware para manejar JSON
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Ruta por defecto para asegurarse de que el servidor esté corriendo
app.get('/', (req, res) => {
  res.json({ mensaje: '¡Bienvenido a la API de Superhéroes!' });
});

// Rutas de la API para superhéroes
app.use('/api', superHeroRoutes); // Ahora que app está inicializada, puedes usar las rutas

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Escuchar en el puerto configurado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

