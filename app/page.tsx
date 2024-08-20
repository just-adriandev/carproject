
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import Hero from "./components/hero";

export default async function Home() {

  const {isAuthenticated} =  getKindeServerSession();

  if (await  isAuthenticated()) {
    return redirect('/dashboard')
  }

  return (

  <main>
    <Hero/>
  </main>

  );
}