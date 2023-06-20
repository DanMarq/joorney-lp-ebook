import Card from "./Card";
import 'animate.css';

export default function Services() {
    return(
        <section id="services" className="services-area pt-120 animate__animated animate__fadeInUp animate__delay-1s">
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full lg:w-2/3">
                        <div className="pb-10 text-center section-title">
                            <div className="m-auto line"></div>
                            <h3 className="title">
                            Desvendando o Sonho Americano: <span>Desafios e Incertezas para quem Busca o Green Card</span>
                            </h3>
                        </div>
                    </div>
                </div>
                
                <div className="justify-center row">
                    <Card
                        titulo="Assessoria Especializada"
                        texto="Realize seu sonho de morar nos Estados Unidos com nossa assessoria especializada. Oferecemos informações confiáveis, orientação personalizada e suporte durante todo o processo de imigração, desde a escolha do visto até a conquista do Green Card. Conte conosco para superar os desafios e tornar sua jornada mais fácil e bem-sucedida."
                        icon=""
                        shape={1}
                    />

                    <Card
                        titulo="Consultoria em Imigração"
                        texto="Simplifique o complexo sistema de imigração dos Estados Unidos com nossa consultoria especializada. Oferecemos um serviço abrangente que aborda todas as etapas do processo, desde a análise detalhada do seu perfil até a preparação meticulosa da documentação necessária. Confie em nossa expertise para obter clareza, direção e aumentar suas chances de sucesso na jornada rumo ao Green Card."
                        icon=""
                        shape={2}
                    />

                    <Card
                        titulo="Green Card Made Easy"
                        texto="Facilitamos o caminho para obter seu Green Card com nosso serviço exclusivo 'Green Card Made Easy'. Nossa equipe altamente qualificada irá guiá-lo de forma passo a passo, fornecendo informações atualizadas e estratégias eficazes. Garanta uma experiência tranquila e confiável em sua busca por uma vida melhor nos Estados Unidos."
                        icon=""
                        shape={3}
                    />
                </div>
            </div>
        </section>
    )
}