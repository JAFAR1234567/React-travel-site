import React from 'react'
import borabora from '../assets/borabora.jpg';
import borabora2 from '../assets/borabora2.jpg';
import keywest from '../assets/keywest.jpg';
import maldives from '../assets/maldives.jpg';
import maldives2 from '../assets/maldives2.jpg';
import maldives3 from '../assets/maldives3.jpg';
import { SelectCard } from './SelectCard';
export const Select = () => {
  return (
    <div className="max-w-[1240px] py-16 px-4 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SelectCard bg={borabora} name="borabora"/>
            <SelectCard bg={borabora2} name="China"/>
            <SelectCard bg={keywest} name="keywest"/>
            <SelectCard bg={maldives} name="maldives"/>
            <SelectCard bg={maldives2} name="London"/>
            <SelectCard bg={maldives3} name="brazil"/>
        </div>
    </div>
  )
}
