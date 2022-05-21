import React from 'react'
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
export const Destination = () => {
  return (
    <div className="mx-w-[1240px] mx-auto text-center py-16 px-4">
        <div className="">
            <h1>All-Inclusive Resorts</h1>
            <p  className="py-4">On the Caribbean's Best Beaches</p>
        </div>
        <div className=" grid gap-2 md:gap-4 md:grid-cols-5 py-4 ">
            <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 rounded-sm" src={borabora} alt="" />
            <img className="w-full h-full object-cover rounded-sm" src={borabora2} alt="" />
            <img className="w-full h-full object-cover rounded-sm" src={keywest} alt="" />
            <img className="w-full h-full object-cover rounded-sm" src={maldives} alt="" />
            <img className="w-full h-full object-cover rounded-sm" src={maldives2} alt="" />
        </div>
    </div>
  )
}
