import 'animate.css';
import Image from 'next/image';



export default function SectionLeft() {
    return (
        <section id='buy' className="relative mt-20 py-30 info-area primary-bg">
            <div className="container">
                <div className="row">
                    <div className="w-full flex items-center lg:w-1/2 animate__animated animate__fadeInLeft animate__delay-2s">
                        <div className="mx-4 info-content">
                            <div className="mb-4 section-title">
                                <div className="line white-bg"></div>
                                <h3 className="title">Realize seu Sonho de Morar nos Estados Unidos: <span>Adquira o Guia Definitivo Agora!</span></h3>
                            </div>
                            <p className="mb-8">
                            Não deixe seu sonho de morar nos Estados Unidos ser apenas uma ideia distante. <br />
                            O Guia Definitivo para Morar nos Estados Unidos oferece todas as informações necessárias para uma imigração bem-sucedida.
                            <br /><br />
                            Não perca mais tempo e adquira agora mesmo o eBook que irá guiá-lo pelos vistos ideais e pelo caminho para o Green Card.
                            Tome o primeiro passo em direção à realização do seu sonho e garanta o seu futuro nos Estados Unidos!
                            </p>
                            
                            <ul className="list-feature">
								<li>Vistos ideais para morar legalmente nos EUA.</li>
								<li>Guia passo a passo para o sucesso.</li>
								<li>Informações exclusivas sobre o Green Card.</li>
                                <li>Realize seu sonho de morar nos EUA agora!</li>
							</ul>

                            <a href="#" className="main-btn white-bg">Quero Agora</a>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 animate__animated animate__fadeInRight animate__delay-2s">
                        <div className="mx-4 mt-12 text-center about-image">
                            <Image src={'/assets/ebook-morando-legalmente-usa.png'} width={588} height={356} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}