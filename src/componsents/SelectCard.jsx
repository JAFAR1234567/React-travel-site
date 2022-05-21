import React from 'react'

export const SelectCard = ({bg,name}) => {
  return (
    <div className="relative">
                <img src={bg} alt=""  className="w-full h-full object-cover rounded"/>
                <div className="absolute bg-gray-900/30 top-0 left-0 h-full w-full">
                <p className="absolute uppercase bottom-4 left-4 font-bold text-white text-2xl">{name}</p>
                </div>
            </div>
  )
}
