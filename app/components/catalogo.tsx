import { CarsCard } from "@/lib/interface";
import { client } from "@/lib/sanity";
import Image from "next/image";

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
  {data.map((item) => (
    <div key={item._id}>
      <h1>{item.montadora}</h1>
      <h1>{item.modelo}</h1>
      <h1>{item.ano}</h1>
      <h1>{item.cambio}</h1>
      <h1>{item.combustivel}</h1>
      <h1>{item.kilometragem}</h1>
      <ul>
        {item.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <h1>{item.contato}</h1>
      {item.imagemUrl.map((imagem, index) => (
        <Image key={index} src={imagem} alt="imagem" width={400} height={400}></Image>
      ))}

    </div>
  ))}
</div>
    )
}