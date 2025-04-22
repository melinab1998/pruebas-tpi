import { DataTypes } from 'sequelize';
import { sequelize } from "../db/db.js";

export const Pets = sequelize.define("pets", {
    
    id_pet: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    species: {
        type: DataTypes.ENUM("Perro", "Gato"),
        allowNull: false
    },
    race: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Desconocida"
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    weight: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    gender: {
        type: DataTypes.ENUM("Macho", "Hembra"),
        allowNull: false,
        
    },
    adopted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'pets',
    timestamps: false
});

export default Pets;