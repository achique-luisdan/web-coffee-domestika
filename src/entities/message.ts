import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Message {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;
    
    @ManyToOne (type => User, user => user.mesages)
    user: User;
    
}