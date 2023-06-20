import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Pessoal from './components/Pessoal'
import Services from './components/Services'
import SectionLeft from './components/SectionLeft'
import SectionRight from './components/SectionRight'
import Cta from './components/Cta'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Services />
      <SectionLeft 
          titulo='Descubra o Caminho para Morar nos Estados Unidos Legalmente!'
          texto='
          Este guia completo oferece todas as informações necessárias para realizar o sonho de morar nos Estados Unidos com sua família ou sozinho. Explore os diferentes tipos de vistos e aprenda o caminho para obter residência legal de forma definitiva.
          '
      />
      <SectionRight 
          titulo={`Guia Definitivo para Morar nos EUA: Vistos Ideais e Green Card`}
          texto='
          Este eBook abrangente fornece um guia passo a passo sobre os tipos de vistos apropriados para residência legal nos Estados Unidos. Descubra as estratégias, dicas e informações exclusivas necessárias para aumentar suas chances de sucesso na obtenção de um visto e alcançar a tão desejada residência permanente.
          '
      />
      <Cta />
      <Pessoal />
      <Footer />
    </main>
  )
}
