//Icones
import { Plus, Loader2, Angry, Smile } from "lucide-react";

//Componentes
import { Label } from "./ui/label";
import { Button } from "./ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "./ui/input";

// API
import { addGoal } from "../service/api";
import { useGoalStore } from "../hooks/useGoalData";

//configurations
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const createGoalSchema = z.object({
  golInput: z.string().nonempty("Meta é obrigatório"),
  timesPerWeek: z.coerce.number().min(1).max(7), 
});
// Tipo inferido do schema do Zod
type CreateGolFormData = z.infer<typeof createGoalSchema>;

export function CreatGoalModal() {
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
            <Smile className="text-[#1FC16B]"/>
            <span className="text-[#1FC16B]">Meta cadastrada com sucesso!</span>
          </div>
        ),
        className: "border-l-4 border-l-[#1FC16B]",
      });
    } catch {
      toast({
        description: (
          <div className="flex items-center gap-4">
            <Angry className="text-[#FB3748]"/>
            <span className="text-[#FB3748]">Algo deu errado! Verifique os campos.</span>
          </div>
        ),
        className: "border-l-4 border-l-[#FB3748]",
      });
    } finally {
      setIsLoading(false); // Finaliza o carregamento sempre
    }
  };
  

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-centergap-2 text-sm  font-medium   tracking-tighter hover:bg-violet-600 w-52 h-12">
          <Plus className="size-4"/>
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

          <form className="flex flex-col justify-between h-[40rem]" onSubmit={handleSubmit(onSubmit)}>
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

              <div className="flex items-center justify-center gap-3">
              <SheetClose asChild>
                <Button className="w-28"  variant="secondary">Fechar</Button>
              </SheetClose>
              <Button 
                type="submit" 
                className="w-28 bg-violet-500 hover:bg-violet-600 " 
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="animate-spin" /> : "Salvar"}
              </Button>
            </div>
          </form>
      </SheetContent>
    </Sheet>
  )
}