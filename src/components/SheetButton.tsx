//Imagens
import Foguete from "../assets/img-163.png";
import Yhanko from "../assets/Rectangle.png";
import Avatar from "../assets/avatar.png";

//Icones
import { Plus } from "lucide-react";


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

export function SheetBotton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <div className="h-screen flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="flex justify-center items-center space-x-2 text-xl">
            <img src={Yhanko} alt="logo" className="size-16"/>
            <h1>InOrbit</h1>
          </div>
          <div className="flex">
            <img src={Foguete} alt="foguete" className="size-10 absolute ml-4"/>
            <img src={Avatar} alt="avatar" className="size-32"/>
          </div>
        </div>
           
          <p className="text-zinc-300 leading-relaxed max-w80   text-center">Você ainda não cadastrou nenhuma meta! Que   tal cadastrar uma agora mesmo?</p>

          <Button className="px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 flex items-centergap-2 text-sm  font-medium   tracking-tighter hover:bg-violet-600 w-52 h-12">
            <Plus className="size-4"/>
              Cadastrar meta
          </Button>
      </div>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-3" style={{minWidth:500}}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
            <div>
              <div className="flex items-center justify-between">
                <h1>Cadastrar meta</h1>
              </div>
              <p>
                  Adicione actividades que te fazem bem e  que você quer continuar praticando toda semana.
              </p>
            </div>
            
            <span>Aqui escreve o que vem depois de clicar o botão
            </span>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}