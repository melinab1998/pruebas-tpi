import {Router} from "express";
import { findUsers } from "../services/user.services.js";

const router = Router();

router.get("/users", findUsers);

export default router;