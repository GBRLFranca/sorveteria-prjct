import estilos from "./sobre.module.css";
import Image from "next/image";
import Clientes from "../../../public/imagens/sobre-image.jpg";
import Sorveteria from "../../../public/imagens/sorveteria.jpg";

export default function Sobre() {
  return (
    <main>
      <div className={estilos.banner}>
        <div className={estilos.container_titulo}>
          <h1>A GELATERIA</h1>
        </div>  
      </div>

      <section className={estilos.container_sobre}>
        <div className={estilos.secao_sobre}>
          <h2>Sobre Nós</h2>
          <span>Nós simplesmente amamos sorvete!</span>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>

        <div className={estilos.container_imagens}>
        <Image
          src={Clientes}
          alt="imagem dos clientes"
          className={estilos.img}
        />
        <Image
          src={Sorveteria}
          alt="imagem da sorveteria"
          className={estilos.img}
        />
      </div>
      
      </section>
    </main>
  );
}
