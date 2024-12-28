import { Loader2 } from "lucide-react";
import { Button } from "./button";

export function ButtonLoading(){
    return (
        <Button disabled>
            <Loader2 className="animate-spin"/>
            Aguarde, por favor
        </Button>
    )
}