import React from 'react'

const OtherUser = (props) => {
    const user = props.user
  return (
    <div>
      <div className="flex gap-5 items-center hover:bg-zinc-700  p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              src={user?.profilePhoto}
              alt="error"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2">
            <p>{user?.fullName}</p>
          </div>
        </div>
      </div>
      <div className="divider divider-neutral my-0 py-0"></div>
    </div>
  )
}

export default OtherUser