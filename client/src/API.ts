import axios, { AxiosResponse } from "axios";

// Define a rota root (/)
const baseUrl: string = "http://localhost:8000";

// Busca a API via GET
export async function getSubjects(): Promise<AxiosResponse<ApiDataType>> {
    try {
        const subjects: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/materias"
        );
        // Retorna o fetch
        return subjects;
    } catch (err) {
        throw err;
    };
};

// Busca a API via POST
export async function addSubject(formData: ISubject): Promise<AxiosResponse<ApiDataType>> {
    try {
        // Cria uma materia com os dados da formData
        const subject: Omit<ISubject, "_id"> = {
            name: formData.name,
            description: formData.description,
            status: false,
            completion: formData.completion
        };

        // Salva a materia
        const saveSubject: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/materias/adicionar",
            subject
        );

        // Retorna ao fetch
        return saveSubject;

    } catch (err) {
        // Retorna um erro caso haja
        throw err;
    }
};

// Busca a API via PUT
export async function updateSubject(subject: ISubject): Promise <AxiosResponse<ApiDataType>> {
    // Tenta atualizar o status da materia
    try {
        // Cria a atualizacao
        const subjectUpdate: Pick<ISubject, "status"> = {
            status: true
        };

        // Atualiza a materia
        const updatedSubject: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/materias/atualizar/${subject._id}`,
            subjectUpdate
        );

        // Retorna o fetch
        return updatedSubject;

    } catch (err) {
        // Retorna um erro caso haja
        throw err;
    };
};

// Busca a API via DELETE
export async function deleteSubject(_id: string): Promise<AxiosResponse<ApiDataType>> {
    try {
        const deletedSubject: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/materias/deletar/${_id}`
        );
        // Retorna o Fetch
        return deletedSubject;

    } catch (err) {
        // Retorna um erro caso haja
        throw err;
    }
}