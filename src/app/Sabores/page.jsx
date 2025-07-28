import estilos from './sabores.module.css';
import Image from 'next/image';
import Avela from '../../../public/imagens/sabor-cookies-avela.png';
import Oreo from '../../../public/imagens/sabor-oreo.png';
import Pistache from '../../../public/imagens/sabor-pistache.png';
import Kiwi from '../../../public/imagens/sorbet-kiwi.png';
import Limao from '../../../public/imagens/sorbet-limao.png';
import Morango from '../../../public/imagens/sorbet-morango.png';

export default function Sabores() {
    return(
        <main>
            <div className={estilos.banner}>
                <div className={estilos.container_titulo}>
                    <h1>NOSSOS SABORES</h1>
                </div>
            </div>

            <section className={estilos.secao_sabores}>
                <h2>SABORES DE SORVETE</h2>

                <div className={estilos.container_sabores}>
                    <div className={estilos.card}>
                        <Image src={Oreo} alt='imagem do sorvete de oreo' className={estilos.imagem}/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={Pistache} alt='imagem do sorvete de pistache' className={estilos.imagem}/>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={Avela} alt='imagem do sorvete de avela' className={estilos.imagem}/>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={Kiwi} alt='imagem do sorvete de kiwi' className={estilos.imagem}/>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={Morango} alt='imagem do sorvete de morango' className={estilos.imagem}/>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className={estilos.card}>
                        <Image src={Limao} alt='imagem do sorvete de limao siciliano' className={estilos.imagem}/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
    )
};