import { create } from "zustand";
import { getGoals, addGoal } from "../service/api";
import { Goal } from "../types/interfaces";
import { GoalStore} from "../types/interfaces";


export const useGoalStore = create<GoalStore>((set) => ({
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
      completed: false, // Supondo que `Goal` tenha um campo `completed`
    };

    set((state) => ({ goals: [...state.goals, newGoal] }));
    await addGoal(title, "weekly", frequency); // Continua chamando a API
  },
}));