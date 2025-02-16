//Icones
import { Plus, Loader2, Angry, Smile } from "lucide-react";
import { AiOutlineClose } from "react-icons/ai";

//Componentes
import { Label } from "./ui/label";
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";

// API
import { addGoal } from "../service/api"

//configurations
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useGoalStore } from "../hooks/useGoalData";

const createGoalSchema = z.object({
  golInput: z.string().min(6, "A meta deve ter no mínimo 6 caracteres").nonempty("Meta é obrigatório"),
  timesPerWeek: z.coerce.number().min(1).max(7), 
});
// Tipo inferido do schema do Zod
type CreateGolFormData = z.infer<typeof createGoalSchema>;

export function CreatGoalModalInSummay() {
const { addNewGoal } = useGoalStore()

  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<CreateGolFormData>({
    resolver: zodResolver(createGoalSchema),
    defaultValues: {
      timesPerWeek: 1, // Define um valor inicial
    }
  });

  const [timesPerWeek, setTimesPerWeek] = useState<number>(1);

  const handleSelectTimesPerWeek = (value: number) => {
    setValue("timesPerWeek", value);
  };

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: CreateGolFormData) => {
    setIsLoading(true); // Ativa o carregamento antes de enviar
    
    try {
      reset();
      await addGoal(data.golInput, 'daily', data.timesPerWeek);
      await addNewGoal(data.golInput, data.timesPerWeek)
      toast({
        description: (
          <div className="flex items-center gap-4">
            <Smile />
            <span className="text-[#717F96]">Meta cadastrada com sucesso!</span>
          </div>
        ),
        action: <ToastAction altText="close"><AiOutlineClose /></ToastAction>,
        className: "border-l-4 border-l-[#1FC16B]",
      });
    } catch {
      toast({
        description: (
          <div className="flex items-center gap-4">
            <Angry />
            <span className="text-[#717F96]">Algo deu errado! Verifique os campos.</span>
          </div>
        ),
        action: <ToastAction altText="close"><AiOutlineClose /></ToastAction>,
        className: "border-l-4 border-l-[#FB3748]",
      });
    } finally {
      setIsLoading(false); // Finaliza o carregamento sempre
    }
  };
  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="sm">
            <Plus className="size-4" />
            Cadastrar meta
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-6 h-full" style={{minWidth:500}}>
        <SheetHeader>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <SheetTitle>Cadastrar meta</SheetTitle>
              </div>
              <SheetDescription>
                  Adicione actividades que te fazem bem e  que você quer continuar praticando toda semana.
              </SheetDescription>
            </div>
          
          </SheetHeader>

          <form className="flex flex-1 flex-col justify-between" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="title">Qual a actividade?</Label>
                    <Input id="title" autoFocus placeholder="Praticar exercícios, meditar, etc..." className={`focus:border-violet-500 focus-visible:border-violet-500 ${errors.golInput &&   'border-violet-500'}`} {...register("golInput")}/>
                </div>

                <div className="flex flex-col gap-4 h-80">
                  <Label htmlFor="title">Quantas vezes na semana?</Label>
                  <RadioGroup className="h-72" onValueChange={(value) => setTimesPerWeek(Number(value))}>

                    <div onClick={() => handleSelectTimesPerWeek(1)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 1 ? "border-violet-500" : ""}`}>
                    <RadioGroupItem value="1" checked={timesPerWeek === 1}/> 
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        1x na semana
                      </span>
                      <span className="text-lg leading-none">🤨</span>
                    </div>

                      <div onClick={() => handleSelectTimesPerWeek(2)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 2 ? "border-violet-500" : ""}`}>
                        <RadioGroupItem value="2" checked={timesPerWeek === 2}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        2x na semana
                       </span>
                       <span className="text-lg leading-none">🥱</span>
                      </div>

                      <div onClick={() => handleSelectTimesPerWeek(3)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 3 ? "border-violet-500" : ""}`}>
                      <RadioGroupItem value="3" checked={timesPerWeek === 3}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        3x na semana
                       </span>
                       <span className="text-lg leading-none">🙂</span>
                    </div>

                    <div onClick={() => handleSelectTimesPerWeek(4)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 4 ? "border-violet-500" : ""}`}>
                      <RadioGroupItem value="4" checked={timesPerWeek === 4}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        4x na semana
                       </span>
                       <span className="text-lg leading-none">😜</span>
                    </div>

                      <div onClick={() => handleSelectTimesPerWeek(5)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 5 ? "border-violet-500" : ""}`}>
                        <RadioGroupItem value="5" checked={timesPerWeek === 5}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        5x na semana
                       </span>
                       <span className="text-lg leading-none">😎</span>
                       </div>

                        <div onClick={() => handleSelectTimesPerWeek(6)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 6 ? "border-violet-500" : ""}`}>
                        <RadioGroupItem value="6" checked={timesPerWeek === 6}/> 
                      
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        6x na semana
                       </span>
                       <span className="text-lg leading-none">🤯</span>
                    </div>

                    <div onClick={() => handleSelectTimesPerWeek(7)} className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${timesPerWeek === 7 ? "border-violet-500" : ""}`}>
                        <RadioGroupItem value="7" checked={timesPerWeek === 7}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        Todos os dias na semana
                       </span>
                       <span className="text-lg leading-none">🔥</span>
                    </div>

                  </RadioGroup>
                </div>
              </div>


          </form>
          <SheetFooter>
            <div className="flex items-center justify-center gap-3 w-screen">
              <SheetClose asChild>
                <Button variant="secondary">Fechar</Button>
              </SheetClose>
              <Button 
                type="submit" 
                className="w-28 bg-violet-500" 
                onClick={handleSubmit(onSubmit)}
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Salvar"}
              </Button>
            </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}