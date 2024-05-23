import { DataSource } from "typeorm"
import{User} from "../entity/user";
import { Crede } from "../entity/credencial";
import {Turns} from "../entity/turns";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "alfa3000",
    database: "turnos",
    synchronize: true,
    logging: false,
    entities: [User,Crede,Turns],
    subscribers: [],
    migrations: [],
    //dropSchema:true
})
export const userModel = AppDataSource.getRepository(User)
export const userModel2 = AppDataSource.getRepository(Crede)
export const turnModel = AppDataSource.getRepository(Turns)