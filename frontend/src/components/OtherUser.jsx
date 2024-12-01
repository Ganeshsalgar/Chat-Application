import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice';

const OtherUser = ({user}) => {

    const dispatch = useDispatch();
    const {selectedUser} = useSelector(store => store.user)

    const selectedUserHandler = (user) => {
        console.log(user);
        dispatch(setSelectedUser(user))
        
    }
    
  return (
    <>
      <div onClick={() => selectedUserHandler(user)} className={`${selectedUser?._id === user?._id ? 'bg-zinc-700 ' : ""}flex gap-5 items-center hover:bg-zinc-700  p-2 cursor-pointer`}>
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
    </>
  )
}

export default OtherUser