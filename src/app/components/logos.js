import Meghalogo from '../../assets/meghalogo.png';
import Aidlog0 from '../../assets/aidlogo.png';
import Nacologo from '../../assets/naco.png';
import Image from 'next/image';

const Logos = () => {
    return (
        <>
            <div className='flex items-center md:mx-10 mx-5 justify-center flex-col mt-32'>
                <h1 className='font-bold md:text-xl text-md text-black text-center'>
                    GOVERNMENT OF MEGHALAYA<br/>MINISTRY OF HEALTH & FAMILY WELFARE
                </h1>
            </div>
            <div className='flex md:hidden mt-5 items-center flex-col text-center'>
                    <h1 className='text-8xl text-md font-black text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1>
                    <p className='md:text-xl text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p>
                </div>
            <div className='flex md:flex-row justify-around items-center gap-10 mt-8 mx-5'>
                <div className='hidden md:flex items-center flex-col text-center'>
                    <h1 className='text-8xl text-md font-black text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1>
                    <p className='md:text-xl text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p>
                </div>

                <div>
                    <Image src={Meghalogo} height="auto" width={100} alt="" />
                </div>
                <div>
                    <Image src={Aidlog0} height="auto" width={100} alt="" />
                </div>
                <div>
                    <Image src={Nacologo} height="auto" width={120} alt="" />
                </div>
                <div className='hidden md:flex items-center flex-col text-center'>
                    <h1 className='text-8xl text-md font-black text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1>
                    <p className='md:text-xl text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p>
                </div>
            </div>
            <div className='flex items-center mx-4 justify-center flex-col mt-8'>
                <h1 className='font-black text-3xl md:text-3xl text-black text-center'>
                    MEGHALAYA AIDS CONTROL SOCIETY
                </h1>
                <p className='md:text-xl text-lg font-light'>Pasteur Hills, Shillong - 793001</p>
            </div>
        </>
    );
}

export default Logos;
