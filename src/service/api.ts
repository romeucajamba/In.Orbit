import { Goal } from "../types/interfaces";
 
export const goals: Goal[] = [];
  
export function getGoals(): Promise<Goal[]> {
    return new Promise((resolve) => {
        resolve(goals); // Retorna a lista de goals dentro de uma Promise
    });
}

export async function addGoal(title: string, type: 'daily' | 'weekly', timesPerWeek: number): Promise<void> {
    const newGoal: Goal = {
        id: goals.length + 1,
        title,
        type,
        completed: false,
        timesPerWeek,
    };

    // Simula um atraso assíncrono, por exemplo, uma chamada de API
    return new Promise((resolve) => {
        setTimeout(() => {
            goals.push(newGoal);
            resolve();
        }, 1000); // Simulando um delay de 1 segundo
    });
}