import React, { useReducer, useState } from 'react'
import logo from '../assets/img/logo.png'
import { IoMdHome } from "react-icons/io";
import { HiStar,HiPlusSmall,HiMiniMagnifyingGlass } from "react-icons/hi2";
import { PiTelevisionSimpleFill,PiFilmReelLight } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";
import HeaderList from './HeaderList';


export default function Header() {
    

    const [toggle,setToggle] = useState(false); useReducer
    const menuList=[
        {
            name:'HOME',
            icon:IoMdHome
        },
        {
            name:'SEARCH',
            icon:HiMiniMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlusSmall
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:PiFilmReelLight
        },
        {
            name:'SERIES',
            icon:PiTelevisionSimpleFill
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
        <div className='flex gap-8 items-center'>
            <img src={logo} className='w-[80px]  object-cover' />
            <div className='hidden md:flex gap-8'>
                {menuList.map((item) =>(
                    <HeaderList name={item.name} Icon={item.icon}/>
                ))}
            </div>
            <div className='flex md:hidden gap-5'>
            {menuList.map((item,index)=> index<3&&(
                <HeaderList name={''} Icon={item.icon}/>
            ))}
            <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                <HeaderList name={''} Icon={HiDotsVertical}/>
                {toggle? <div className='absolute mt-3 border-[1px] border-gray-700
                p-3 px-5 py-4'>
                    {menuList.map((item,index) => index>2&&(
                        <HeaderList name={item.name} Icon={item.icon}/>
                    ))}
                    
                </div>:null}
            </div>
            </div>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" className='w-[40px] rounded-full' />
    </div>
  )
}
