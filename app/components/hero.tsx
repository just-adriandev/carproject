import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Hero() {

    const {isAuthenticated, getUser} = getKindeServerSession();
    const user = await getUser();

    return (

        <section className='flex items-center justify-center'> 
    <div className='relative items-center w-full px-5 py-12 mx-auto'> 
        
            <div className='mx-auto justify-center text-center grid md:grid-cols-2 gap-4'>
          
            <div>

                    <h1 className='mt-8 text-3xl font-semibold tracking-tight lg:text-6xl'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa voluptatum hic! 
                    </h1>

                    <div className='flex justify-center max-w-sm mx-auto mt-10 mb-5'>
                        {await isAuthenticated() ? (
                            <div className="flex w-full items-center gap-x-5">                        
                        
                        <Button size='lg' className=' text-white text-lg md:text-xl ml-3 w-full'>
                        <Link href='/dashboard'>Ver Carros</Link> 
                        </Button>
                        
                            </div>
                        ) : (
                            <div className="flex items-center gap-x-5">                        
                        
                        <RegisterLink>  
                        <Button size='lg' className=' text-white text-lg md:text-xl w-full'>
                        Login / Registro 
                        </Button>
                        </RegisterLink>

                        <Button size='lg' className=' text-white text-lg md:text-xl  ml-3 w-full'>
                        <Link href='/dashboard'>Continuar sem</Link> 
                        </Button>
                            </div>
                        )}
                </div>
                            
            </div>
           
                  <div className="flex justify-center items-center relative">
                    <div className="flex items-center absolute top-0 left-0 w-full h-full z-0">
                    <Image src="/hero-bg.png" alt="Hero background" width={600} height={500} />
                    </div>

                    <Image src="/hero.png" alt="Hero Image" width={700} height={600} className=" z-10" />
                  </div>

                  
      
            </div>

        </div>              
    </section>
    )
}