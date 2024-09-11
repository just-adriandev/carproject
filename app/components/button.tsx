import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SlideButton() {
  return (
    <div className="flex md:h-[85px]">
        <a className="mx-auto flex h-full bt more-bt">
        <span className="fl">
        </span> 
            <span className="sfl">
            </span>
            <span className="cross">
            </span>
                <i>
                </i>

        <p className="text-2xl md:mt-2">Mais informações</p>
    
    </a>
    </div>
  );
}

export function SearchBtn() {
  return (
    <div>
      <Button variant={"secondary"} className="ml-1 flex justify-end " type="submit">
        <Search className="h-6 w-6" />
      </Button>
    </div>
  );
}


