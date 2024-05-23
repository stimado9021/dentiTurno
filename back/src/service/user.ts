import { AppDataSource, userModel, userModel2 } from "../config/data-source";
import userDto from "../dto/userdto";
import credeDto from "../dto/crededto";
import { User } from "../entity/user";
import IUser from "../interfaces/IUser";
import bcryptjs from "bcryptjs"
import { Crede } from "../entity/credencial";
import { Turns } from "../entity/turns";
const user:User[]=[];
const vCrede:credeDto[]=[];
const id:number=1   



export const authUserS = async (data:Crede)=>{
 const {userName,password} = data

 
    const vCrede = await userModel2.find({
                                  where: {
                                    userName: userName,                                     
                                  },
                              })

 
      if (Object.keys(vCrede).length===0)  {  
      
        return false 
      } else{
       
        const loginCorrecto= await bcryptjs.compare(password, vCrede[0].password)
          console.log(loginCorrecto)
                if(!loginCorrecto){
                    return vCrede
                }else{
                  return vCrede
                }
      }
 

}

export const regUserS = async (userData:userDto)=>{ 
  const {name,email,fechaNac,dni}=userData     
   const user =  await userModel.create({name,email,fechaNac,dni})
   const result = await userModel.save(user)   
   return result
} 

export const regCredeS = async (userData:credeDto)=>{ 
  const {id,userName,password}=userData   
  const salt= await bcryptjs.genSalt(5)
   const hashPassword = await bcryptjs.hash(password,salt)
   const Crede =  await userModel2.create({userName,password:hashPassword ,idUser:id})
   const result = await userModel2.save(Crede)   
   return result
}


export const getUserS = async () =>{
    try {
        const users = await userModel.find({relations:{turns:true}})      
        return users; 
    } catch (error) {
        console.error(error)
    }
    
}

export const getUserIDS = async (id:number)=>{
  try {
    const user = await userModel.findOne({where:{id},relations:['turns']})   
    return user
  } catch (error) {
    console.error(error)
    
  }
}

export const updateUserS = async (id:number,data:User)=>{
     
        const {name,email,fechaNac,dni}=data
    try {
      const user = await userModel.createQueryBuilder()
                                    .update(User)
                                    .set({ name:data.name, email: data.email,fechaNac:data.fechaNac, dni:data.dni})
                                    .where("id = :id", { id: id })
                                    .execute()  
      return user
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





