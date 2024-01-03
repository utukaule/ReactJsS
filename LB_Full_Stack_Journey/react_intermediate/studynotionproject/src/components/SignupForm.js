import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    const [name, checked, value] = event.target;
    setFormData((previousData) => {
      return {
        ...previousData,
        [name]: type === "checked" ? checked : value,
      };
    });
  }

  return (
    <div>
      {/* Student-Instructor tab */}
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      
      <form action="">

        <div>
          <label htmlFor="">
            First Name <sup>*</sup>
            <input
              required
              type="text"
              name="firstName"
              value={FormData.firstName}
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
              value={FormData.lastName}
              onChange={changeHandler}
              placeholder="Enter last Name"
            />
          </label>
        </div>

      </form>

    </div>
  );
};

export default SignupForm;
