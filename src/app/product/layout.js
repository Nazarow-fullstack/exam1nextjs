"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const layout = ({children}) => {
let pathname=usePathname()

return <div>


{pathname == "/product" || pathname == "/product/ikea" || pathname == "/product/maros" || pathname == "/product/liddy" || pathname == "/product/caressa" ? (<div>
    <div>
      <div className="w-full px-[50px] py-[150px] bg-blue-200">
      <p className="text-[40px]">Home / Products</p>
    </div>
     

      <div className="flex mt-[30px]">
      <div className="ml-[30px]">
        <p href='' className="text-[40px] font-[700]">Company</p>
        <Link href='/product/all' className="text-[18px] mt-[30px] text-blue-300 block">All</Link>
        <Link href='/product/liddy' className="text-[18px] mt-[10px] text-blue-300 block">Liddy</Link>
        <Link href='/product/ikea' className="text-[18px] mt-[10px] text-blue-300 block">Ikea</Link>
        <Link href='/product/maros' className="text-[18px] mt-[10px] text-blue-300 block">Marcos</Link>
        <Link href='/product/caressa' className="text-[18px] mt-[10px] text-blue-300 block">Caressa</Link>
        <p className="text-[18px] mt-[10px] text-blue-300 ">Price</p>
        <input className="mt-[30px]" type="range" name="" id="" />
        <p className="text-[18px] mt-[10px] text-gray-400 "   >Value : $80</p>
      </div>
      <div className='ml-[10px]'>
          {children}
      </div>
      
    </div>
  </div>
  </div>):(<div>
    {children}
  </div>)}



</div>
}


export default layout
