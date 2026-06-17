"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default function NavBar() {
    const [open, setOpen] = useState(false);


    return (
        <header className="sticky top-0 z-50 w-full bg-black/30 backdrop-blur-md text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-2">

                {/* LOGO */}
                <Image src="/images/logo.svg" alt="Logo" width={200} height={200} className="cursor-pointer" />
                <a href="https://www.google.com">
                    <Image src="/images/Map.svg" alt="Logo" width={20} height={20} className="cursor-pointer" />
                </a>


                {/* DESKTOP MENU */}
                <nav className="hidden md:flex gap-6 font-medium text-sm">
                    <a href="https://www.google.com">
                        <p>80 <span className="text-yellow-400 text-lg font-bold">[</span> 098 <span className="text-yellow-400 text-lg font-bold">]</span> 610-89-95</p>
                    </a>
                </nav>

            </div>

        </header>
    );
}