import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Pagination from '@mui/material/Pagination';
import Search from '../components/search';
import Tabellist from '../components/tabellist';
import Cookies from 'js-cookie';
import { Icon } from '@iconify/react';


const Userlist = () => {
    const [pageApi, setPageApi] = useState(1);
    const [pagenow, setPagenow] = useState('User List');
    const [judultabel, setJudultabel] = useState(['Name', 'Email', 'Team', 'Role', 'Status']);
    const [tabel, setTabel] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [division, setDivision] = useState();
    const [status, setStatus] = useState('');
    const [nameEdit, setNameEdit] = useState('');
    const [emailEdit, setEmailEdit] = useState('');
    const [passwordEdit, setPasswordEdit] = useState('');
    const [roleEdit, setRoleEdit] = useState('');
    const [divisionEdit, setDivisionEdit] = useState();
    const [statusEdit, setStatusEdit] = useState('');
    const [id, setId] = useState('');

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

    const deleteUser = (item) => {
        var axios = require('axios');

        var config = {
            method: 'delete',
            url: `https://altagp3.online/users/${item.id}`,
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token')
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                getUserList();
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const handleEditUser = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": nameEdit,
            "email": emailEdit,
            "password": passwordEdit,
            "role": roleEdit,
            "division": parseInt(divisionEdit),
            "status": statusEdit
        });

        var config = {
            method: 'put',
            url: 'https://altagp3.online/users/' + id,
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token'),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
                console.log(id)
            });

    }

    const handleName = (event) => {
        setName(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleRole = (event) => {
        setRole(event.target.value);
    }
    const handleDivision = (event) => {
        setDivision(event.target.value);
    }
    const handleStatus = (event) => {
        setStatus(event.target.value);
    }
    const handleNameEdit = (event) => {
        setNameEdit(event.target.value);
    }
    const handleEmailEdit = (event) => {
        setEmailEdit(event.target.value);
    }
    const handlePasswordEdit = (event) => {
        setPasswordEdit(event.target.value);
    }
    const handleRoleEdit = (event) => {
        setRoleEdit(event.target.value);
    }
    const handleDivisionEdit = (event) => {
        setDivisionEdit(event.target.value);
    }
    const handleStatusEdit = (event) => {
        setStatusEdit(event.target.value);
    }
    const handleAddUser = () => {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": name,
            "email": email,
            "password": password,
            "role": role,
            "division_id": parseInt(division),
            "status": status
        });

        var config = {
            method: 'post',
            url: 'https://altagp3.online/users',
            headers: {
                'Authorization': 'Bearer ' + Cookies.get('token'),
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setShowModal(false);
                getUserList();
            })
            .catch(function (error) {
                console.log(error);
            });

    };

    const [sebagai, setSebagai] = useState(Cookies.get('role'))
    return (
        <div className='sm:flex w-full h-screen'>
            <Sidebar pagenow={pagenow} />
            <div className='w-full sm:px-12'>
                {showEdit ? (
                    <div className="overflow-y-scroll h-auto z-50 w-full sm:w-[507px] sm:h-[578px] rounded-lg bg-white border-[1px] py-4 px-2 sm:px-8">
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Name</h2>
                        <input onChange={handleNameEdit} className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Name" />
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Email</h2>
                        <input onChange={handleEmailEdit} className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Email" />
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Password</h2>
                        <input onChange={handlePasswordEdit} type='password' className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Password" />
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Role</h2>
                        <select onChange={handleRoleEdit} className="w-full mb-6 focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
                            <option value="user">User</option>
                            <option value="superuser">Superuser</option>
                        </select>
                        <div className="flex">
                            <div className="w-1/2 pr-2">
                                <h2 className="mb-2.5  font-semibold text-[#1B345F] text-base">Division</h2>
                                <select onChange={handleDivisionEdit} className="mb-6 w-full focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
                                    <option value="1">Manager</option>
                                    <option value="2">Mentor</option>
                                    <option value="3">Placement</option>
                                    <option value="4">Skill</option>
                                </select>
                            </div>
                            <div className="w-1/2 pl-2">
                                <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Status</h2>
                                <select onChange={handleStatusEdit} className="w-full mb-6 focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-[#F7731C] active:border-[#F7731C] active:bg-[#1B345F] font-semibold text-white w-[145px] sm:w-[215px] rounded-full text-sm border-[1px] py-2" onClick={() => setShowEdit(false)}>Cancel</button>
                            <button className="bg-[#1B345F] active:border-[#1B345F] active:bg-[#F7731C] font-semibold text-white w-[145px] sm:w-[215px] rounded-full text-sm border-[1px] py-2" onClick={() => handleEditUser()}>Add New</button>
                        </div>
                    </div>) : null}


                {showModal ? (
                    <div className="overflow-y-scroll h-auto z-50 w-full sm:w-[507px] sm:h-[578px] rounded-lg bg-white border-[1px] py-4 px-2 sm:px-8">
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Name</h2>
                        <input onChange={handleName} className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Name" />
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Email</h2>
                        <input onChange={handleEmail} className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Email" />
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Password</h2>
                        <input onChange={handlePassword} type='password' className="mb-6 focus:bg-[#F7731C] font-semibold w-full text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" placeholder="Password" />
                        <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Role</h2>
                        <select onChange={handleRole} className="w-full mb-6 focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
                            <option value="user">User</option>
                            <option value="superuser">Superuser</option>
                        </select>
                        <div className="flex">
                            <div className="w-1/2 pr-2">
                                <h2 className="mb-2.5  font-semibold text-[#1B345F] text-base">Division</h2>
                                <select onChange={handleDivision} className="mb-6 w-full focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
                                    <option value="1">Manager</option>
                                    <option value="2">Mentor</option>
                                    <option value="3">Placement</option>
                                    <option value="4">Skill</option>
                                </select>
                            </div>
                            <div className="w-1/2 pl-2">
                                <h2 className="mb-2.5 font-semibold text-[#1B345F] text-base">Status</h2>
                                <select onChange={handleStatus} className="w-full mb-6 focus:bg-[#F7731C] font-semibold text-[#1B345F] rounded-full text-sm border-[1px] border-[#1B345F] p-2" id="cars">
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <button className="bg-[#F7731C] active:border-[#F7731C] active:bg-[#1B345F] font-semibold text-white w-[145px] sm:w-[215px] rounded-full text-sm border-[1px] py-2" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="bg-[#1B345F] active:border-[#1B345F] active:bg-[#F7731C] font-semibold text-white w-[145px] sm:w-[215px] rounded-full text-sm border-[1px] py-2" onClick={() => handleAddUser()}>Add New</button>
                        </div>
                    </div>) : null}
                <Navbar pagenow={pagenow} />
                <div className='flex justify-end mt-[17px]'>
                    <input type="text" placeholder='General Search' className='text-[15px] font-light py-1.5 px-2.5 rounded-y-md rounded-l-md border-l-[1px] border-y-[1px] border-[#1B345F] focus:bg-[#F7731C]/50 focus:text-[#1B345F]' />
                    <button className='text-[15px] py-1.5 text-[#1B345F] active:text-white active:bg-[#F7731C] border-l-[1px] border-y-[1px] border-[#1B345F] w-24 h-[#35] text-center'>Search</button>
                    {sebagai == 'admin' ? (<button onClick={() => setShowModal(true)} className='text-[15px] py-1.5 text-white active:bg-[#F7731C] bg-[#1B345F] border-r-[1px] border-y-[1px] rounded-r-md border-[#1B345F] active:border-[#F7731C] w-24 h-[#35] text-center'>Add New</button>) : <></>}

                </div>
                {/* <Search showingmodal={() => setShowModal(true)} /> */}
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
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.division}</td>
                                            <td>{item.role == 'admin' ? 'superuser' : item.role}</td>
                                            <td>{item.status}</td>
                                            <td><button onClick={() => {
                                                setShowEdit(true), setId(item.id);
                                            }} className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="ant-design:edit-outlined" width="26" height="24" /></button ></td>
                                            <td><button onClick={() => deleteUser(item)} className='active:bg-[#1B345F] text-[#21a41f] active:text-white rounded'><Icon icon="fluent:delete-12-regular" width="22" height="22" /></button></td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {/* <Tabellist deleteUser={(value) => deleteUser(value)} judultabel={judultabel} tabel={tabel} /> */}
                <div className='flex justify-center mt-[55px]'>
                    <Pagination count={10} onChange={(e, value) => handlePage(value)} showFirstButton showLastButton />
                </div>
            </div>
        </div >
    )
}

export default Userlist