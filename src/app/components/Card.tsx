import styles from './card.module.css'

import Image from 'next/image'
import { BsGear } from 'react-icons/bs';

interface CardProps {
    titulo: string
    texto: string
    icon: string
    shape: number
}

export default function Card (props: CardProps) {
    return (
        <div className="w-full sm:w-2/3 lg:w-1/3">
            <div className={styles.singleServices}>
                <div className={styles.servicesIcon}>
                    <Image className={styles.shape1} src={'/assets/services-shape.svg'} width={119} height={119} alt='' />
                    <Image className={styles.shape2} src={`/assets/services-shape-${props.shape}.svg`} width={77} height={77} alt='' />
                    <BsGear className={styles.icon} />
                </div>
                <div className='mt-8 services-content'>
                    <h4 className='mb-8 text-xl font-bold text-gray-900'>{props.titulo}</h4>
                    <p className='mb-8'>{props.texto}</p>
                </div>
            </div>
        </div>
    )
}