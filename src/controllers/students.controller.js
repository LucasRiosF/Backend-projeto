export const buscarTodosAlunos = (req, res) => {
    return res.status(200).send({
        message: "Todos alunos via controller",
        status: "OK"
    });
};

export const buscarAlunoPorId = (req, res) => {
    const { id } = req.params;
    return res.status(200).send({
        message: `Aluno com id ${id}`,
        origem: "controller"
    });
};

export const criarAluno = (req, res) => {
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade){
        return res.status(400).send({ message: "Dados inválidos", origem: "controller" });
    }
    return res.status(201).send({
        message: `Rota POST alunos`,
        origem: "controller"
    });
};

