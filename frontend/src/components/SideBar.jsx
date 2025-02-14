import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";

const SideBar = () => {

  const [search , setSearch] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {otherUsers} = useSelector(store => store.user)


    const submitHandler = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/api/v1/user/logout`);
            
            navigate("/login");
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
            
        }
    }

    const searchSubmitHandler = (e) => {
       e.preventDefault();

       const conversationUser = otherUsers?.find((user) => user.fullName.toLowerCase().includes(search.toLowerCase()));
       
       if(conversationUser) {
          dispatch(setOtherUsers([conversationUser]));
       }else{
         toast.error("User is Not Found!")
       }
    }

  return (
    <div className="border border-slate-500 p-4 flex flex-col">
      <form onSubmit={searchSubmitHandler} action="" className="flex items-center gap-2">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered rounded-md"
          placeholder="search.."
          type="text"
        />
        <button type="submit" className="btn bg-zinc-800 text-white">
          <FaSearch className=" outline-none" />
        </button>
      </form>
      <div>
        <div className="divider divider-info px-3"></div>
      </div>
      <OtherUsers />
        <div className="mt-2">
            <button onClick={submitHandler} className="btn btn-sm ">Logout</button>
        </div>
    </div>
  );
};

export default SideBar;
