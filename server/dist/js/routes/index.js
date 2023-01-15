"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjects_1 = require("../controllers/subjects");
// Cria um Roteador
const router = (0, express_1.Router)();
// Rota que retorna todas as materias
router.get("/materias", subjects_1.getSubjects);
// Rota que adiciona uma materia
router.post("/materias/adicionar", subjects_1.addSubject);
// Rota que atualiza uma materia pelo id
router.put("/materias/atualizar/:id", subjects_1.updateSubject);
// Rota que deleta uma materia pelo id
router.delete("/materias/deletar/:id", subjects_1.deleteSubject);
// Exporta o Roteador
exports.default = router;
