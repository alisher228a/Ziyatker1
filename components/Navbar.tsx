'use client';
import { NAV_LINKS, NAV_LINKS_KZ, NAV_LINKS_EN } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from 'react';
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [navLinks, setNavLinks] = useState(NAV_LINKS);
    const menuRef = useRef(null); // Ref для меню

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const updateNavLinks = () => {
            const currentPath = window.location.pathname;
            if (currentPath.includes('/kz')) {
                setNavLinks(NAV_LINKS_KZ);
            } else if (currentPath.includes('/en')) {
                setNavLinks(NAV_LINKS_EN);
            } else {
                setNavLinks(NAV_LINKS);
            }
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);
        updateNavLinks();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev); 
    };

    const getLogoHref = () => {
        const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
        if (currentPath.includes('/kz')) {
            return '/kz'; 
        } else if (currentPath.includes('/en')) {
            return '/en'; 
        }
        return '/'; 
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center max-container padding-container z-30 py-5 bg-white rounded-b-lg transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <Link href={getLogoHref()}>
                <Image src="/logo.png" alt="logo" width={150} height={100} />
            </Link>

            <ul className={`hidden h-full gap-12 lg:flex justify-center flex-grow`}>
                {navLinks.map((link) => (
                    <li key={link.key}>
                        <Link href={link.href} className="regular-16 text-gray-50 flex items-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="lg:flex items-center pr-5">
                <LanguageSelector />
            </div>

            <div className="relative" ref={menuRef}>
                <Image 
                    src="/menu.png"
                    alt="menu"
                    width={32}
                    height={32}
                    className="inline-block cursor-pointer lg:hidden"
                    onClick={toggleMenu}
                />
                {isMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
                        <ul className="flex flex-col">
                            {navLinks.map((link) => (
                                <li key={link.key}>
                                    <Link href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
