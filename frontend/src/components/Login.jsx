import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
    const [input ,setInput] = useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setInput({ ...input , [e.target.name] : e.target.value})
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        try {
          console.log(input);
          
          const res = await axios.post(`http://localhost:8080/api/v1/user/login` , input , {
            headers:{
              "Content-Type":'application/json'
            },
            withCredentials:true
          
          })
          console.log(res)
          if(res.data.success){
            navigate("/")
            dispatch(setAuthUser(res.data));
            toast.success(res?.data?.message)
          }
        } catch (error) {
          console.log(error);
          toast.error(error?.response?.data?.message)
          
        }
        
    }
  return (
    <div className="min-w-96 mx-auto">
      <div
        className='w-full p-6 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
"'
      >
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your username"
              value={input.username}
              name="username"
              onChange={changeEventHandler}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="py-4 text-center">
            <p>Don't have Account Please. <Link to={"/register"} className="text-blue-600">SignUp</Link></p>
          </div>
          <button  type="submit"  className="w-full btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
