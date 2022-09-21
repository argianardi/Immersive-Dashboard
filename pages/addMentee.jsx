import React, { useState } from 'react'
import Doubleradio from '../components/doubleradio';
import Formaddmentee from '../components/formaddmentee';
import Inputaddmentee from '../components/inputaddmentee';
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'

const AddMentee = () => {
    const [gender, setGender] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [pagenow, setPagenow] = useState('Add Mentee');
    const handleGender = (event) => {
        setGender(event.target.value);
        console.log(event.target.value);
    }
    const handleType = (event) => {
        setType(event.target.value);
        console.log(event.target.value);
    }
    const handleStatus = (event) => {
        setStatus(event.target.value);
        console.log(event.target.value);
    };

    const handleAddMentee = () => {
        console.log('berhasil menambahkan')
    };
    return (
        <div className='w-full sm:flex'>
            <Sidebar pagenow={pagenow} />
            <div className='sm:px-12'>
                <Navbar pagenow={pagenow} />
                <div className='sm:flex justify-between'>
                    <div>
                        <h2 className='text-lg font-medium mb-3'>Main Data</h2>
                        <Inputaddmentee type='text' label='Name Mentee' placeholder='Name Mentee' />
                        <Inputaddmentee type='text' placeholder='Address' label='Address' />
                        <Inputaddmentee type='text' placeholder='Home Address' label='Home Address' />
                        <Inputaddmentee type='email' placeholder='Email' label='Email' />
                        <Doubleradio label='Gender' option1='Male' option2='Female' choose={(value) => handleGender(value)} />
                        <Inputaddmentee type='text' placeholder='Telegram' label='Telegram' />
                        <Inputaddmentee type='email' label='Email Secondary' placeholder='Email Secondary' />
                    </div>
                    <div>
                        <h2 className='text-lg font-medium mb-3'>Emergency Data</h2>
                        <Inputaddmentee type='text' label='Name' placeholder='Name of Spouse/parent/sibling' />
                        <Inputaddmentee type='number' label='Phone Number' placeholder='Phone Number of Spouse/parent/sibling' />
                        <Formaddmentee change={handleStatus} klik={() => handleStatus(value)} />
                        <h2 className='text-lg font-medium mb-3'>Education Data</h2>
                        <Doubleradio label='Type' option1='IT' option2='non-IT' choose={(value) => handleGender(value)} />
                        <Inputaddmentee type='text' label='Major' placeholder='Major' />
                        <Inputaddmentee type='text' label='Graduate' placeholder='Graduate' />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='rounded-lg bg-[#F7731C] text-lg py-2 w-28 mr-5 text-white'>Cancel</button>
                    <button onClick={() => handleAddMentee()} className='rounded-lg bg-[#1B345F] text-lg py-2 w-28 text-white'>Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddMentee