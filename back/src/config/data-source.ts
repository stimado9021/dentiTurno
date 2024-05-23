import { DataSource } from "typeorm"
import{User} from "../entity/user";
import { Crede } from "../entity/credencial";
import {Turns} from "../entity/turns";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
import { prependListener } from "process";
export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: process.env.PORTBACK,
    username: process.env.USERNAME,
    password: process.en.PASSWORD,
    database: process.env.DATABASE,
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