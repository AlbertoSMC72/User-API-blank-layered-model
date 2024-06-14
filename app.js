import express from 'express';
import cors from 'cors';
import index from './src/routes/index.router.js';
import config from './src/config/config.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use("/", index);

app.use((req, res) => {
    res.status(404).send("Wrong route");
});

config.connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch((error) => {
    console.log("Error al iniciar el servidor:", error);
});
