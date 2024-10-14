import Image from 'next/image';
import help from '../../assets/helpor.png';
import election from '../../assets/electionor.png';
import digital from '../../assets/Digital.png';
import nhp from '../../assets/nhp.png';
import national from '../../assets/nationalor.png';

const Indialogos = () => {
  return (
    <div>
      <div className='bg-red-800 flex flex-row items-center justify-center p-4 md:p-8 gap-4'>
        <div className="p-2 w-1/2 sm:w-1/3 md:w-auto">
          <Image src={help} alt="Help Logo" width={100} height={100} className="object-contain mx-auto" />
        </div>
        <div className="p-2 w-1/2 sm:w-1/3 md:w-auto">
          <Image src={election} alt="Election Logo" width={100} height={100} className="object-contain mx-auto" />
        </div>
        <div className="p-2 w-1/2 sm:w-1/3 md:w-auto">
          <Image src={digital} alt="Digital Logo" width={100} height={100} className="object-contain mx-auto" />
        </div>
        <div className="p-2 w-1/2 sm:w-1/3 md:w-auto">
          <Image src={nhp} alt="NHP Logo" width={100} height={100} className="object-contain mx-auto" />
        </div>
        <div className="p-2 w-1/2 sm:w-1/3 md:w-auto">
          <Image src={national} alt="National Logo" width={100} height={100} className="object-contain mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Indialogos;
