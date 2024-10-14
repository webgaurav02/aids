import React from 'react';
import Image from 'next/image';
import activities1 from '../../assets/activities1.png';
import reel from '../../assets/reel.png';
import activities2 from '../../assets/actvities2.png';
import aboutsm from '../../assets/activitiesmain.png'

const Helpline = () => {
    return (
        <>
            <h1 className='text-center text-black text-3xl md:text-5xl font-bold m-5'>ACTIVITIES & INITIATIVE</h1>

            <div className='block md:hidden'> 
                <Image src={aboutsm} alt="" />
            </div>


            <div className='flex flex-col sm:flex-row w-full justify-between items-center hidden md:flex'>
                <div className='flex-1 p-2'>
                    <Image
                        src={activities1}
                        alt="Activity 1"
                        layout="responsive"
                        width={100}
                        height={100}
                        objectFit="contain"
                        className="w-full sm:w-1/3"
                    />
                </div>
                <div className='flex-1 p-2'>
                    <Image
                        src={reel}
                        alt="Reel"
                        layout="responsive"
                        width={100}
                        height={100}
                        objectFit="contain"
                        className="w-full sm:w-1/3"
                    />
                </div>
                <div className='flex-1 p-2'>
                    <Image
                        src={activities2}
                        alt="Activity 2"
                        layout="responsive"
                        width={100}
                        height={100}
                        objectFit="contain"
                        className="w-full sm:w-1/3"
                    />
                </div>
            </div>
        </>
    );
};

export default Helpline;
