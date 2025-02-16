export type Goal = {
  id: number;
  title: string;
  type: 'daily' | 'weekly';
  completed: boolean;
  timesPerWeek: number;
};
export interface GoalStore {
  goals: Goal[];
  fetchGoals: () => Promise<Goal[]>; // ✅ Agora retorna os dados corretamente
  addNewGoal: (title: string, frequency: number) => Promise<void>;
}
