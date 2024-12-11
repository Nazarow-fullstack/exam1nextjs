import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import shop from '../../app/assets/Frame 279.png'

const Header = () => {
  return (<header className='flex justify-around items-center flex-wrap bg-[gray]'>
          <div>
          <Link className='text-[20px]' href='/'>Home</Link>
          <Link className='text-[20px] ml-[20px]' href='/product'>Products</Link>
          <Link className='text-[20px] ml-[20px]' href='/about'>About</Link>
          </div>
         
            
     
          <p className='text-[40px]'>comfy</p>
         
          <Image src={shop} alt=''/>
          
        </header>
  )
}

export default Header
