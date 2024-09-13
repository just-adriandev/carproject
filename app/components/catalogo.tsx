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
    informacoes,
    "imagemUrl": imagem[].asset->url} `

    const data = await client.fetch(query, { limit: 2000000000 })

    return data;
}

export default async function CarsCatalogo() {

    const data: CarsCard[] = await getData();

    return (
        <div className="lg:grid lg:grid-cols-12">
  {data.map((item: { _id: Key | null | undefined; montadora: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; modelo: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; ano: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; imagemUrl: string[]; cambio: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; combustivel: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; kilometragem: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; tags: string[]; contato: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }) => (
    <div className="md:col-span-6 m-2" key={item._id}>
      <div>
        <Card className="bg-secondary mt-4 mb-10">

          <div>
          <CardHeader>
            <div className="flex lg:mx-6 justify-between">
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

                <div className="grid grid-cols-2 md:flex w-full items-center md:m-2 justify-between ">

                <div className="cols-span-2 cursor-pointer hover:text-primary transition duration-500 ease-in-out flex m-8 flex-col items-center">
                  <CircuitBoard className="h-7  w-7 mb-2" />
                  <h1 className="text-3xl">{item.cambio}</h1>
                </div>
                <div className="cols-span-2 cursor-pointer hover:text-primary transition duration-500 ease-in-out flex m-8 flex-col items-center">
                  <Fuel className="h-7 w-7  mb-2" />
                  <h1 className="text-3xl">{item.combustivel}</h1>
                </div>
                <div className="cols-span-2 cursor-pointer hover:text-primary transition duration-500 ease-in-out flex m-8 flex-col items-center">
                  <ArrowLeftRight className="h-7  w-7 mb-2" />
                  <h1 className="text-3xl">{item.kilometragem}</h1>
                </div>
                
                </div>

              </div>

              <div className="mb-7 w-full mt-3">
                  <InfosModal item={(item as CarsCard)} />
              </div>

              <div className="flex w-full">
              <ul className="flex flex-wrap">
                {item.tags && item.tags.map((tag) => (
                  <li className="transition duration-500 ease-in-out text-white cursor-pointer hover:bg-primary bg-slate-500 rounded-full m-3 p-4" key={tag}>{tag}</li>
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

