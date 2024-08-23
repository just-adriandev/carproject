import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { CarsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { ArrowLeftRight, CircuitBoard, Fuel } from "lucide-react";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

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

    const data = await client.fetch(query)

    return data;
}
export default async function CarsCatalogo() {

    const data: CarsCard[] = await getData();

    return (
        <div>
  {data.map((item: { _id: Key | null | undefined; montadora: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; modelo: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; ano: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; imagemUrl: string[]; cambio: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; combustivel: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; kilometragem: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; tags: string[]; contato: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | Iterable<ReactNode> | null | undefined; }) => (
    <div key={item._id}>
      <div>
        <Card className="m-4">

          <div>
          <CardHeader>
            <div className="flex justify-between">
            <h1 className=" text-2xl">{item.montadora}<span className="ml-2 font-bold text-4xl">{item.modelo}</span></h1>
            <h1 className=" text-3xl"><span className=" mr-2 align-top text-sm">Ano</span>{item.ano}</h1>
            </div>            
          </CardHeader>
          </div>

          <div>
          <CardContent>
          <Carousel>

              <CarouselContent className="border md:max-h-[675px] mb-2 border-red-50">
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
              <div>
              
              <div className="flex justify-between gap-x-7">
                
                  <div><CircuitBoard className="h-7 w-7" />
                  <h1 className="text-3xl">{item.cambio}</h1></div>
                
                
                  <div><Fuel className=" h-7 w-7" />
                  <h1 className="text-3xl">{item.combustivel}</h1></div>
                
                
                  <div><ArrowLeftRight className=" h-7 w-7" />
                  <h1 className="text-3xl">{item.kilometragem}</h1></div>
                
              </div>

              <div className=" gap-y-6 flex w-full">
              <ul className="flex">
                {item.tags.map((tag) => (
                  <li className="flex bg-slate-500 rounded-full m-2 p-2" key={tag}>{tag}</li>
                ))}
              </ul>
              </div>

              <div className="flex">
              <h1>{item.contato}</h1>
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

