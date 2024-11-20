import mongoose from 'mongoose';

// Funcion para conectar a la base de datos de MongoDB
export async function connectDB() {
  try {
      const url = 'mongodb+srv://Grupo-07:grupo07@cursadanodejs.ls9ii.mongodb.net/Node-js';
      await mongoose.connect(url, {});

    // Si la conexion es exitosa:
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    // Si hay un error durante la conexion
    console.error('Error al conectar a MongoDB:', error);
    // Se finaliza el proceso con un codigo de error
    process.exit(1);
  }
}
