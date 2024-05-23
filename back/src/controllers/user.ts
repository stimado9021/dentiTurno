import {Request,Response} from "express";
import { getUserS,getUserIDS,regUserS,updateUserS,deleteUserS,regCredeS,authUserS} from "../service/user";
import IUser from "../interfaces/IUser";
import { User } from "../entity/user";
import {JWT_SECRET} from "../config/envs"
import  jsonwebtoken from "jsonwebtoken"


export const getUser = async (req: Request, res: Response) =>{
    try {
    const  newUser = await getUserS();
   res.status(200).json(newUser)
    } catch (error:any) {
        res.status(400).json({error:error.message})
        
    }
 

}

export const getUserID = async (req: Request, res: Response)=>{
    const {id} = req.params    
   try {
    const newUser= await getUserIDS(Number(id))
    res.status(200).json(newUser)
} catch (error:any) {
    res.status(400).json({error:error.message})
    
   }
}

export const updateUser = async (req: Request, res: Response)=>{
    const {id} = req.params    
   try {
    const newUser= await updateUserS(Number(id),req.body)
    res.status(200).json(newUser)
} catch (error:any) {
    res.status(400).json({error:error.message})
    
   }
}
export const deleteUser = async (req: Request, res: Response)=>{
    const {id} = req.params    
   try {
    const newUser= await deleteUserS(Number(id))
    res.status(200).json(newUser)
} catch (error:any) {
    res.status(400).json({error:error.message})
    
   }
}


export const regUser = async (req: Request, res: Response)=>{
    const {name,email,fechaNac,dni,userName,password} = req.body; 
    try {
        const  newUser =  await regUserS({name,email,fechaNac,dni})
       
        const {id}=newUser        
        const newCrede = regCredeS({id, userName, password});
    res.status(200).json({message:"usuario y credenciales guardadas con exito"});
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

export const authUser = async(req: Request, res: Response)=>{
    const loginData=req.body
  
  try {
    if(!loginData.userName || !loginData.password){
        return res.status(401).json({"message":"campos estan vacios, llenelos por favor"})
    }
    const  newUser =  await authUserS(loginData)
    if(Object.keys(newUser).length===0){
return res.status(400).json({"message":"error durante authenticated"}) 
    }else{
    const clave =String(JWT_SECRET)
        const {userName} = loginData
       const token=jsonwebtoken.sign({user:userName},clave,{expiresIn:"3h"});
       const cookieOption={
        expiries:Date.now() + 3*60*1000,
        path:"7"
       }
         
            res.cookie("jwt",token,cookieOption)
            res.send({status:"ok",message:"usuario loggeado con exito",newUser,login:true})
    }
    
  } catch (error:any) {
    res.status(400).json({error:error.message})
  }
   
}
