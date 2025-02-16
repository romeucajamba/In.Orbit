//configurações
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { Goal } from "../types/interfaces";

//Imagesn e icones
import Yhanko from "../assets/Rectangle.png";
import { CheckCircle2 } from "lucide-react";

//Componentes
import { BarProgress } from "../components/BarProgress";
import { Separator } from "../components/ui/separator";
import { CreatGoalModalInSummay } from "../components/CreateGoalModalInSummar";

//Hook
import { useGoalStore } from "../hooks/useGoalData";
import { useEffect } from "react";
import { AddGoals } from "@/components/AddGoals";


export function Summary() {
    const { goals, fetchGoals } = useGoalStore();
    
    const { data } = useQuery<Goal[]>({
        queryKey: ['goals'],
        queryFn: fetchGoals
      });


    useEffect(() => {
      fetchGoals();
    }, [fetchGoals]);
  
    const firtsDayOfWeek = dayjs().startOf('week').format('D MM');
    const lastDayOfWeek = dayjs().endOf('week').format('D MM');

    const firstIncompleteGoal = data?.find((goal) => !goal.completedGoal);
    const time = dayjs().format('mm:ss SSS A')

    return (
        <section className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={Yhanko} alt="logo" className="size-12"/>
                    <span className="text-lg font-semibold">{firtsDayOfWeek} - {lastDayOfWeek} </span>
                </div>

                <CreatGoalModalInSummay />
            </header>

            <div className="flex flex-col gap-3">
                <BarProgress />

                <div className="flex items-center justify-between text-xs text-zinc-400 mt-2">
                    <span className="space-x-2">Você completou
                        <span className="text-zinc-100"> {firstIncompleteGoal ? <div>{firstIncompleteGoal.title}</div> : <p>Nenhuma meta pendente</p>} </span> de {''}
                        <span className="text-zinc-100"> {data?.length} </span>
                         metas nessa semana
                    </span>
                    <span>{data?.length}%</span>
                </div>
            </div>
            <Separator/>

            <AddGoals/>

            <div className="flex flex-col gap-6">
                <h2 className="font-semibold text-xl">Sua semana</h2>
                <h3 className="font-medium">Domingo {' '}
                    <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
                </h3>

                <ul className="flex flex-col gap-3">
                    {goals.map((goal) => (
                        <li key={goal.id} className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500"/>
                            <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">{goal.title} </span>  " {goal.timesPerWeek} X na semana " <span className="text-zinc-100">{time}</span></span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}