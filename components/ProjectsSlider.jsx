"use client"
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { MdKeyboardArrowRight, MdArrowForwardIos } from 'react-icons/md';
import sphereLg from "../public/images/sphere_lg.png";
import sphereMd from "../public/images/sphere_md.png";
import macbook from "../public/images/macbook.png";
import mobile from "../public/images/mobile2.png";

function SamplePrevArrow(props) {
    const { style } = props;
    return (
        <MdArrowForwardIos
            style={{ ...style, display: "none" }}
        />
    );
}
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <MdArrowForwardIos
            className="md:text-5xl text-2xl absolute md:right-[20%] right-7 bottom-1/2 text-white cursor-pointer"
            style={{ ...style, display: "block", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
}

const ProjectsSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div>
            <Image src={sphereMd} alt="purple" width={50} height={50} className={`absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2`} />
            <Image src={sphereMd} alt="purple" width={100} height={100} className={`absolute left-1/4 bottom-32 -translate-x-1/2 -translate-y-1/2`} />
            <Image src={sphereLg} alt="purple" width={150} height={150} className={`absolute right-40 bottom-1/2`} />
            <Slider {...settings} className='text-white'>
                <div>
                    <div className='h-screen flex items-center justify-center p-10'>
                        <div className='flex items-center justify-center'>
                            <div className="text-center">
                                <h2 className="md:w-1/3 w-full mx-auto text-6xl font-bold my-5">Portfolio & Previous Projects</h2>
                                <p className="md:w-1/3 text-lg w-full mx-auto my-4">I have built various different projects to fit different aspects of the{` client's `}business. If you want to see more examples of my work than the ones showcased in this site, please <Link href="#" className="text-[#EA580C]">contact me</Link>!</p>
                                <div className="flex items-center justify-center text-[#9C27B0] gap-3 text-lg font-semibold">
                                    <span>See Projects</span>
                                    <MdKeyboardArrowRight size={24} color="#9C27B0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-screen flex items-center justify-center p-10'>
                        <div className='flex items-center justify-center'>
                            <div className="">
                                <div className='grid md:grid-cols-2 grid-cols-1 items-center'>
                                    <div className='lg:ml-60 md:ml-40 ml-0 md:w-1/2 w-full'>
                                        <h6 className="text-xl text-gray-500">E-COMMERCE APPLICATION</h6>
                                        <h2 className="text-6xl font-bold my-5">Crown Clothing</h2>
                                        <p className='text-lg'>Online store for selling apparel & foot wear.</p>
                                        <p className='my-5 text-lg'><span className='font-bold'>Built with:</span> React, Redux, Node, JavaScript, SASS, Custom Stripe Integration, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting).</p>
                                        <Link href="#" className='flex items-center gap-3 text-center text-lg'><span>View the code</span><MdKeyboardArrowRight size={24} color="#9C27B0" /></Link>
                                        <Link href="#" className='flex items-center gap-3 text-center text-lg'><span>Visit the app</span><MdKeyboardArrowRight size={24} color="#9C27B0" /></Link>
                                    </div>
                                    <div>
                                        <Image src={macbook} alt='macbook' width={500} height={500} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='h-screen flex items-center justify-center p-10'>
                        <div className='flex items-center justify-center'>
                            <div className="">
                                <div className='grid grid-cols-2 items-center'>
                                    <div className='lg:ml-60 md:ml-40 ml-20'>
                                        <Image src={mobile} alt='macbook' width={500} height={500} className='-rotate-[40deg]' />
                                    </div>
                                    <div className='w-1/2'>
                                        <h6 className="text-xl text-gray-500">FITNESS & WELLNESS COACHING PLATFORM</h6>
                                        <h2 className="text-6xl font-bold my-5">Fit & Healthy</h2>
                                        <p className='text-lg'>Server rendered, progressive web application for online fitness & health coaching. Providing workout programs, nutritions plans, workout logs, follow up with {`client's `}progress and more.</p>
                                        <p className='my-5 text-lg'><span className='font-bold'>Built with:</span> NuxtJs, VueJs, JavaScript, Firebase (NoSQL Database, Cloud Functions, Cloud Storage, Hosting), SASS.</p>
                                        <Link href="#" className='flex items-center gap-3 text-center text-lg'><span>View the code</span><MdKeyboardArrowRight size={24} color="#9C27B0" /></Link>
                                        <Link href="#" className='flex items-center gap-3 text-center text-lg'><span>Visit the app</span><MdKeyboardArrowRight size={24} color="#9C27B0" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
            <div>.</div>
        </div >
    );
};

export default ProjectsSlider;