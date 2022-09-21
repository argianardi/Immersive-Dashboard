import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Pagination from '@mui/material/Pagination';
import Search from '../components/search';
import Tabellist from '../components/tabellist';


const Userlist = () => {
    const [pageApi, setPageApi] = useState(1);
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

export default Userlist