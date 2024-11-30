import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'


const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const navigate = useNavigate();
  const changeGender = (gender) => {
    setInput({ ...input, gender });
  };

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(input);
      
      const res = await axios.post(`http://localhost:8080/api/v1/user/register` , input , {
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      if(res.data.success){
        navigate("/login");
        toast.success(res?.data?.message);
      }
      console.log(res);
      

      // setInput({
      //   fullName: "",
      //   username: "",
      //   password: "",
      //   confirmPassword: "",
      //   gender: "",
      // });  
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
      
    }
    
  };
  return (
    <div className="min-w-96 mx-auto">
      <div
        className="w-full p-6 rounded-lg shadow-md bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100
"
      >
        <h1 className="text-3xl font-bold text-center">SignUp</h1>
        <form onSubmit={SubmitHandler}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full input input-bordered h-10"
              name="fullName"
              value={input.fullName}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your username"
              className="w-full input input-bordered h-10"
              name="username"
              value={input.username}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              className="w-full input input-bordered h-10"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your password"
              className="w-full input input-bordered h-10"
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center my-4">
            <div className="flex items-center">
              <p>Male : </p>
              <input
                type="checkbox"
                defaultChecked
                checked={input.gender === "male"}
                onChange={() => changeGender("male")}
                className="checkbox mx-2"
              />
            </div>
            <div className="flex items-center">
              <p>Female : </p>
              <input
                type="checkbox"
                defaultChecked
                checked={input.gender === "female"}
                onChange={() => changeGender("female")}
                className="checkbox mx-2"
              />
            </div>
          </div>
          <Link to={"/login"}>
            Already have an account?<span className="text-blue-600">Login</span>
          </Link>
          <div className="p-2">
            <button type="submit" className="btn btn-primary w-full">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
