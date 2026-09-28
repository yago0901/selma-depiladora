import Link from "next/link";
import { site, whatsappLink } from "@/lib/site";

export const metadata = {
  title: "Política de Privacidade | Maria Selma Depiladora",
  robots: { index: true, follow: true },
};

export default function Politica() {
  return (
    <main className="legal">
      <Link href="/" className="eyebrow">Voltar ao site</Link>
      <h1>Política de Privacidade</h1>
      <p>Última atualização: setembro de 2026.</p>

      <h2>Quem somos</h2>
      <p>
        Este site é da Maria Selma Depiladora, localizada em {site.address}. Esta política explica
        como tratamos informações de quem visita o site, conforme a Lei Geral de Proteção de Dados
        (LGPD, Lei nº 13.709/2018).
      </p>

      <h2>Quais dados coletamos</h2>
      <p>
        O site não possui formulários, cadastro nem login, e não coletamos nome, e-mail ou telefone
        pelo site. Guardamos apenas, no seu próprio navegador, a sua escolha sobre cookies.
      </p>

      <h2>Cookies e serviços de terceiros</h2>
      <ul>
        <li>
          <strong>Preferência de cookies:</strong> registramos no seu navegador se você aceitou ou
          recusou. Ela serve só para não repetir o aviso.
        </li>
        <li>
          <strong>Mapa do Google:</strong> o mapa da localização só é carregado se você aceitar.
          Nesse caso, o Google pode usar cookies conforme a política de privacidade dele.
        </li>
        <li>
          <strong>WhatsApp:</strong> ao clicar nos botões de agendamento, você é levado ao WhatsApp,
          que trata seus dados conforme a política do próprio serviço.
        </li>
      </ul>

      <h2>Como mudar sua escolha</h2>
      <p>
        Use o botão &ldquo;Preferências de cookies&rdquo; no rodapé do site para aceitar ou recusar
        novamente a qualquer momento.
      </p>

      <h2>Seus direitos</h2>
      <p>
        Pela LGPD, você pode pedir informações sobre os seus dados, correção, exclusão e outros
        direitos previstos na lei. Fale com a gente pelo WhatsApp{" "}
        <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a>.
      </p>

      <h2>Alterações</h2>
      <p>Esta política pode ser atualizada. A data no topo da página mostra a versão mais recente.</p>
    </main>
  );
}