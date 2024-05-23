import { AppDataSource, turnModel, userModel, userModel2 } from "../config/data-source";
import userDto from "../dto/userdto";
import { User } from "../entity/user";
import IUser from "../interfaces/IUser";
import bcryptjs from "bcryptjs"
import { Crede } from "../entity/credencial";
import { Turns } from "../entity/turns";
import turnDto from "../dto/turndto";
const user:User[]=[];
const turn:turnDto[]=[];
const id:number=1   



export const authUserS = async (data:Crede)=>{
 const {userName,password} = data

 
    const vCrede = await userModel2.find({
                                  where: {
                                    userName: userName,                                     
                                  },
                              })

 
      if (Object.keys(vCrede).length===0)  {  
        console.log('esta vacio')
        return false 
      } else{
        console.log('tienen algo')
        const loginCorrecto= await bcryptjs.compare(password, vCrede[0].password)
          console.log(loginCorrecto)
                if(!loginCorrecto){
                    return vCrede
                }else{
                  return vCrede
                }
      }
 

}



export const regTurnS = async (userData:turnDto)=>{ 
  const {description,fechaCita,horaCita,userId}=userData   
 
   const turn =  await turnModel.create({description,fechaCita,horaCita,userId})
   const result = await turnModel.save(turn)   
   return result
}


export const getTurnsS = async () =>{
    try {
        const allTurns:Turns[] = await turnModel.find()       
        return allTurns             
    } catch (error) {
        console.error(error)
    }
    
}

export const getUserIDS = async (id:number)=>{
  try {
    const turn = await turnModel.findOne({where:{id},relations:['user']})   
    return turn
  } catch (error) {
    console.error(error)    
  }
}

// export const getUserIdUserS = async (id:number)=>{
//   try {
//     const turn = await turnModel.find({
//                                       where: {
//                                           userId: id                                         
//                                       },
//                                   })   
//     return turn
//   } catch (error) {
//     console.error(error)
    
//   }
// }


export const updateTurnsS = async (id:number,data:turnDto)=>{
     
        const {description,fechaCita,horaCita}=data
    try {
      const turn = await turnModel.createQueryBuilder()
                                    .update(Turns)
                                    .set({description:data.description, fechaCita: data.fechaCita,horaCita:data.horaCita,active:"cancelada"})
                                    .where("id = :id", { id: id })
                                    .execute()  
      return turn
    } catch (error) {
      console.error(error)
      
    }
  }

  export const deleteUserS = async (id:number)=>{       
try {
  const user = await userModel.createQueryBuilder()
                                .delete()
                                .from(User)
                                .where("id = :id", { id: id })
                                .execute()
  return user
} catch (error) {
  console.error(error)
  
}
}





