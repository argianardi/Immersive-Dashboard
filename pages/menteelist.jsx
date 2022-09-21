import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import Pagination from '@mui/material/Pagination';
import Search from '../components/search';
import { Icon } from '@iconify/react';


const Menteelist = () => {
    const [pageApi, setPageApi] = useState(1);
    const [pagenow, setPagenow] = useState('Mentee List');
    const [datas, setDatas] = useState([
        {
            no: 1,
            name: 'Rachman Kamil',
            class: 'BE 11',
            status: 'Active',
            category: 'IT',
            gender: 'Male'
        },
        {
            no: 1,
            name: 'Rachman Kamil',
            class: 'BE 11',
            status: 'Active',
            category: 'IT',
            gender: 'Male'
        },
    ])
    const handlePage = (value) => {
        setPageApi(value);
        console.log(value);
    }
    return (
        <div className='sm:flex w-full h-full'>
            <Sidebar pagenow={pagenow} />
            <div className='w-full sm:px-12'>
                <Navbar pagenow={pagenow} />
                <Search />
                <div className='flex justify-center sm:justify-end mt-12'>
                    <div className='flex flex-col sm:flex-row'>
                        <button className='w-32 h-9 text-sm text-white rounded-lg bg-[#1B345F]'>Export</button>
                        <form className='hilang:my-2 mx-0.5'>
                            <select className='w-32 h-9 rounded-lg border-[1px] border-[#1B345F]' id="status" name="status">
                                <option value="All Class">All Class</option>
                                <option value="QE 7">QE 7</option>
                                <option value="FE 8">FE 8</option>
                                <option value="BE 11">BE 11</option>
                            </select>
                        </form>
                        <form>
                            <select className='w-32 h-9 rounded-lg border-[1px] border-[#1B345F]' id="status" name="status">
                                <option value="All Class">All Status</option>
                                <option value="QE 7">Placement</option>
                                <option value="FE 8">Active</option>
                                <option value="BE 11">Eleminate</option>
                            </select>
                        </form>
                        <button className='hilang:my-2 ml-0.5 w-32 h-9 text-sm text-white rounded-lg bg-[#1B345F]'>Category</button>
                    </div>
                </div>
                {/* Tabel */}
                <div className='overflow-x-auto'>
                    <table className="pb-[72px] mt-10 py-[26px] table-auto border-separate border-spacing-x-6 sm:border-spacing-x-12 border-x-[1px] border-b-[1px] border-slate-500 text-left rounded-b-lg">
                        <thead>
                            <tr className="text-center snap-mandatory snap-x ">
                                <th className='' >No.</th>
                                <th className='' >Name</th>
                                <th className='' >Class</th>
                                <th className='' >Status</th>
                                <th className='' >Category</th>
                                <th className='' >Gender</th>
                                <th className='' >Detail</th>
                                <th colspan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datas.map((item, index) => {
                                return (
                                    <tr key={index} className='border-[#bababa] border-b-[1px]'>
                                        <td className='' >1</td>
                                        <td>Rachman Kamil</td>
                                        <td>BE 11</td>
                                        <td>Active</td>
                                        <td>IT</td>
                                        <td>Male</td>
                                        <td><button className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="ant-design:edit-outlined" width="26" height="24" /></button ></td>
                                        <td><button className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="ant-design:edit-outlined" width="26" height="24" /></button ></td>
                                        <td><button className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="fluent:delete-12-regular" width="22" height="22" /></button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-center mt-[55px]'>
                    <Pagination count={10} onChange={(e, value) => handlePage(value)} showFirstButton showLastButton />
                </div>
            </div>
        </div >
    )
}

export default Menteelist