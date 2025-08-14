import "./globals.css";
import Topo from "@/componentes/Topo";
import Rodape from "@/componentes/Rodape";


export const metadata = {
  title: "Sorveteria Artesanal",
  description: "Projeto sorveteria criado com react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo/>
        {children}
        <Rodape/>
      </body>
    </html>
  );
}
