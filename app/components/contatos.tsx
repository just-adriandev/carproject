import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

export default function EmpresaInfo() {
    return (

    <section className='border flex items-center justify-center'> 
        <div className='relative items-center w-full px-5 py-12 mx-auto'>      
            <div className='mx-auto justify-center text-center grid md:grid-cols-2 gap-4'>
      
        {/* lado esquerdo */} 

            <div className='flex justify-center max-w-md mx-auto mt-20 mb-5'>
                <p className="text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa voluptatum hic! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa voluptatum hic! voluptatum hic!
                </p>
            </div>
            

        {/* lado direito */}
           
        <div>

            <h1 className='mb-10 text-3xl font-semibold tracking-tight lg:text-6xl'>
                Nossos contatos                    
            </h1>

            <div className="flex justify-center items-center relative">
                <Image src="/contatosimg.png" alt="imagens dos funcionarios" width={500} height={500} className=" rounded-full z-10" />
            </div>
         
        </div>

            </div>
        </div>              
    </section>
    )
}