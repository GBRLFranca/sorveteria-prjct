import estilos from './topo.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/imagens/logo.png'

export default function Topo(){
    return(
        <header className={estilos.cabecalho}>
            <div className={estilos.container}> 
            
                <Image src={Logo} alt='logomarca' className={estilos.logo}/> 
                
                <nav>
                    <Link href="/" className={estilos.links}>Home</Link>
                    <Link className={estilos.links} href="/Sabores">Sabores</Link>
                    <Link className={estilos.links} href="/Sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
};