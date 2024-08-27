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
          <AlertDialogTitle>Informações gerais</AlertDialogTitle>
          <AlertDialogDescription className=" font-medium">
            Entre em contato pelo nosso whatsapp para saber mais sobre o veículo e agende uma visita, basta clicar no botão abaixo que você será encaminhado para uma conversa com um de nossos funcionários.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className=" mt-4 ">
          <h1 className=" text-2xl mb-5">{item.montadora} <span>{item.modelo}</span></h1>
          <h2 className=" text-2xl mb-3">Ano: <span className=" text-2xl font-semibold">{item.ano}</span></h2>
          <h2 className=" text-2xl mb-3">Câmbio: <span className=" text-2xl font-semibold">{item.cambio}</span></h2>
          <h2 className=" text-2xl mb-3">Combustível: <span className=" text-2xl font-semibold">{item.combustivel}</span></h2>
          <h2 className=" text-2xl mb-3">Kilometragem: <span className=" text-2xl font-semibold">{item.kilometragem}</span></h2>
          <h2 className=" text-2xl mb-3">Contato: <span className=" text-2xl font-semibold">{item.contato}</span></h2>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Fechar</AlertDialogCancel>
          <AlertDialogAction className="hover:bg-green-500">Whatsapp</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}