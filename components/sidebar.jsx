import React from 'react'
import Image from "next/image";
import Alta from "../public/img/logo-ALTA.png";
import { Icon } from '@iconify/react';

const Sidebar = () => {
    return (
        <div className='w-full sm:w-52 bg-[#F0F4FD] px-2 sm:px-[35px] py-[37px] text-lg'>
            <div className='flex justify-center sm:flex-none w-full border-b-[1px] border-[#bababa] pb-[16px]'>
                <Image
                    unoptimized={true}
                    className="w-full"
                    src={Alta}
                    alt='Logo Alta'
                />
            </div>
            <div className='justify-center sm:justify-start sm:flex-none my-[19px] flex rounded-lg sm:px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white'>
                <Icon className='mt-1' icon="carbon:dashboard" />
                <h2 className='ml-[15px] mb-1'>Dashboard</h2>
            </div>
            <div className='justify-center sm:justify-start flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white'>
                <Icon className='mt-1' icon="ph:student" />
                <h2 className='ml-[15px] mb-1'>Mentee</h2>
            </div>
            <div className='justify-center sm:justify-start my-[19px] flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white'>
                <Icon className='mt-1' icon="clarity:user-line" />
                <h2 className='ml-[15px] mb-1'>User</h2>
            </div>
            <div className='justify-center sm:justify-start flex rounded-lg px-[5px] text-[#1B345F] hover:bg-[#1B345F] hover:text-white'>
                <Icon className='mt-1' icon="eos-icons:storage-class-outlined" />
                <h2 className='ml-[15px] mb-1'>Storage</h2>
            </div>
        </div>
    )
}

export default Sidebar