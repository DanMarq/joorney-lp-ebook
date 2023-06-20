import Image from "next/image"
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-16">
                    <Image src={'/assets/logo_joorney_black.png'} width={136} height={29} alt="" className="mx-auto h-10 w-auto" />
                </div>
                <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
                    <div className="flex gap-x-6">
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    <p className="mt-6 text-sm text-slate-500 sm:mt-0">Joorney © 2023. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}