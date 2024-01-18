import React, { useState } from "react";
import { AiOutlineEye,AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const SignupForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    // const [name, checked, value] = event.target;
    setFormData((previousData) => {
      return {
        ...previousData,
        [event.target.name]:  event.target.value,
      };
    });
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password != formData.confirmPassword){
      toast.error("password do not match")
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    const accountData = {
      ...formData
    }
    console.log("your data")
    console.log(accountData)
    navigate("/dashboard")
  }

  return (
    <div>
      {/* Student-Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form action="" onSubmit={submitHandler}>
        {/* First name and last name */}
        <div>
          <label htmlFor="">
            First Name <sup>*</sup>
            <input
              required
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              placeholder="Enter first Name"
            />
          </label>
          <label htmlFor="">
            Last Name <sup>*</sup>
            <input
              required
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              placeholder="Enter last Name"
            />
          </label>
        </div>
        {/* email */}
        <label htmlFor="">
          Email Address<sup>*</sup>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
          />
        </label>

        {/* password and confirm password */}

        <label htmlFor="">
          Create Password<sup>*</sup>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label htmlFor="">
          Confirm Password<sup>*</sup>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={changeHandler}
            placeholder="Confirm Password"
          />
          <span onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <button type="submit">Create Account</button>

      </form>
    </div>
  );
};

export default SignupForm;
