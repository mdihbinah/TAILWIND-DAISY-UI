import { CircleCheck } from 'lucide-react';
import React from 'react';

const PricingCard = ({pricing}) => {
    console.log(pricing);
    return (
        <div className='border bg-green-500 rounded-2xl p-4 flex flex-col'>
           <div className="">
                <h1 className='text-xl'>{pricing.name}</h1>
                <h1 className='text-2xl'>{pricing.price}Tk</h1>
           </div>
           <div className="flex flex-col flex-1">
            <h2 className='text-3xl text-red-500 font-bold'>Features:</h2>
            <ol className='border bg-blue-600 opacity-80 grid grid-cols-1  rounded-2xl p-2 mt-2 flex-1'>
                {
                    pricing.features.map((ele, index) =>  <li key={index} className='flex mb-4'><CircleCheck ></CircleCheck> <span className='ml-3'>{ele}</span></li>)
                }
            </ol>
           </div>
           <button className="btn w-full mt-5">Subscribe</button>
        </div>
    );
};

export default PricingCard;