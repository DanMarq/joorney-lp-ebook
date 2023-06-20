import Image from "next/image"
import { BsArrowDown } from 'react-icons/bs';

export default function Banner() {

    const title = 'Descubra o caminho para morar nos Estados Unidos legalmente!'
    

    return (
        <section id="home" className="hero-section relative bg-no-repeat bg-top pt-150 z-10 pb-13 lg:pb-200 2xl:pb-120">
            <div className="container">
                <div className="row flex relative">
                    <div className="w-full lg:w-1/2">
                        <div className="hero-content mb-0 lg:mb-6">
                            <h1 className="text-white font-bold mb-9 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
                            {title}
                            </h1>
                            {/* <p className="text-white text-lg mb-10 xl:pr-18 2xl:pr-120"></p> */}
                            <a href="#buy" className="main-btn white-bg border-btn btn-hover mb-2">Eu quero agora!</a>
                            <a href="#services" className="scroll-bottom">
                                    <BsArrowDown />
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="hero-img pt-8 lg:pt-0">
                            <Image src={'/assets/ebook-morando-legalmente-usa.png'} width={550} height={200} alt="" className="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}