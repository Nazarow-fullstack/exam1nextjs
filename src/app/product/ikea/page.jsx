import React from 'react'
import img1 from "../../assets/Rectangle 41.png"
import img2 from "../../assets/Rectangle 41 (1).png"
import Image from "next/image";
import img3 from "../../assets/Rectangle 41 (2).png"
import Link from 'next/link';
const ikea = () => {

    let data=[
        {
            id:1,
            name:"High-Back Bench",
            price:"$9,99",
            img: img1
        },
        {
            id:2,
            name:"Albany Table",
            price:"$10,33",
            img: img2
        },
        {
            id:3,
            name:"Wooden Table",
            price:"$10,33",
            img:img3
        },
        {
            id:4,
            name:"High-Back Bench",
            price:"$9,99",
            img:img1
        },
        {
            id:5,
            name:"Albany Table",
            price:"$10,33",
            img:img2
        },
        {
            id:6,
            name:"Wooden Table",
            price:"$10,33",
            img:img3
        },
        {
            id:7,
            name:"High-Back Bench",
            price:"$9,99",
            img:img1
        },
        {
            id:8,
            name:"Albany Table",
            price:"$10,33",
            img:img2
        },
        {
            id:9,
            name:"Wooden Table",
            price:"$10,33",
            img:img3
        },
    ]
    let cnt=0
  return (
    <div>
      <div className="flex flex-wrap  justify-evenly  gap-[30px]">
            {data.slice(0,2).map((e)=>{
                cnt++

               return <Link href={`/product/${e.id}`}>
               <div className='text-center' key={e.id}>
                <Image src={e.img} />
                <p className='text-[20px] mt-[20px] text-gray-500'>{e.name}</p>
                <p className='text-[18px] font-[700]'>{e.price}</p>
            </div>
               </Link>
            })}
        </div>
    </div>
  )
}

export default ikea
