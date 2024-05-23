import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"

@Entity({name:"crede"})

export class Crede{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    userName:string
    @Column()
    password:string
    @Column()
    idUser:number

    @OneToOne(()=>User)
    @JoinColumn()
    User:User
     
}
