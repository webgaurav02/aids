import hivtesting from '../../assets/hivtest.jpg';
import hand from '../../assets/hand.jpg';
import treat from '../../assets/treat.jpg';
import consultan from '../../assets/consultan.jpg';
import Image from 'next/image';

const HivTest = () => {
  return (
    <div className='md:mx-32 mx-5 my-10'>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:gap-10 gap-5 justify-items-center">
        <div className="flex flex-col items-center bg-white w-full max-w-xs">
          <Image src={hivtesting} alt="HIV Testing" className="object-contain w-full h-[80%]" />
          <span className="p-3 text-center my-auto bg-red-800 w-full h-[20%] flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">HIV TESTING</span>
        </div>
        <div className="flex flex-col items-center bg-white w-full max-w-xs">
          <Image src={consultan} alt="HIV Prevention" className="object-cover w-full h-[80%]" />
          <span className="p-3 text-center my-auto bg-red-800 w-full h-[20%] flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">HIV PREVENTION</span>
        </div>
        <div className="flex flex-col items-center bg-white0 w-full max-w-xs">
          <Image src={treat} alt="HIV Treatment" className="object-cover w-full h-[80%]" />
          <span className="p-3 text-center my-auto bg-red-800 w-full h-[20%] flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">HIV TREATMENT</span>
        </div>
        <div className="flex flex-col items-center bg-white w-full max-w-xs">
          <Image src={hand} alt="HIV Stigma & Discrimination" className="object-cover w-full h-[80%]" />
          <span className="p-3 text-center my-auto bg-red-800 w-full h-[20%] flex flex-col justify-center text-white font-bold md:text-xl text-md leading-5 md:rounded-b-2xl rounded-b-lg">HIV STIGMA & DISCRIMINATION</span>
        </div>
      </div>
    </div>
  );
};

export default HivTest;
