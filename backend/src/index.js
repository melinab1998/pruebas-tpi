import express from "express";
import { sequelize } from "./db/db.js";
import config from "./config.js"
import userRoutes from "./routes/user.routes.js"

const app = express();
const PORT = config.PORT || 3000

try{
    app.listen(PORT);
    app.use(express.json());
    app.use(userRoutes);
    await sequelize.sync();
    console.log(`Server listening on port ${PORT}`);

} catch (error) {
    console.log(`There was an error on initialization`);
}