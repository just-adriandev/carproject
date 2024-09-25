

import CarsCatalogo from "../components/catalogo";
export default function Dashboard() {

  return (
    <main className="m-5 mt-10">

      <div className="mt-5 flex-col flex">
        
          <div>
            <h1 className=" text-4xl font-semibold">Catálogo</h1>
            <p className=" text-muted-foreground ">Estes são nossos carros disponiveis, buscamos sempre mantê-los atualizados, entre em contato para ter mais informações.</p>
          </div>

          <div className="mt-4">

            <div className=" mb-6"> 
            </div>

            <CarsCatalogo/>
            
          </div>
        
      </div>

    </main>
  );
}
