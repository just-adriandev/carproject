import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { CarsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { ArrowLeftRight, CircuitBoard, Fuel } from "lucide-react";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { InfosModal } from "./infosModal";

async function getData() {
    const query = `*[_type == 'cars'] {
    montadora,
    _id,
    modelo,
    ano, 
    cambio,
    combustivel,
    kilometragem,
    tags,
    contato,
    "imagemUrl": imagem[].asset->url} `

    const data = await client.fetch(query, { limit: 200 })

    return data;
}
export default async function CarsCatalogo() {

    const data: CarsCard[] = await getData();

    return (
        <div>
  {data.map((item: { _id: Key | null | undefined; montadora: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; modelo: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; ano: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; imagemUrl: string[]; cambio: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; combustivel: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; kilometragem: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; tags: string[]; contato: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }) => (
    <div key={item._id}>
      <div>
        <Card className="mt-4 bg-opacity-70 mb-10">

          <div>
          <CardHeader>
            <div className="flex md:mx-6 justify-between">
            <h1 className="text-2xl md:text-3xl">{item.montadora}<span className="ml-2 font-bold text-3xl md:text-5xl">{item.modelo}</span></h1>
            <h1 className="text-3xl md:text-4xl"><span className="hidden sm:flex mr-2 align-top text-sm">Ano</span>{item.ano}</h1>
            </div>            
          </CardHeader>
          </div>

          <div>
          <CardContent>
          <Carousel>

              <CarouselContent className=" md:max-h-[675px] mb-2 ">
              {item.imagemUrl.map((imagem, imagemIndex) => (
                <CarouselItem key={imagemIndex}>
                  <Image
                    src={imagem}
                    width={400}
                    height={300}
                    alt="imagem"
                    className="w-full mt-1 rounded-lg"
                  />
                </CarouselItem>
                ))}
              </CarouselContent>

            <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
            <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
          </Carousel>
          </CardContent>
          </div>

          <CardFooter>
              <div className="w-full">
              
              <div className="md:flex">

                <div className="md:flex items-center md:m-2 justify-between md:w-[60%] ">

                <div className="flex m-8 flex-col items-center">
                  <CircuitBoard className="h-7  w-7 mb-2" />
                  <h1 className="text-3xl">{item.cambio}</h1>
                </div>
                <div className="flex m-8 flex-col items-center">
                  <Fuel className="h-7 w-7  mb-2" />
                  <h1 className="text-3xl">{item.combustivel}</h1>
                </div>
                <div className="flex m-8 flex-col items-center">
                  <ArrowLeftRight className="h-7  w-7 mb-2" />
                  <h1 className="text-3xl">{item.kilometragem}</h1>
                </div>
                
                </div>

                <div className="md:w-[40%] w-[100%] md:justify-end flex items-center">
                  <InfosModal item={item} />

                </div>

              </div>

              <div className="flex w-full">
              <ul className="flex">
                {item.tags && item.tags.map((tag) => (
                  <li className="flex text-white bg-slate-500 rounded-full m-3 p-4" key={tag}>{tag}</li>
                ))}
              </ul>
              </div>

              </div>
          </CardFooter>
        </Card>
      </div>

    </div>
  ))}
</div>
    )
};

