import Meghalogo from '../../assets/meghalogo.png';
import Aidlog0 from '../../assets/aidlogo.png';
import Nacologo from '../../assets/naco.png';
import Image from 'next/image';

const Logos = () => {
    return (
        <>
            <div className='flex items-center mx-[60px] justify-center flex-col mt-6'>
                <h1 className='font-bold text-lg text-[20px] sm:text-2xl text-black text-center'>
                    GOVERNMENT OF MEGHALAYA MINISTRY OF HEALTH & FAMILY WELFARE
                </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-around items-center gap-10 mt-8'>
                <div className='flex items-center flex-col text-center'>
                    <h1 className='text-[70px]  sm:text-[130px] font-bold text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1>
                    <p className='text-xl sm:text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p>
                </div>

                <div>
                    <Image src={Meghalogo} height={150} width="auto" alt="" />
                </div>
                <div>
                    <Image src={Aidlog0} height={150} width="auto" alt="" />
                </div>
                <div>
                    <Image src={Nacologo} height={150} width="auto" alt="" />
                </div>
                <div className='flex items-center flex-col text-center'>
                    <h1 className='text-[70px] sm:text-[130px] font-bold text-red-800' style={{ margin: 0, lineHeight: 1 }}>
                        1097
                    </h1>
                    <p className='text-xl sm:text-[25px]' style={{ margin: 0, lineHeight: 1 }}>
                        Call for Help
                    </p>
                </div>
            </div>
            <div className='flex items-center mx-4 justify-center flex-col mt-8'>
                <h1 className='font-bold text-3xl sm:text-5xl text-black text-center'>
                    MEGHALAYA AIDS CONTROL SOCIETY
                </h1>
                <p className='text-xl sm:text-xl'>Pasteur Hills, Shillong - 793001</p>
            </div>
        </>
    );
}

export default Logos;
