import { Router } from "express";
import { getSubjects, addSubject, updateSubject, deleteSubject } from "../controllers/subjects";

// Cria um Roteador
const router: Router = Router();

// Rota que retorna todas as materias
router.get("/materias", getSubjects);

// Rota que adiciona uma materia
router.post("/materias/adicionar", addSubject);

// Rota que atualiza uma materia pelo id
router.put("/materias/atualizar/:id", updateSubject);

// Rota que deleta uma materia pelo id
router.delete("/materias/deletar/:id", getSubjects);


// Exporta o Roteador
export default router;