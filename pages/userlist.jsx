import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Pagination from '@mui/material/Pagination';
import Search from '../components/search';
import Tabellist from '../components/tabellist';
import Cookies from 'js-cookie';


const Userlist = () => {
    const [pageApi, setPageApi] = useState(1);
    const [pagenow, setPagenow] = useState('User List');
    const [judultabel, setJudultabel] = useState(['Name', 'Email', 'Team', 'Role', 'Status']);
    const [tabel, setTabel] = useState([])

    useEffect(() => {
        getUserList();
    }, []);

    const getUserList = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "email": "doni@mail.com",
            "password": "qwerty"
        });

        var config = {
            method: 'get',
            url: 'https://altagp3.online/users',
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token'),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data.data);
                setTabel(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const handlePage = (value) => {
        setPageApi(value);
        console.log(value);
    }

    const deleteUser = (id) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "email": "doni@mail.com",
            "password": "qwerty"
        });

        var config = {
            method: 'delete',
            url: 'https://altagp3.online/' + id,
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token'),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                getUserList();
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    return (
        <div className='sm:flex w-full h-screen'>
            <Sidebar pagenow={pagenow} />
            <div className='w-full sm:px-12'>
                <Navbar pagenow={pagenow} />
                <Search />
                <Tabellist deleteUser={deleteUser} judultabel={judultabel} tabel={tabel} />
                <div className='flex justify-center mt-[55px]'>
                    <Pagination count={10} onChange={(e, value) => handlePage(value)} showFirstButton showLastButton />
                </div>
            </div>
        </div >
    )
}

export default Userlist