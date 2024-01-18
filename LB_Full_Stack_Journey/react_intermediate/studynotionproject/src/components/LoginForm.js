import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const nevigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    // const [name, checked, value] = event.target; step 1 if there is multiple things like checkbox or radio below is step 2
    setFormData((previousData) => {
      return {
        ...previousData,
        // [name]: type === "checked" ? checked : value, this is step 2
        [event.target.name]: event.target.value,
      };
    });
  }
  function submithandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("logged In");
    nevigate("/dashboard");
  }
  return (
    <form onSubmit={submithandler}>
      <label>
        <p>
          Email Address<sup> *</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
        />
      </label>
      <label>
        <p>
          Password<sup> *</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">Forgot Password</Link>
      </label>
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default LoginForm;
