import React from 'react'

const Search = () => {
    return (
        <div className='flex justify-end mt-[17px]'>
            <input type="text" placeholder='General Search' className='text-[15px] font-light py-1.5 px-2.5 rounded-y-md rounded-l-md border-l-[1px] border-y-[1px] border-[#1B345F] focus:bg-[#F7731C]/50 focus:text-[#1B345F]' />
            <button className='text-[15px] py-1.5 text-[#1B345F] active:text-white active:bg-[#F7731C] border-l-[1px] border-y-[1px] border-[#1B345F] w-24 h-[#35] text-center'>Search</button>
            <button className='text-[15px] py-1.5 text-white active:bg-[#F7731C] bg-[#1B345F] border-r-[1px] border-y-[1px] rounded-r-md border-[#1B345F] active:border-[#F7731C] w-24 h-[#35] text-center'>Add New</button>
        </div>
    )
}

export default Search