import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connect() {
    try {
        await mongoose.connect(process.env.URL_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectar a MongoDB:", error);
    }
}

export default { connect };
