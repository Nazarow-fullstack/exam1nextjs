import Image from 'next/image'
import Link from 'next/link';
import pro from '../app/assets/Rectangle 41.png';


export default function Home() {
  return (<div>
    <div className='b p-[100px] py-[250px]'>
        <div className='pt-[40px] text-[white]'>
          <p className='text-[70px]'>Rest, Relax, Unwind</p>
          <p className='text-[40px]'>Embrace your choices - we do</p>
          <button className='mt-[20px] border py-[10px] px-[20px]'>SHOW NOW</button>
        </div>
    </div>


      <p className='text-[50px] text-center'>/ Featured</p>
    <div className='flex justify-around mt-[30px] flex-wrap'>
      <div className='text-center'>
          <Image src={pro} />
          <p className='text-[20px] mt-[20px] text-gray-500'>High-Back Bench</p>
          <p className='text-[18px] font-[700]'>$9,99</p>
      </div>
      <div className='text-center'>
          <Image src={pro} />
          <p className='text-[20px] mt-[20px] text-gray-500'>High-Back Bench</p>
          <p className='text-[18px] font-[700]'>$9,99</p>
      </div>
      <div className='text-center'>
          <Image src={pro} />
          <p className='text-[20px] mt-[20px] text-gray-500'>High-Back Bench</p>
          <p className='text-[18px] font-[700]'>$9,99</p>
      </div>
    </div>
    <button className='px-[20px] rounded-md w-[200px] ml-[70px] py-[10px] bg-[#BA5D2C] m-auto text-white mt-[20px]'>ALL PRODUCTS</button>
  </div>
    
  );
}
