
import Contatos from "./components/contatos";
import EmpresaInfo from "./components/empresaInfo";
import Hero from "./components/hero";
import Copyright from "./components/copyright";

export default async function Home() {

  return (

  <main>
    <Hero/>
    <EmpresaInfo/>
    <Contatos/>
    <Copyright/>

  </main>

  );
}