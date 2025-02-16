//Imagesn e icones
import Yhanko from "../assets/Rectangle.png";
import { CheckCircle2, Plus } from "lucide-react";

//Componentes
import { BarProgress } from "../components/BarProgress";
import { Button } from "@/components/ui/button";
import { Separator } from "../components/ui/separator";
import { CreatGoalModalInSummay } from "../components/CreateGoalModalInSummar";

//Hook
import { useGoalStore } from "../hooks/useGoalData";
import { useEffect } from "react";

export function Summary() {
    const { goals, fetchGoals } = useGoalStore();

    useEffect(() => {
      fetchGoals();
    }, [fetchGoals]);
  
    return (
        <section className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
            <header className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={Yhanko} alt="logo" className="size-12"/>
                    <span className="text-lg font-semibold">15 a 28 de Fevereiro</span>
                </div>

                <CreatGoalModalInSummay/>
            </header>

            <div className="flex flex-col gap-3">
                <BarProgress/>

                <div className="flex items-center justify-between text-xs text-zinc-400 mt-2">
                    <span className="space-x-2">Você completou
                        <span className="text-zinc-100"> 80 </span> de {''}
                        <span className="text-zinc-100">15 </span>
                         metas nessa semana
                    </span>
                    <span>584</span>
                </div>
            </div>
            <Separator/>

            <div className="flex flex-wrap gap-3">
                <Button>
                    <Plus/>
                    Meditar
                </Button>
                <Button>
                    <Plus/>
                    Nadar
                </Button>
                <Button>
                    <Plus/>
                    Exercitar
                </Button>
                <Button>
                    <Plus/>
                    Estudar
                </Button>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="font-semibold text-xl">Sua semana</h2>
                <h3 className="font-medium">Domingo {' '}
                    <span className="text-zinc-400 text-xs">(10 de Agosto)</span>
                </h3>

                <ul className="flex flex-col gap-3">
                    {goals.map((goal) => (
                        <li key={goal.id} className="flex items-center gap-2">
                            <CheckCircle2 className="size-4 text-pink-500"/>
                            <span className="text-sm text-zinc-400">Você completou "<span className="text-zinc-100">{goal.title} </span>  " {goal.timesPerWeek} X na semana " <span className="text-zinc-100"> às 08:13h</span></span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}