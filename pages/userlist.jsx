import Link from 'next/link'
import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Router, { useRouter } from "next/router";
import { Icon } from '@iconify/react';


const Userlist = () => {
    const [pagenow, setPagenow] = useState('User List');
    const [judultabel, setJudultabel] = useState(['Fullname', 'Email', 'Team', 'Role', 'Status']);
    const [tabel, setTabel] = useState([
        {
            no: 1,
            fullname: "Rachman Kamil",
            email: "kamil@alterra.co.id",
            team: "Academic",
            role: "Default",
            status: "Active"
        },
        {
            no: 2,
            fullname: "Dian",
            email: "dian@alterra.co.id",
            team: "People",
            role: "Admin",
            status: "Active"
        },
    ])
    return (
        <div className='sm:flex w-full h-screen'>
            <Sidebar />
            <div className='w-full sm:px-12'>
                <Navbar pagenow={pagenow} />
                <div className='flex justify-end mt-[17px]'>
                    <input type="text" placeholder='General Search' className='text-[15px] font-light py-1.5 px-2.5 rounded-y-md rounded-l-md border-l-[1px] border-y-[1px] border-[#1B345F] focus:bg-[#F7731C]/50 focus:text-[#1B345F]' />
                    <button className='text-[15px] py-1.5 text-[#1B345F] active:text-white active:bg-[#F7731C] border-l-[1px] border-y-[1px] border-[#1B345F] w-24 h-[#35] text-center'>Search</button>
                    <button className='text-[15px] py-1.5 text-white active:bg-[#F7731C] bg-[#1B345F] border-r-[1px] border-y-[1px] rounded-r-md border-[#1B345F] active:border-[#F7731C] w-24 h-[#35] text-center'>Add New</button>
                </div>
                <div className="snap-mandatory snap-x">
                    <table className="sp:text-[8px] xs:text-xs sm:text-lg snap-mandatory snap-x row-border pb-[72px] mt-10 py-[26px] table-auto border-separate border-spacing-x-2 sm:border-spacing-x-12 border-x-[1px] border-b-[1px] border-slate-500 text-center rounded-b-lg">
                        <thead>
                            <tr className="snap-mandatory snap-x ">
                                <th className='hidden sm:visible' >No.</th>
                                {judultabel.map((item, index) => {
                                    return (
                                        <th className='snap-center' key={index}>{item}</th>
                                    )
                                })}
                                <th colspan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tabel.map((item, index) => {
                                return (
                                    <>
                                        <tr className='border-[#bababa] border-b-[1px]' style={{ border: '1px solid #000' }} key={index}>
                                            <td className='invisible sm:visible' >{index + 1}</td>
                                            <td>{item.fullname}</td>
                                            <td>{item.email}</td>
                                            <td>{item.team}</td>
                                            <td>{item.role}</td>
                                            <td>{item.status}</td>
                                            <td><button className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="ant-design:edit-outlined" width="26" height="24" /></button ></td>
                                            <td><button className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="fluent:delete-12-regular" width="22" height="22" /></button></td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Userlist