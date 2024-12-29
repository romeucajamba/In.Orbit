//Icones
import { Plus } from "lucide-react";

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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
 
import { Input } from "./ui/input";
import { RadioGroupIndicator } from "@radix-ui/react-radio-group";

export function SheetBotton() {
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

          <form className="flex flex-1 flex-col justify-between">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="title">Qual a actividade?</Label>
                    <Input id="title" autoFocus placeholder="Praticar exercícios, meditar, etc..."/>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="title">Quantas vezes na semana?</Label>
                  <RadioGroup>
                      <RadioGroupItem value="1" autoFocus>
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        1x na semana
                       </span>
                       <span className="text-lg leading-none">🥱</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="2" autoFocus >
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        2x na semana
                       </span>
                       <span className="text-lg leading-none">🙂</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="3" autoFocus >
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        3x na semana
                       </span>
                       <span className="text-lg leading-none">😎</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="4" autoFocus >
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        4x na semana
                       </span>
                       <span className="text-lg leading-none">😜</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="5" autoFocus >
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        5x na semana
                       </span>
                       <span className="text-lg leading-none">🤨</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="6" autoFocus >
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        6x na semana
                       </span>
                       <span className="text-lg leading-none">🤯</span>
                      </RadioGroupItem>

                      <RadioGroupItem value="todos" autoFocus>
                        <RadioGroupIndicator />
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        Todos os dias na semana
                       </span>
                       <span className="text-lg leading-none">🔥</span>
                      </RadioGroupItem>

                  </RadioGroup>
                </div>
              </div>


          </form>
        <SheetFooter>
            <SheetClose className="flex items-center gap-3">
              <Button className="flex-1" variant="secondary">Fechar</Button>
              <Button className="flex-1 bg-violet-500 ">Salvar</Button>
            </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}