import React from 'react'
import SendInput from './SendInput'
import Messages from './Messages'
import { useSelector } from 'react-redux'

const MessageContainer = () => {
  const {selectedUser} = useSelector(store => store.user);

  

  return (
    <div className='md:min-w-[550px] flex flex-col border border-gray-500  text-white'>
      <div className="flex gap-5 items-center bg-gray-800 hover:bg-zinc-600  p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src={selectedUser?.profilePhoto}
              alt="error"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{selectedUser?.fullName}</p>
          </div>
        </div>
      </div>
        <Messages />
        <SendInput />
    </div>
  )
}

export default MessageContainer