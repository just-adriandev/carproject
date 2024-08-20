
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import Pesquisa from "../components/search";
import CustomFilter from "../components/filters";

export default function Dashboard() {

  return (
    <main className="max-w-[1000px] m-5  flex mt-4 mb-10 gap-x-10 ">

      <div className=" mt-5 flex-col flex">
        
          <div>
            <h1 className=" text-4xl font-semibold">Catálogo</h1>
            <p className=" text-muted-foreground ">Estes são nossos carros disponiveis, buscamos sempre mantê-los atualizados, entre em contato para ter mais informações.</p>
          </div>

          <div className=" mt-4">
            <Pesquisa/>

            {/* <div>
              <CustomFilter title='Ano'/>
              <CustomFilter title='Combustível'/>
              <CustomFilter title='Modelo'/>
            </div> */}
          </div>
        
      </div>

    </main>
  );
}
