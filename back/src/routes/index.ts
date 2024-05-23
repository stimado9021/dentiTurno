import {Router} from "express";
import user from "./user";
import turns from "./turns";


const router = Router();
router.use("/user",user);
router.use("/turns", turns);

export default router;