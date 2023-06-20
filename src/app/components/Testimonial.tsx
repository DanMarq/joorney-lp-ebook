import styles from './testimonial.module.css'
import Image from 'next/image'
import {LuQuote} from 'react-icons/lu'

interface testimonialProps {
    autor: string
    profissao: string
    image: string
}

export default function Testimonial(props: testimonialProps) {
    return (
        <div className={styles.sigleTestimonial}>
            <div className='flex items-center justify-between mb-6'>
                <div className="quota">
                    <LuQuote className='text-4xl duration-300 lni lni-quotation text-theme-color' />
                </div>
            </div>
            <div className='mb-8'>
                <p>
                Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.
                </p>
            </div>
            <div className='flex items-center'>
                <div className='relative author-image'>
                    <Image src={'/assets/textimonial-shape.svg'} width={119} height={119} alt='' />
                    <Image className={styles.author} src={props.image} width={80} height={80} alt='' />
                </div>
                <div className="author-content media-body">
                    <h6 className="mb-1 text-xl font-bold text-gray-900">
                        {props.autor}
                    </h6>
                    <p>{props.profissao}</p>
                </div>
            </div>
        </div>
    )
}