import React from 'react'

const Doubleradio = ({ label, option1, option2, choose }) => {
    return (
        <form className='mb-[15px] font-medium w-full sm:w-[458px] text-[#322B2B]'>
            <label className='mr-10 sm:mr-20'>{label}</label>
            <label for={option1}>{option1}</label>
            <input className='scale-[2] ml-3.5 mr-6 sm:mr-16' onClick={choose} type="radio" id={option1} name={label} value={option1} />
            <label for={option2}>{option2}</label>
            <input className='ml-3.5 scale-[2]' onClick={choose} type="radio" id={option2} name={label} value={option2} />
        </form>
    )
}

export default Doubleradio