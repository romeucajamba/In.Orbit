export type Goal = {
  id: number;
  title: string;
  type: 'daily' | 'weekly';
  completed: number;
  timesPerWeek: number;
  completedGoal: boolean,
  total: number
};

export interface GoalStore {
  goals: Goal[];
  fetchGoals: () => Promise<Goal[]>; 
  addNewGoal: (title: string, frequency: number) => Promise<void>;
  getCompletedPercentage: () => number;
  completeGoal : (goalTitle: string) => void
}

