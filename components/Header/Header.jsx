"use client"
import Link from 'next/link';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { MdMenu, MdClose } from "react-icons/md";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState("");

    // for sticky navbar
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
            window.removeEventListener("scroll", isSticky);
        };
    }, []);


    const isSticky = () => {
        /* Method that will fix header after a specific scrollable */
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
        setSticky(stickyClass);
    };

    return (
        <nav className={`bg-[#141416] text-gray-300 ${sticky} shadow-lg`}>
            <div className="flex items-center justify-between md:px-10">
                <div className="z-50 md:w-auto w-full md:mx-0 mx-3 py-3 flex justify-between items-center">
                    <Link href="/" className='flex items-center gap-3'>
                        <h2 className='text-3xl font-bold text-gray-300 hover:text-[#9C27B0]'>Portfolio</h2>
                    </Link>
                    <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <MdClose /> : <MdMenu />}
                    </div>
                </div>
                <ul className="md:flex hidden items-center">
                    <Navbar setOpen={setOpen} sticky={sticky} />
                    <a href="#" download="#"><button className='border px-4 py-2 rounded-md hover:bg-[#9C27B0] duration-300'>Download CV</button></a>
                </ul>

                {/* Mobile nav */}
                <ul className={`md:hidden absolute w-full top-[4.5rem] bg-[#141416] bottom-0 pt-5 pl-4 z-40 h-screen duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
                    <Navbar setOpen={setOpen} sticky={sticky} />
                    <a href="#" download="#"><button className='border px-4 py-2 rounded-md hover:bg-[#9C27B0] duration-300'>Download CV</button></a>
                </ul>
            </div>
        </nav>
    );
};

export default Header;