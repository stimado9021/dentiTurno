import { Column, Entity,  OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { Turns } from "./turns"

@Entity({name:"users"})

export class User{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    name:string
    @Column()
    email:string
    @Column()
    fechaNac:string
    @Column()
    dni:string  

    @OneToMany(()=>Turns,(turns)=>turns.user)
    turns:Turns
}


