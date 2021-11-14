import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Message } from "./message";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @OneToMany(type => Message, message => message.user, {eager: true, cascade: true})
    mesages: Message [];
}