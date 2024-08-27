import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SlideButton() {
  return (
    <div className="flex md:h-[85px] md:mr-10 items-center mx-auto">
        <a className=" h-full bt more-bt">
        <span className="fl">
        </span> 
            <span className="sfl">
            </span>
            <span className="cross">
            </span>
                <i>
                </i>

        <p className="text-2xl flex mx-auto md:mt-2">Mais informações</p>
    
    </a>
    </div>
  );
}

export function SearchBtn() {
  return (
    <div>
      <Button className=" bg-secondary ml-1 flex justify-end " type="submit">
        <Search className="h-6 w-6 text-white" />
      </Button>
    </div>
  );
}


