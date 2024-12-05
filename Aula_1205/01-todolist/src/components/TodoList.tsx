import { useEffect, useState } from "react";
import { TaskDTO } from "../services/task.dto";
import { getTasks } from "../services/task.service";

export default function TodoList() {
    const [tasks, setTasks] = useState<TaskDTO[]>([]);
    const [error, setError] = useState("");

    // preencher a lista de tarefas
    useEffect(() => {
        async function captureTheTasks() {
            try {
                const webTasks = await getTasks();
                setTasks(webTasks);
                setError("");
            } catch (error) {
                setTasks([]);
                setError((error as Error).message);
            }
        }

        captureTheTasks();
    }, []);

    return(
        <div>
            <ul>
                {(error.length!=0) && <p>Erro ao buscar as tarefas: {error}</p>}
                {tasks.map(task => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>

    );

}