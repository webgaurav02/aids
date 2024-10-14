import hivtesting from '../../assets/hivtest.jpg';
import hand from '../../assets/hand.jpg';
import treat from '../../assets/treat.jpg';
import consultan from '../../assets/consultan.jpg';
import Image from 'next/image';

const HivTest = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div className="m-4 flex flex-col items-center bg-red-800 w-[350px] h-[350px]">
          <Image src={hivtesting} alt="HIV Testing" width={350} height={300} className="object-cover w-full h-[300px]" />
          <span className="p-3 text-center text-white font-bold text-xl">HIV TESTING</span>
        </div>
        <div className="m-4 flex flex-col items-center bg-red-800 w-[350px] h-[350px]">
          <Image src={consultan} alt="HIV Prevention" width={350} height={300} className="object-cover w-full h-[300px]" />
          <span className="p-3 text-center text-white font-bold text-xl">HIV PREVENTION</span>
        </div>
        <div className="m-4 flex flex-col items-center bg-red-800 w-[350px] h-[350px]">
          <Image src={treat} alt="HIV Treatment" width={350} height={300} className="object-cover w-full h-[300px]" />
          <span className="p-3 text-center text-white font-bold text-xl">HIV TREATMENT</span>
        </div>
        <div className="m-4 flex flex-col items-center bg-red-800 w-[350px] h-[350px]">
          <Image src={hand} alt="HIV Stigma & Discrimination" width={350} height={300} className="object-cover w-full h-[300px]" />
          <span className="p-3 text-center text-white font-bold text-xl">HIV STIGMA & DISCRIMINATION</span>
        </div>
      </div>
    </>
  );
};

export default HivTest;
