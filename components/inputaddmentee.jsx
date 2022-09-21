import React from 'react'

const Inputaddmentee = ({ label, type, placeholder }) => {
    return (
        <div className='mb-[13px] text-sm w-full sm:w-[458px] h-[43px] flex justify-between'>
            <label className='mt-2 text-[#322B2B] font-medium mr-6' for="namementee">{label}</label>
            <input className='w-auto sm:w-[327px] h-full rounded-lg border-[1px] boder-[#1B345F] px-2' type={type} name="namementee" placeholder={placeholder} />
        </div>
    )
}

export default Inputaddmentee