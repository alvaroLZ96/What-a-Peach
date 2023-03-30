const dotenv = require('dotenv').config();

const mongoose = require('mongoose');

const { setError } = require('../error/handle.error');

const mongoDB = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDB, {
      useNewUrlParser: true, //esta opción permite que el controlador use el nuevo analizador de URL de MongoDB para analizar la cadena de conexión en lugar del antiguo analizador en desuso. Esto garantiza una mejor compatibilidad con las nuevas características y versiones de MongoDB.
      useUnifiedTopology: true, // esta opción permite al controlador usar la nueva topología unificada de MongoDB. Esta topología unificada reemplaza la antigua topología de replicación y sharding en MongoDB y proporciona una mejor administración y manejo de conexiones para la base de datos.
    });
    const { name, host } = db.connection;
    console.log(`Conectado a la base de datos : ${name} en el host: ${host}`);
  } catch (error) {
    console.error(setError(550, 'Not connect to DB'));
  }
};

module.exports = { connect };
