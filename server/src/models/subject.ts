import { ISubject } from "../types/subject";
import { model, Schema } from "mongoose";

const subjectSchema: Schema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        completion: {
            type: Date,
            required: true
        },
        status: {
            type: Boolean,
            required: true
        },
    },

    { timestamps: true }
);

export default model<ISubject>("SubjectSchema", subjectSchema)