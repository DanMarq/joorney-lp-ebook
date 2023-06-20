
"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'animate.css';

import Testimonial from "./Testimonial";

export default function Pessoal () {

    return (
        <section id="testimonial" className="testimonial-section pt-100 pb-25 lg:py-170 animate__animated animate__backInUp">
            <div className="container">
                <div className="justify-center row">
                    <div className="w-full lg:w-2/3">
                        <div className="pb-10 text-center section-title">
                            <div className="m-auto line"></div>
                            <h3 className="title">Quem já alcançou <span>seus sonhos</span></h3>
                        </div>
                    </div>   
                </div>

                <div className='mx-auto'>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            className=""
                            pagination={true}
                            modules={[Navigation, Pagination]}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                  },
                                  480: {
                                    slidesPerView: 1,
                                    spaceBetween: 30
                                  },
                                  640: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                  }
                            }}
                            
                        >
                                <SwiperSlide>
                                        <Testimonial autor="Jenny Deo" profissao="CEO, SpaceX" image="/assets/author-1.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                        <Testimonial autor="Fajar Siddiq" profissao="COO, MakerFlix" image="/assets/author-2.png" />
                                </SwiperSlide>

                                <SwiperSlide>
                                        <Testimonial autor="David Smith" profissao="CTO, Alphabet" image="/assets/author-3.png" />
                                </SwiperSlide>
                                
                        </Swiper>
                </div>
            </div>
        </section>
    )
}