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
        completed: 0,
        timesPerWeek,
        completedGoal: false
    };

    // Simula um atraso assíncrono, por exemplo, uma chamada de API
    return new Promise((resolve) => {
        setTimeout(() => {
            goals.push(newGoal);
            resolve();
        }, 1000); // Simulando um delay de 1 segundo
    });
}

export async function completionGoal(goalTitle:string): Promise<void>  {
    const updateGoal = goals.map((goal) =>
        goal.title === goalTitle ? { ...goal, completedGoal: true } : goal 
    )

    return new Promise((resolve) => {
        setTimeout(() => {
            goals.push(...updateGoal);
            resolve();
        }, 1000); // Simulando um delay de 1 segundo
    });
}