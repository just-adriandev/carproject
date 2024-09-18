import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { CarsCard } from "@/lib/interface";
import SlideButton from "./button";

interface InfosModalProps {
  item: CarsCard | null | undefined;
}

export function InfosModal({ item }: InfosModalProps) {
  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <SlideButton/>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle><h1 className="text-2xl">Informações gerais</h1></AlertDialogTitle>
          <AlertDialogDescription className="text-xl">
            Entre em contato pelo nosso whatsapp para saber mais sobre o veículo e agende uma visita, basta clicar no botão abaixo que você será encaminhado para uma conversa com um de nossos funcionários.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4">          
          <h1 className="mb-3 text-2xl">Sobre o carro 
          <AlertDialogDescription className="text-xl">
            {item.informacoes}
          </AlertDialogDescription>
          </h1>

          <h1 className="mb-3 text-2xl">Contato 
          <AlertDialogDescription className="text-xl">
            {item.contato}
          </AlertDialogDescription>
          </h1>
        </div>

        <AlertDialogFooter>
          <div className='m-1'>
            <AlertDialogCancel className='mb-2 sm:mb-0 mr-3'>Fechar</AlertDialogCancel>
            <AlertDialogAction className="hover:bg-green-500">Whatsapp</AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}