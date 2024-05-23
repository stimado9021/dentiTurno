import {Router} from "express";

import { getUser,getUserID,regUser,updateUser,deleteUser,authUser } from "../controllers/user";



const router=Router()

router.get("/",getUser);

router.get("/:id",getUserID)

router.post("/registro",regUser)

router.put("/:id",updateUser)

router.delete("/:id",deleteUser)

router.post("/login",authUser)


export default router;