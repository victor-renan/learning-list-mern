import { Response, Request } from "express";
import { ISubject } from "../../types/subject";
import SubjectSchema from "../../models/subject";

// Funcao que retorna todas as materias do usuario
async function getSubjects (req: Request, res: Response): Promise<void> {
    // Tenta consultar as materias
    try {
        const subjects: ISubject[] = await SubjectSchema.find();
        res.status(200).json({ subjects })
    } catch (err) {
        // Retorna o erro caso haja
        throw err;
    };
};

// Adiciona uma nova materia
async function addSubject (req: Request, res: Response): Promise<void> {
    // Tenta utilizar os dados da request e criar uma materia
    try {
        // Pega os dados da request
        const body = req.body as Pick<ISubject,
            "name" | "description" | "status" | "completion">;

        // Cria uma materia com esses dados
        const subject: ISubject = new SubjectSchema({
            name: body.name,
            description: body.description,
            status: body.status,
            completion: body.completion
        });

        // Salva a nova materia
        const newSubject: ISubject = await subject.save();

        // Obtem todas as materias
        const allSubjects: ISubject[] = await SubjectSchema.find()

        // Retorna os dados coletados
        res.status(201).json({
            message: "Materia adicionada.",
            subject: newSubject,
            subjects: allSubjects
        });

    } catch (err) {
        // Retorna um erro caso haja
        throw err;
    };
}

// Atualiza uma materia
async function updateSubject(req: Request, res: Response): Promise<void> {
    // Tenta atualizar o objeto pelo id
    try {
        // Pega os dados da request
        const {
            params: { id },
            body,
        } = req;

        // Atualiza a materia
        const updatedSubject: ISubject | null = await SubjectSchema.findByIdAndUpdate(
            {_id: id},
            body
        );
        
        // Pega todas as materias
        const allSubjects: ISubject[] = await SubjectSchema.find();
        
        // Retorna os dados coletados
        res.status(200).json({
            message: "Materia atualizada.",
            subject: updatedSubject,
            subjects: allSubjects
        });

    } catch(err) {
        throw err;
    };
};

// Deleta uma materia
async function deleteSubject(req: Request, res: Response): Promise<void> {
    // Tenta deletar a materia pelo id
    try {
        // Seleciona a materia pelo id
        const deletedSubject: ISubject | null = await SubjectSchema.findByIdAndRemove(
            req.params.id
        );
        
        // Pega todas as materias
        const allSubjects: ISubject[] = await SubjectSchema.find();

        // Retorna os dados coletados
        res.status(200).json({
            message: "Materia deletada.",
            subject: deleteSubject,
            subjects: allSubjects
        });

    } catch (err) {
        throw err;
    };
};

export { getSubjects, addSubject, updateSubject, deleteSubject}