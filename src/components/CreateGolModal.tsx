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
import { useState } from "react";


export function CreatGolModal() {
  const [isClicked, setIsClicked] = useState(false)
  const [isClicked1, setIsClicked1] = useState(false)
  const [isClicked2, setIsClicked2] = useState(false)
  const [isClicked3, setIsClicked3] = useState(false)
  const [isClicked4, setIsClicked4] = useState(false)
  const [isClicked5, setIsClicked5] = useState(false)
  const [isClicked6, setIsClicked6] = useState(false)

  const toggleLicked = () => {
    setIsClicked(!isClicked)
  }

  const toggleLicked1 = () => {
    setIsClicked1(!isClicked1)
  }

  const toggleLicked2 = () => {
    setIsClicked2(!isClicked2)
  }

  const toggleLicked3 = () => {
    setIsClicked3(!isClicked3)
  }
  const toggleLicked4 = () => {
    setIsClicked4(!isClicked4)
  }
  const toggleLicked5 = () => {
    setIsClicked5(!isClicked5)
  }
  const toggleLicked6 = () => {
    setIsClicked6(!isClicked6)
  }
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
                    <Input id="title" autoFocus placeholder="Praticar exercícios, meditar, etc..." className="ocus:border-violet-500 focus-visible:border-violet-500"/>
                </div>

                <div className="flex flex-col gap-4 h-80">
                  <Label htmlFor="title">Quantas vezes na semana?</Label>
                  <RadioGroup className="h-72">
                    <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked ? "border-violet-500": ""}`} onClick={toggleLicked}>
                    <RadioGroupItem value="6" autoFocus onClick={toggleLicked}  className={`${ isClicked ? "bg-violet-500" : "" }`}/> 
                      <span className="text-zinc-300 text-sm font-medium leading-none">
                        1x na semana
                      </span>
                      <span className="text-lg leading-none">🤨</span>
                    </div>

                      <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked1 ? "border-violet-500": ""}`} onClick={toggleLicked1}>
                        <RadioGroupItem value="6" autoFocus onClick={toggleLicked1}  className={`${ isClicked1 ? "bg-violet-500" : "" }`}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        2x na semana
                       </span>
                       <span className="text-lg leading-none">🥱</span>
                      </div>

                      <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked2 ? "border-violet-500": ""}`} onClick={toggleLicked2}>
                      <RadioGroupItem value="6" autoFocus onClick={toggleLicked2}  className={`${ isClicked2 ? "bg-violet-500" : "" }`}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        3x na semana
                       </span>
                       <span className="text-lg leading-none">🙂</span>
                    </div>

                    <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked3 ? "border-violet-500": ""}`} onClick={toggleLicked3}>
                      <RadioGroupItem value="6" autoFocus onClick={toggleLicked3}  className={`${ isClicked3 ? "bg-violet-500" : "" }`}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        4x na semana
                       </span>
                       <span className="text-lg leading-none">😜</span>
                    </div>

                      <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked4 ? "border-violet-500": ""}`} onClick={toggleLicked4}>
                        <RadioGroupItem value="6" autoFocus onClick={toggleLicked4}  className={`${ isClicked4 ? "bg-violet-500" : "" }`}/> 
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        5x na semana
                       </span>
                       <span className="text-lg leading-none">😎</span>
                       </div>

                        <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked5 ? "border-violet-500": ""}`} onClick={toggleLicked5}>
                        <RadioGroupItem value="6" autoFocus onClick={toggleLicked5}  className={`${ isClicked5 ? "bg-violet-500" : "" }`}/> 
                      
                       <span className="text-zinc-300 text-sm font-medium leading-none">
                        6x na semana
                       </span>
                       <span className="text-lg leading-none">🤯</span>
                    </div>

                    <div className={`flex space-x-4 cursor-pointer items-center justify-between border-[1px] rounded-lg pl-2 pr-2 ${ isClicked6 ? "border-violet-500": ""}`} onClick={toggleLicked6}>
                        <RadioGroupItem value="6" autoFocus onClick={toggleLicked6}  className={`${ isClicked6 ? "bg-violet-500" : "" }`}/> 
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
            <SheetClose className="flex items-center justify-center gap-3 w-screen">
              <Button className="w-28" variant="secondary">Fechar</Button>
              <Button className="w-28 bg-violet-500 ">Salvar</Button>
            </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}