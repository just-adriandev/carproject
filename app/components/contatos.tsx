import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Facebook, Instagram, MessageCircle, Phone } from "lucide-react";

export default function Contatos() {
    return (

    <section id="contacts" className='flex items-center justify-center'> 
        <div className='relative items-center w-full px-5 py-12 mx-auto'>      
            <div className='mx-auto justify-center text-center grid md:grid-cols-2 gap-4'>
      
        {/* lado esquerdo */} 

            <div className='flex w-full md:w-[70%] justify-center mx-auto mt-20'>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">Telefone</AccordionTrigger>
                    <AccordionContent className=" font-bold">
                    <p>+55 11 99999-9999</p>
                    <p>+55 11 99999-9999</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl">Instagram</AccordionTrigger>
                    <AccordionContent className=" font-bold">
                    <p>@adriankjk</p>
                    <p>@adriankjk</p>
                    <p>@adriankjk</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl">Whatsapp</AccordionTrigger>
                    <AccordionContent className=" font-bold">
                    <p>+55 11 99999-9999</p>
                    <p>+55 11 99999-9999</p>
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-2xl">Facebook</AccordionTrigger>
                    <AccordionContent className=" font-bold">
                    <p>@adriankjk</p>
                    <p>@adriankjk</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            </div>
            

        {/* lado direito */}
           
        <div>

            <h1 className='mb-10 text-3xl font-semibold tracking-tight lg:text-6xl'>
                Nossos contatos                    
            </h1>

            <div className="flex justify-center items-center relative">
                <Image src="/contatosimg.png" alt="imagens dos funcionarios" width={500} height={500} className=" rounded-lg z-10" />
            </div>
         
        </div>

            </div>
        </div>              
    </section>
    )
}