"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { useGoalStore } from "@/hooks/useGoalData";

export function BarProgress() {
  const getCompletedPercentage = useGoalStore((state) => state.getCompletedPercentage);
  const completedPercentage = getCompletedPercentage(); // Obtém a porcentagem calculada pelo Zustand

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(completedPercentage);
  }, [completedPercentage]); // Atualiza a barra de progresso sempre que a porcentagem mudar

  return <Progress value={progress} max={100} className="w-full" />;
}
