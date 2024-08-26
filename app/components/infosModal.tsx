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
import { Button } from "@/components/ui/button";
import { CarsCard } from "@/lib/interface";

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
        <Button className="m-5 w-full md:w-[70%] h-16 rounded-md text-3xl">
          Mais Informações.
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Informações gerais</AlertDialogTitle>
          <AlertDialogDescription>
            Entre em contato pelo nosso whatsapp para saber mais sobre o caroo e agende uma visita, basta clicar no botão abaixo que você sera encaminhado.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <h1>{item.montadora} {item.modelo}</h1>
          <h2>Ano: {item.ano}</h2>
          <h2>Câmbio: {item.cambio}</h2>
          <h2>Combustível: {item.combustivel}</h2>
          <h2>Kilometragem: {item.kilometragem}</h2>
          <h2>Contato: {item.contato}</h2>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Fechar</AlertDialogCancel>
          <AlertDialogAction className="hover:bg-green-500">Whatsapp</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}