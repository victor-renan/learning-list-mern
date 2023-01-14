"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubject = exports.updateSubject = exports.addSubject = exports.getSubjects = void 0;
const subject_1 = __importDefault(require("../../models/subject"));
// Funcao que retorna todas as materias do usuario
function getSubjects(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Tenta consultar as materias
        try {
            const subjects = yield subject_1.default.find();
            res.status(200).json({ subjects });
        }
        catch (err) {
            // Retorna o erro caso haja
            throw err;
        }
        ;
    });
}
exports.getSubjects = getSubjects;
;
// Adiciona uma nova materia
function addSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Tenta utilizar os dados da request e criar uma materia
        try {
            // Pega os dados da request
            const body = req.body;
            // Cria uma materia com esses dados
            const subject = new subject_1.default({
                name: body.name,
                description: body.description,
                status: body.status,
                completion: body.completion
            });
            // Salva a nova materia
            const newSubject = yield subject.save();
            // Obtem todas as materias
            const allSubjects = yield subject_1.default.find();
            // Retorna os dados coletados
            res.status(201).json({
                message: "Materia adicionada.",
                subject: newSubject,
                subjects: allSubjects
            });
        }
        catch (err) {
            // Retorna um erro caso haja
            throw err;
        }
        ;
    });
}
exports.addSubject = addSubject;
// Atualiza uma materia
function updateSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Tenta atualizar o objeto pelo id
        try {
            // Pega os dados da request
            const { params: { id }, body, } = req;
            // Atualiza a materia
            const updatedSubject = yield subject_1.default.findByIdAndUpdate({ _id: id }, body);
            // Pega todas as materias
            const allSubjects = yield subject_1.default.find();
            // Retorna os dados coletados
            res.status(200).json({
                message: "Materia atualizada.",
                subject: updatedSubject,
                subjects: allSubjects
            });
        }
        catch (err) {
            throw err;
        }
        ;
    });
}
exports.updateSubject = updateSubject;
;
// Deleta uma materia
function deleteSubject(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Tenta deletar a materia pelo id
        try {
            // Seleciona a materia pelo id
            const deletedSubject = yield subject_1.default.findByIdAndRemove(req.params.id);
            // Pega todas as materias
            const allSubjects = yield subject_1.default.find();
            // Retorna os dados coletados
            res.status(200).json({
                message: "Materia deletada.",
                subject: deleteSubject,
                subjects: allSubjects
            });
        }
        catch (err) {
            throw err;
        }
        ;
    });
}
exports.deleteSubject = deleteSubject;
;
