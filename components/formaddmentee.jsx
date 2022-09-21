import React from 'react'

const Formaddmentee = ({ klik, change }) => {
    return (
        <form className='flex justify-between sm:w-[458px] h-[43px] mb-[13px] text-sm' onChange={change}>
            <label for="status" className='mt-2 text-[#322B2B] font-medium mr-6'>Status</label>
            <select className='rounded sm:w-[327px] h-full boder-[#1B345F] px-2 border-[1px] border-[#1B345F]' id="status" name="status">
                <option onClick={klik} value="orang tua">Orang Tua</option>
                <option onClick={klik} value="kakek/nenek">Kakek/Nenek</option>
                <option onClick={klik} value="saudara">Saudara</option>
            </select>
        </form>
    )
}

export default Formaddmentee