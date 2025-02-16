import { CreateGoal } from "./pages/CreateGoal";
import { Summary } from "./pages/Summary";
import { useQuery } from "@tanstack/react-query";
import { Goal } from "./types/interfaces";
import { Toaster } from "@/components/ui/toaster";
import { useGoalStore } from "./hooks/useGoalData";

export function App() {
  const { fetchGoals } = useGoalStore()

  const { data = [] } = useQuery<Goal[]>({
    queryKey: ['goals'],
    queryFn: fetchGoals
  });
  return (
    <main>
      <Toaster />
      {
        Array.isArray(data) && data.length > 0 ? <Summary /> : <CreateGoal />
      }

    </main>
  )
}
