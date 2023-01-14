import { Document } from "mongoose";

export interface ISubject extends Document {
    name: string,
    description: string,
    status: boolean,
    completion: Date
}