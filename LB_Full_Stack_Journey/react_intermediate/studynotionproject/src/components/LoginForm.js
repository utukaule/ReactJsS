import React, { useState } from "react";
import { AiOutlineEye, AioutlineInvisible } from "react-icons";
import { Link } from "react-router-dom";
const LoginForm = () => {
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
  return (
    <form>
      <label>
        <p>
          Email Address<sup> *</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onClick={changeHandler}
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
          onClick={changeHandler}
          placeholder="Enter password"
          name="password"
        />
        <span onClick={() => setShowPassword((prev) => !prev)}>
          {showPassword ? <AioutlineInvisible /> : <AiOutlineEye />}
        </span>
        <Link to="#">Forgot Password</Link>
      </label>

      <button>Sign in</button>
    </form>
  );
};

export default LoginForm;
