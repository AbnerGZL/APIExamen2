// models/Eventos.js

import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';
import Organizador from './Organizador.js';

const Evento = sequelize.define('Evento', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING(45),
    allowNull: true,
  },
  organizador_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Organizador,
      key: 'id',
    },
    allowNull: false,
  },
}, {
  tableName: 'eventos',
  timestamps: false,
});

// Relación: Un organizador tiene muchos eventos
Evento.belongsTo(Organizador, { foreignKey: 'organizador_id' });

export default Evento; // Exportamos el modelo como 'default'
