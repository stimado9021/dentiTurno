
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./user"

@Entity()

export class Turns{
    @PrimaryGeneratedColumn()
    id:number
    @Column()
    description:string
    @Column()
    fechaCita:string
    @Column()
    horaCita:string
    @Column({default:'active'})
    active:string
    @Column()
    userId:number
    
@ManyToOne(()=>User,(user)=>user.turns)
user:User
}
