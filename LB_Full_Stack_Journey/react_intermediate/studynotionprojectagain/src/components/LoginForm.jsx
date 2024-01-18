import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = ({ setIsLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function changeHandler(event) {
    setFormData((preData) => ({
      ...preData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In ");
    navigate("/dashboard");
  }

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Email Address <sub className="text-pink-200">*</sub>
        </p>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email address"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b-white"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          Password <sub className="text-pink-200">*</sub>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          // type="password"
          name="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border border-b-white"
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill={"#AFB2BF"} />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill={"#AFB2BF"} />
          )}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-100 w-full text-end">
            Forgot Password
          </p>
        </Link>
      </label>
      <br />

      <button className="w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-800 px-[12px] py-[8px] ">Sign In</button>
    </form>
  );
};

export default LoginForm;
