import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword1, setConfirmpassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function registerHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("passwords do not match.");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Signed In Successfully");
    navigate('/dashboard');
    const accountData = {
      ...formData
    }
    console.log(accountData)
  }
  return (
    <div>
      {/* student instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={registerHandler}>
        {/* first name and last name */}

        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              First Name <sub className="text-pink-200">*</sub>
            </p>
            <input
              type="text"
              placeholder="First Name"
              name="firstname"
              onChange={changeHandler}
              value={formData.firstname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-white"
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Last Name <sub>*</sub>
            </p>
            <input
              type="text"
              placeholder="Last Name"
              name="lastname"
              onChange={changeHandler}
              value={formData.lastname}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-white"
            />
          </label>
        </div>

        {/* email */}

        <div className="mt-6">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Email <sub>*</sub>
            </p>
            <input
              required
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-white"
            />
          </label>
        </div>

        {/* password */}

        <div className="flex gap-x-4 mt-6">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Password <sub>*</sub>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              placeholder="Set new password"
              name="password"
              onChange={changeHandler}
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-white"
            />
            <span   className="absolute right-3 top-[38px] cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEye fontSize={24} fill={"#AFB2BF"} /> :  <AiOutlineEyeInvisible fontSize={24} fill={"#AFB2BF"} />}
            </span>
          </label>


          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              Confirm Password <sub>*</sub>
            </p >
            <input
              required
              type={confirmPassword1 ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={changeHandler}
              value={formData.confirmPassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-white"
            />
            <span   className="absolute right-3 top-[40px] cursor-pointer" onClick={()=>setConfirmpassword((prev) =>!prev)}>
              {confirmPassword1 ? <AiOutlineEye fontSize={24} fill={"#AFB2BF"} /> :  <AiOutlineEyeInvisible fontSize={24} fill={"#AFB2BF"} />}
            </span>
          </label>
        </div>

        <button className="mt-8 w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] ">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
