import 'animate.css';
import Image from 'next/image';

interface SectionProps {
    titulo: string
    texto: string
}

export default function SectionLeft(props:SectionProps) {
    return (
        <section id='about' className="relative pt-20 info-area">
            <div className="container">
                <div className="row">
                    <div className="w-full lg:w-1/2 animate__animated animate__fadeInLeft animate__delay-2s">
                        <div className="mx-4 mt-12 info-content">
                            <div className="mb-4 section-title">
                                <div className="line"></div>
                                <h3 className="title">{props.titulo}</h3>
                            </div>
                            <p className="mb-8">
                                {props.texto}
                            </p>
                            <a href="#" className="main-btn primary-bg">Clique e Saiba mais</a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight animate__delay-2s">
                        <div className="mx-4 mt-12 text-center about-image">
                            <Image src={'/assets/usa-left.jpg'} width={588} height={356} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}