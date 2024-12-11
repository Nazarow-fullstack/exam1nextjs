import Link from 'next/link';
import React from 'react';
import img1 from "../../assets/Rectangle 41.png";
import img2 from "../../assets/Rectangle 41 (1).png";
import Image from "next/image";
import img3 from "../../assets/Rectangle 41 (2).png";

const productbyid = async ({ params }) => {
    let { productid } = await params;

    let data = [
        {
            id: 1,
            name: "High-Back Bench",
            price: "$9,99",
            img: img1
        },
        {
            id: 2,
            name: "Albany Table",
            price: "$79,99",
            img: img2
        },
        {
            id: 3,
            name: "Wooden Table",
            price: "$10,33",
            img: img3
        },
        {
            id: 4,
            name: "High-Back Bench",
            price: "$9,99",
            img: img1
        },
        {
            id: 5,
            name: "Albany Table",
            price: "$10,33",
            img: img2
        },
        {
            id: 6,
            name: "Wooden Table",
            price: "$10,33",
            img: img3
        },
        {
            id: 7,
            name: "High-Back Bench",
            price: "$9,99",
            img: img1
        },
        {
            id: 8,
            name: "Albany Table",
            price: "$10,33",
            img: img2
        },
        {
            id: 9,
            name: "Wooden Table",
            price: "$10,33",
            img: img3
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-5">
            {data.map((e) => {
                if (e.id == productid) {
                    return (
                        <div  key={e.id} className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl" >
                            <div className="relative w-full lg:w-1/2 h-64 lg:h-auto">
                                <Image src={e.img} alt={e.name} layout="fill" objectFit="cover" className="rounded-l-lg" />
                            </div>
                            <div className="p-6 lg:p-10 w-full lg:w-1/2">
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{e.name}</h1>
                                <p className="text-sm text-gray-500 mb-4">BY MARCOS</p>
                                <p className="text-2xl font-bold text-gray-800">{e.price}</p>
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit poke +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund.
                                </p>
                                <div className="flex items-center gap-4 mt-6">
                                    <button className="w-8 h-8 rounded-full border border-gray-300 bg-red-500"></button>
                                    <button className="w-8 h-8 rounded-full border border-gray-300 bg-black"></button>
                                </div>
                                <button className="mt-6 bg-orange-500 text-white font-medium text-sm px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition">ADD TO CART</button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default productbyid;