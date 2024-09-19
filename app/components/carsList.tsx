'use client'
import { useState, useEffect } from 'react';
import { CarsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { ArrowLeftRight, CircuitBoard, Fuel } from "lucide-react";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";
import { InfosModal } from "./infosModal";
import fetchCars from './sanity';
interface CarsListProps {
  searchTerm: string;
}

function CarsList({ searchTerm }: CarsListProps) {
  const [data, setData] = useState<CarsCard[]>([]);
  const [filteredData, setFilteredData] = useState<CarsCard[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCars();
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filteredData = data.filter((item) => {
        const text = `${item.montadora} ${item.modelo}`.toLowerCase();
        const searchTermLower = searchTerm.toLowerCase();
        return text.includes(searchTermLower);
      });
      setFilteredData(filteredData);
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  return (
    <div className="lg:grid lg:grid-cols-12">
      {filteredData.map((item) => (
        <div className="md:col-span-6 m-2" key={item._id}>
          <div>
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
        </div>
      ))}
    </div>
  );
}

export default CarsList;