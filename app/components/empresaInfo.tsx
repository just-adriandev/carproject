import Image from "next/image";

export default function EmpresaInfo() {
    return (

    <section className='md:mt-5 md:mb-10 flex items-center justify-center'> 
        <div className='relative items-center w-full px-5 py-12 mx-auto'>      
                <div className='mx-auto justify-center text-center grid md:grid-cols-2 gap-4'>
      
        {/* lado esquerdo */} 

            <div>

                <h1 className='mb-10 text-3xl font-semibold tracking-tight lg:text-6xl'>
                    Sobre nós                    
                </h1>

                <div className="flex justify-center items-center relative">
                    <Image src="/funcionarios.png" alt="imagens dos funcionarios" width={500} height={500} className=" rounded-lg z-10" />
                </div>
                         
            </div>

        {/* lado direito */}
           
            <div className='flex justify-center max-w-md mx-auto mt-20 mb-5'>
                <p className="text-2xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa voluptatum hic! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit cupiditate asperiores perspiciatis culpa voluptatum hic! voluptatum hic!
                </p>
            </div>

            </div>
        </div>              
    </section>
    )
}