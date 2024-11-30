import React from 'react'
import { IoMdSend } from "react-icons/io";

const SendInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input type="text"
                placeholder='send a messgae ....'
                className='border text-sm p-3 border-zinc-500 rounded-lg block w-full bg-gray-600 text-white'
            />
            <button className='absolute flex inset-y-0 end-2 items-center'>
            <IoMdSend />
            </button>
        </div>
    </form>
  )
}

export default SendInput