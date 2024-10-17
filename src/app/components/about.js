import React from 'react';
import aboutrebon from '../../assets/aboutrebon.jpg';
import Image from 'next/image';
import aboutmain from '../../assets/about.png';

const About = () => {
    return (
        <>
            {/* Mobile View */}
            <div className="relative mt-16 md:hidden">
                <Image src={aboutmain} alt="" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
                    <h1 className="text-4xl font-bold">About us</h1>
                    <p className="text-center font-semibold text-[15px] mx-4 max-w-xl mt-4">
                        NACO envisions an India where every person living with HIV has access to quality care and is treated with dignity. Effective prevention, care and support for HIV/AIDS is possible in an environment where human rights are respected and where those infected or affected by HIV/AIDS live a life without stigma and discrimination.
                    </p>
                </div>
            </div>

            {/* Desktop View */}
            <div className="relative w-full h-[75vh] hidden md:flex  md:border">
                <Image
                    src={aboutrebon}
                    alt="About Background"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-50 z-10">
                    <h1 className="text-black text-5xl mb-4 font-bold">About Us</h1>
                    <span className="mx-[10%] lg:mx-[30%] text-xl lg:text-2xl text-black text-center bg-opacity-30 rounded">
                        NACO envisions an India where every person living with HIV has access to quality care and is treated with dignity. Effective prevention, care and support for HIV/AIDS is possible in an environment where human rights are respected and where those infected or affected by HIV/AIDS live a life without stigma and discrimination.
                    </span>
                </div>
            </div>
        </>
    );
};

export default About;
