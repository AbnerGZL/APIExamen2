import { Sequelize } from "sequelize";
import userModel from "./user.model.js";
import roleModel from "./role.model.js";
import sequelize from "../config/db.config.js";  // Conexión a la base de datos

const db = {};

db.sequelize = sequelize;  // Solo asigna la conexión activa aquí

// Definir los modelos
db.user = userModel(sequelize, Sequelize);
db.role = roleModel(sequelize, Sequelize);

// Definir las relaciones
db.role.belongsToMany(db.user, {
    through: "user-roles",
    foreignKey: "roleId",
    otherKey: "userId",
});

db.user.belongsToMany(db.role, {
    through: "user-roles",
    foreignKey: "userId",
    otherKey: "roleId",
    as: "roles",
});

db.ROLES = ["user", "admin", "moderator"];

export default db;
