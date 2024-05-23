import {Request,Response} from "express";
import { getTurnsS, regTurnS,getUserIDS,updateTurnsS} from "../service/turns";


export const getTurns = async(req: Request, res: Response) =>{       
try {
    const listTurns = await getTurnsS() 
    res.status(200).json(listTurns)
} catch (error:any) {
    res.status(400).json({error:error.message})
}
}

export const getTurnsID = async (req: Request, res: Response)=>{
    const {id} = req.params
    try {
        const turnoId= await getUserIDS(Number(id))
    res.status(200).json(turnoId)
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}

// export const getTurnsIdUser = async (req: Request, res: Response)=>{
//     const {id} = req.params
//     try {
//         const turnoId = await getUserIdUserS(Number(id))
//     res.status(200).json(turnoId)
//     } catch (error:any) {
//         res.status(400).json({error:error.message})
//     }
// }


export const regTurns = async (req: Request, res: Response)=>{
   
    const {description,fechaCita,horaCita,userId} = req.body; 
try {
    
    const  newTurn =  await regTurnS({description,fechaCita,horaCita,userId})
    res.status(200).json(newTurn)
} catch (error:any) {
    res.status(400).json({error:error.message})
}

}

export const updateTurns =async (req: Request, res: Response)=>{
    const {id} = req.params
    try {
        const turnoId= await updateTurnsS(Number(id),req.body)
    res.status(200).json(turnoId)
    } catch (error:any) {
        res.status(400).json({error:error.message})
    }
}
