import React from 'react'
import { Icon } from '@iconify/react';
import Stack from '@mui/material/Stack';

const Tabellist = ({ judultabel, tabel }) => {
    return (
        <div className="overflow-x-auto flex justify-center snap-mandatory snap-x">
            <table className="pb-[72px] mt-10 py-[26px] table-auto border-separate border-spacing-x-2 sm:border-spacing-x-12 border-x-[1px] border-b-[1px] border-slate-500 text-left rounded-b-lg">
                <thead>
                    <tr className="snap-mandatory snap-x ">
                        <th className='' >No.</th>
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
                                    <td className='' >{index + 1}</td>
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
    )
}

export default Tabellist