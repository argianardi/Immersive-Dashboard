import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Pagination from '@mui/material/Pagination';
import Search from '../components/search';
import Tabellist from '../components/tabellist';

const Classlist = () => {
    const [pageApi, setPageApi] = useState(1);
    const [pagenow, setPagenow] = useState('Class List');
    const [judultabel, setJudultabel] = useState(['Name', "", "", "", ""]);
    const [tabel, setTabel] = useState([
        {
            no: 1,
            fullname: "Frontend Engineer Batch 8",
        },
        {
            no: 2,
            fullname: "Frontend Engineer Batch 11",
        },
        {
            no: 3,
            fullname: "Quality Assurance Batch 3",
        },
    ])

    const handlePage = (value) => {
        setPageApi(value);
        console.log(value);
    }

    return (
        <div className='sm:flex w-full h-screen'>
            <Sidebar pagenow={pagenow} />
            <div className='w-full sm:px-12'>
                <Navbar pagenow={pagenow} />
                <Search />
                <Tabellist judultabel={judultabel} tabel={tabel} />
                <div className='flex justify-center mt-[55px]'>
                    <Pagination count={10} onChange={(e, value) => handlePage(value)} showFirstButton showLastButton />
                </div>
            </div>
        </div >
    )
}

export default Classlist