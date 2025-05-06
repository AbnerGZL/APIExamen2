import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js'; // Ajusta la ruta según tu estructura

const Organizador = sequelize.define('Organizador', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'organizadores',
  timestamps: false,
});

export default Organizador;
