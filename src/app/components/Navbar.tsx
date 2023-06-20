"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Navbar() {

    const menuLinks = [
        {
            slug: 'Home',
            link: '#home'
        },
        {
            slug: 'Sonho Americano',
            link: '#services'
        },
        {
            slug: 'Guia Definitivo',
            link: '#about'
        },
        {
            slug: 'Depoimentos',
            link: '#testimonial'
        }
    ]

    const [active, setActive] = useState(false)
    const [toogle, setToogle] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            setActive(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => {
        setToogle(!toogle)
    }

    return (
        <div className={`navbar-area ${active ? 'sticky' : ''}`}>
            <div className="container relative">
                <div className="row items-center">
                    <div className="w-full">
                        <nav className="flex items-center justify-between py-4 navbar navbar-expand-lg">
                            <Link href={''} className="navbar-brand mr-5">
                                <Image src={`${active ? '/assets/logo_joorney_black.png' : '/assets/logo_joorney_white.png'}`} width={136} height={28} alt="" />
                            </Link>
                            <button onClick={handleClick}
                                className={`block navbar-toggler focus:outline-none lg:hidden ${toogle ? 'active' : ''}`} type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                                <span className="toggler-icon"></span>
                            </button>
                            <div  id="navbarOne"
                                className={`absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none ${toogle ? 'show' : ''}`}>
                                <ul id="nav" className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex">
                                    {menuLinks.map((links, i) => (
                                         <li key={i} className="nav-item">
                                         <a onClick={handleClick} className="page-scroll" href={links.link}>{links.slug}</a>
                                     </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                                <a className={`main-btn ${active ? 'primary-bg' : 'white-bg'}`} data-scroll-nav="0" href="#buy" rel="nofollow">Adiquirir agora</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}