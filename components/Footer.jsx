import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import AcikSecimLogo from "../public/aciksecimorg-logo.png";

const Footer = () => {
  return (
    <>
        <footer className="bg-white">
            <div className="container mx-auto px-8">
                <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 mb-6 text-black">
                        <Link className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                            <Image
                                src={AcikSecimLogo}
                                height={40}
                                width={240}
                                alt="Açık Seçim Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Links</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">FAQ</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Help</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Support</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Terms</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Privacy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Social</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Facebook</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Linkedin</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Twitter</a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <p className="uppercase text-gray-500 md:mb-6">Company</p>
                        <ul className="list-reset mb-6">
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Blog</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Hakkımızda</a>
                            </li>
                            <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-brandColor">Iletişim</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    </>
  )
}

export default Footer