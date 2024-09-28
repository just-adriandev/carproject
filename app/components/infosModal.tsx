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

  // Função para gerar a URL do WhatsApp
  const generateWhatsAppUrl = () => {
    if (!item.contato) return "#";

    // Remove qualquer caractere não numérico
    const phoneNumber = item.contato.replace(/\D/g, "");

    // Opcional: Adicionar uma mensagem pré-definida
    const message = encodeURIComponent(
      "Olá, estou interessado(a) no veículo que você está anunciando."
    );

    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <SlideButton />
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <h1 className="text-2xl">Informações gerais</h1>
          </AlertDialogTitle>
          <AlertDialogDescription className="text-xl">
            Entre em contato pelo nosso WhatsApp para saber mais sobre o veículo e agende uma visita. Basta clicar no botão abaixo que você será encaminhado para uma conversa com um de nossos funcionários.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="mt-4">
          {item.informacoes && (
            <div className="mb-6">
              <h2 className="text-2xl">Sobre o carro</h2>
              <p className="mt-1 text-xl">{item.informacoes}</p>
            </div>
          )}

          {item.contato && (
            <div>
              <h2 className="text-2xl">Entre em contato pelo nosso botão do whatsapp ou pelo seguinte número:</h2>
              <p className="mt-1 text-xl">+55 {item.contato}</p>
            </div>
          )}
        </div>

        <AlertDialogFooter>
          <div className="m-1 flex flex-col sm:flex-row">
            <AlertDialogCancel className="mb-2 sm:mb-0 mr-0 sm:mr-3">Fechar</AlertDialogCancel>
            <AlertDialogAction
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-green-500"
            >
              WhatsApp
            </AlertDialogAction>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
