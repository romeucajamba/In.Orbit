// AddGoals.tsx
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGoalStore } from "../hooks/useGoalData"; // O hook Zustand

export function AddGoals() {
  const { completeGoal } = useGoalStore(); // Função para marcar a meta como concluída

  const handleGoalClick = (goalTitle: string) => {
    completeGoal(goalTitle); // Marca a meta com o nome correspondente como concluída
  };

  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => handleGoalClick("Meditar")}>
        <Plus />
        Meditar
      </Button>
      <Button onClick={() => handleGoalClick("Nadar")}>
        <Plus />
        Nadar
      </Button>
      <Button onClick={() => handleGoalClick("Exercitar")}>
        <Plus />
        Exercitar
      </Button>
      <Button onClick={() => handleGoalClick("Estudar")}>
        <Plus />
        Estudar
      </Button>
    </div>
  );
}
