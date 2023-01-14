import { Router } from "express";
import { getSubjects, addSubject, updateSubject, deleteSubject } from "../controllers/subjects";

// Cria um Roteador
const router: Router = Router();

// Rota que retorna todas as materias
router.get("/materias", getSubjects);

// Rota que adiciona uma materia
router.post("/materias/adicionar", addSubject);

// Rota que atualiza uma materia pelo id
router.put("/materias/edit/:id", updateSubject);

// Rota que deleta uma materia pelo id
router.delete("/materias/delete/:id", getSubjects);


// Exporta o Roteador
export default router;