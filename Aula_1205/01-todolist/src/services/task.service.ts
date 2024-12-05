import { TaskDTO } from "./task.dto";

export async function getTasks(): Promise<TaskDTO[]> {
    const urlbase = "https://jsonplaceholder.typicode.com/todo";
    const response = await fetch(urlbase);

    if(response.ok) {
        return response.json();
    }

    throw new Error("Erro ao buscar as tarefas: Status "+ response.status);
    
}