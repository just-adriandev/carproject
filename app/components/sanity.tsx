import { client } from "@/lib/sanity";

const fetchCars = async () => {
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
};

export default fetchCars;