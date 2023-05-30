import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';


import { createPost, getPosts } from './db/index.js';

//instancia express app
const app = express();

//middleware CORS
app.use(cors());

//middleware POST
app.use(express.json());



app.get('/', (req, res) => {
    res.json({ ok: true, result: "Todo ok en ruta raíz." })
});

//método GET
app.get('/posts', async (req, res) => {
    try {
        const resultado = await getPosts();
        return res.json({ ok: true, result: resultado });
    } catch (error) {
        console.error(first);
        return res.status(400).json({ok: false, result: "Error con post"});
    }
});


//método POST
app.post('/posts', async (req, res) => {
    const { titulo, img, descripcion, likes } = req.body;
    try {
        const resultado = await createPost({ titulo, img, descripcion, likes });
        return res.status(201).json({ok: true, result: resultado})
    } catch (error) {
        console.error(first);
        return res.status(400).json({ok: false, result: "Error con post"});
    }
});

const PORT = process.env.PORT = 2003;
//escucha de servidor
app.listen(PORT, () => {
    console.log("Escuchando servidor en puerto: http://localhost:" + PORT);
});
