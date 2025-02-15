//Imagens
import Foguete from "../assets/img-163.png";
import Yhanko from "../assets/Rectangle.png";
import Avatar from "../assets/avatar.png";

import { CreatGolModal} from "../components/CreateGolModal";

export function CreateGol () {
    return (
        <section>
          <div className="h-screen flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex justify-center items-center space-x-2 text-xl">
              <img src={Yhanko} alt="logo" className="size-12"/>
              <h1>InOrbit</h1>
            </div>
            <div className="flex">
              <img src={Foguete} alt="foguete" className="size-10 absolute ml-4"/>
              <img src={Avatar} alt="avatar" className="size-32"/>
            </div>
          </div>
          <p className="text-zinc-300 leading-relaxed max-w80   text-center">Você ainda não cadastrou nenhuma meta! <br/> Que   tal cadastrar uma agora mesmo?</p>
          <CreatGolModal />
      </div>
        </section>
    )
}