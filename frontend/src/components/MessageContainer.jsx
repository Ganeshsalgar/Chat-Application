import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[550px] flex flex-col border border-gray-500  text-white'>
      <div className="flex gap-5 items-center bg-gray-800 hover:bg-zinc-600  p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src="https://www.shutterstock.com/image-vector/simple-cartoon-avatar-vector-flat-260nw-1988123576.jpg"
              alt="error"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>Ganesh MernStack</p>
          </div>
        </div>
      </div>
        <Messages />
        <SendInput />
    </div>
  )
}

export default MessageContainer