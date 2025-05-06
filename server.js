import express from 'express';
import cors from 'cors';
import db from './app/models/index.js';

import authRoutes from './app/routes/auth.routes.js';
import userRoutes from './app/routes/user.routes.js';
import eventosRoutes from './app/routes/eventos.routes.js';

const app = express();
const corsOptions = {
    origin: 'http://localhost:8080',
    origin: 'http://localhost:5173',
    credentials: true
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the application.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/test', userRoutes);
app.use('/api', eventosRoutes);

const PORT = process.env.PORT || 8080;

// db.sequelize.sync({ force: false })
//   .then(() => {
//     console.log('Tablas creadas exitosamente.');
//     console.log(`Server is running on port ${PORT}.`);
//   })
//   .catch(err => {
//     console.error('Error al crear las tablas:', err);
//   });

db.sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized successfully.');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
});