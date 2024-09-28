import { CarsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { ArrowLeftRight, CircuitBoard, Fuel } from "lucide-react";

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
  }`

  const data: CarsCard[] = await client.fetch(query, { limit: 2000000 })

  return data;
}

export default async function AllInfosGet() {
  const data: CarsCard[] = await getData();

  if (!Array.isArray(data) || !data.every((item) => 'montadora' in item && '_id' in item && 'modelo' in item && 'ano' in item && 'cambio' in item && 'combustivel' in item && 'kilometragem' in item && 'tags' in item && 'contato' in item && 'informacoes' in item )) {
    throw new Error('Invalid data format');
  }

  return (
    <div>
      {data.map((item: CarsCard) => (
        <div key={item._id}>
          <h1 className="">{item.montadora}<span className="">{item.modelo}</span></h1>
          <h1 className=""><span className=""></span>{item.ano}</h1>                  
          <h1 className="">{item.cambio}</h1>
          <h1 className="">{item.combustivel}</h1>
          <h1 className="">{item.kilometragem}</h1>
          <span className="">{item.informacoes}</span>
          <span>{item.contato}</span>
        </div>
      ))}
    </div>
  )
}