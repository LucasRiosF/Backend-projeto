import { Router } from "express";
import { buscarTodosAlunos,
        buscarAlunoPorId 
     } from "../controllers/students.controller";

const rotasAlunos = Router();

rotasAlunos.get("/", buscarTodosAlunos);
rotasAlunos.get("/", buscarAlunoPorId);

rotasAlunos.get("/", (req, res) => {
    return res.status(200).send({ message: "Rota get all alunos!"});
});

rotasAlunos.get("/:id", (req, res) => {
    const { id } = req.params;

    return res.status(200).send({ message: `Rota Get aluno com id ${id}`});
});

rotasAlunos.post("/", (req, res) => {
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade){
        return res.status(400).send({ message: "Dados inválidos" });
    }
    return res.status(201).send({ message: "rota POST alunos" });
})

rotasAlunos.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade){
        return res.status(400).send({ message: "Dados inválidos" });
    }

    return res.status(200).send({ message: `Rota PUT aluno com id ${id}`});
});

rotasAlunos.delete("/:id", (req, res) => {
    const { id } = req.params;

    return res.status(200).send({ message: `Rota delete aluno com id ${id}`});
});

export default rotasAlunos;