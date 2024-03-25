import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Home() {

  const {isAuthenticated} =  getKindeServerSession();

  if (await  isAuthenticated()) {
    return redirect('/dashboard')
  }

  return (

    <section className='flex items-center justify-center bg-background'> 
    <div className='relative items-center w-full px-5 py-12 mx-auto'> 
        
      <div className='mx-auto justify-center text-center grid md:grid-cols-2 gap-4'>
          
          <div>

                <h1 className='mt-8 text-3xl font-extrabold tracking-tight lg:text-6xl'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa voluptatum hic! 
                </h1>

                <div className='flex justify-center max-w-sm mx-auto mt-10 mb-5'>
              <RegisterLink>  
                <Button size='lg' className='w-full'>
                  Registre-se de graça 
                </Button>
                </RegisterLink>
              </div>
                           
          </div>
           
                  <div className="flex justify-center items-center">
                    <Image src="/hero.png" alt="Hero Image" width={600} height={500} />
                  </div>
      
      </div>

    </div>              
    </section>

  );
}