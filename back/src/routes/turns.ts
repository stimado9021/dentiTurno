import {Router} from "express";

import { getTurns,getTurnsID,regTurns,updateTurns } from "../controllers/turns";


const router=Router()

router.get("/",getTurns);
router.get("/:id",getTurnsID)
//router.get("/:id",getTurnsIdUser)
router.post("/create",regTurns)
router.put("/:id",updateTurns)


export default router;