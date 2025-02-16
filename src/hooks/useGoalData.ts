import { create } from "zustand";
import { getGoals, addGoal, goals } from "../service/api";
import { Goal } from "../types/interfaces";
import { GoalStore} from "../types/interfaces";


export const useGoalStore = create<GoalStore>((set, get) => ({
  goals: [],

  fetchGoals: async () => {
    const data = await getGoals();
    set((state) => ({ ...state, goals: data })); // Mantém a imutabilidade do estado
    return data;
  },
  
  addNewGoal: async (title, frequency) => {
    const newGoal: Goal = {
      id: Date.now(), // Gera um ID temporário
      title,
      timesPerWeek: frequency,
      type: "weekly", // Supondo que `Goal` tenha um campo `type`
      completed: 0,
      completedGoal: false,
      total: goals.length 
    };

    set((state) => ({ goals: [...state.goals, newGoal] }));
    await addGoal(title, "weekly", frequency); // Continua chamando a API
  },

  getCompletedPercentage: () => {
    const goals = get().goals;
    const totalGoals = goals.length;
    const completedGoals = goals.filter((goal) => goal.completed).length;
    return totalGoals > 0 ? Math.round((completedGoals / totalGoals) * 100) : 0;
  },

  completeGoal: (goalTitle: string) => {
    set((state) => ({
      goals: state.goals.map((goal) =>
        goal.title === goalTitle ? { ...goal, completedGoal: true } : goal 
      ),
    }));
  },
}));