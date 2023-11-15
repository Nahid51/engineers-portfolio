import Link from 'next/link';
import { FaSkype, FaGithubAlt, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

const SocialIcon = () => {
    return (
        <div className='fixed hidden md:flex left-10 bottom-[40%]'>
            <div className='flex flex-col items-center text-gray-300'>
                <Link href="#" className='text-xl hover:text-3xl w-10 h-10 duration-300'><FaSkype /></Link>
                <Link href="#" className='text-xl hover:text-3xl w-10 h-10 duration-300'><FaGithubAlt /></Link>
                <Link href="#" className='text-xl hover:text-3xl w-10 h-10 duration-300'><FaFacebookSquare /></Link>
                <Link href="#" className='text-xl hover:text-3xl w-10 h-10 duration-300'><FaSquareXTwitter /></Link>
                <Link href="#" className='text-xl hover:text-3xl w-10 h-10 duration-300'><FaLinkedin /></Link>
            </div>
        </div>
    );
};

export default SocialIcon;