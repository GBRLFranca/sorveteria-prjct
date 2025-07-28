import Image from "next/image";
import estilos from "./page.module.css";
import Sabor_img from "../../public/imagens/banner-sabores.jpg";
import Eventos_img from "../../public/imagens/eventos-image.jpg";
import Sobre_img from "../../public/imagens/sobre-image.jpg";

export default function Home() {
  return (
    <main>
      <div className={estilos.fundo}>
        <div className={estilos.texto_banner}>
          <h1>SORVETE ARTESANAL</h1>
        </div>
      </div>

      <section className={estilos.infos_container}>
        <div className={estilos.sabores}>
          <Image src={Sabor_img} className={estilos.img}  alt="imagem dos sorvetes"/>
          <div className={estilos.textos}>
            <h2>Nossos produtos</h2>
            <span>Novos e deliciosos!</span>
            <p>
              Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
              gelateria todos os nossos produtos são naturais, à base de frutas
              e sem nenhum conservante! Também temos opções sem lactose e sem
              açúcar. Venha conhecer e perceber que tem como o sorvete ser
              delicioso e saudável ao mesmo tempo!
            </p>
          </div>
        </div>

        <div className={estilos.eventos}>
          <div className={estilos.textos}>
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
              aqui com a gente.
            </p>
          </div>
          <Image src={Eventos_img} className={estilos.img} alt="imagem de evento"/>
        </div>

        <div className={estilos.sobre}>
          <Image src={Sobre_img} className={estilos.img} alt="imagem dos clientes"/>
          <div className={estilos.textos}>
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
