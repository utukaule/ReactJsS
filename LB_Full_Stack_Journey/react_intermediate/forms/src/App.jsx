import { useState } from "react";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // function changeHandler(e) {
  //   // console.log("first name");
  //   // console.log(e.target.value);
  //   setFirstName(e.target.value);
  // }
  // function lastHandler(e) {
  //   // console.log("last name");
  //   // console.log(e.target.value);
  //   setLastName(e.terget.value);
  // }
  // const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  // console.log(form.firstName)
  // console.log(form.lastName)
  // console.log(form.email)
  // function changeHandler(event) {
  //   setForm((previState) => {
  //     return {
  //       ...previState,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    text: "",
    isVisible: false,
    gender: "",
    favCar: "",
  });

  // console.log(form);

  // console.log(form.email);
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setForm((previValue) => {
      return {
        ...previValue,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("finally printing the entireform ka data....");
    console.log(form);
  }

  return (
    <div className="text-center">
      <form action="" onSubmit={submitHandler}>
        <div>
          First Name:
          <input
            type="text"
            placeholder="First name"
            className="border border-black mx-3"
            onChange={changeHandler}
            name="firstName"
            value={form.firstName}
          />
        </div>

        <div>
          Last Name:
          <input
            type="text"
            placeholder="Last name"
            className="border border-black mt-5 mx-3"
            onChange={changeHandler}
            name="lastName"
            value={form.lastName}
          />
        </div>

        <div>
          email:
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-black mt-5 mx-3"
            onChange={changeHandler}
            name="email"
            value={form.email}
          />
        </div>

        <div className="mt-4">
          <textarea
            placeholder="text here"
            onChange={changeHandler}
            className="border border-black"
            name="text"
            id=""
            value={form.text}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div>
          <input
            type="checkbox"
            onChange={changeHandler}
            name="isVisible"
            id="isVisible"
            checked={form.isVisible}
          />
          <label htmlFor="isVisible">Am i visible?</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={changeHandler}
            id="gender-male"
            checked={form.gender === "Male"}
          />
          <label htmlFor="gender-male">male</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={changeHandler}
            id="gender-female"
            checked={form.gender === "Female"}
          />
          <label htmlFor="gender-female">female</label>
        </div>

        <div>
          <label htmlFor="favCar">Tell me your favourite car</label>
          <select
            className="border border-black"
            name="favCar"
            onChange={changeHandler}
            value={form.favCar}
            id="favCar"
          >
            <option value="fortuner">fortuner</option>
            <option value="Thar">Thar</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Defender">Defender</option>
          </select>
        </div>

        <button type="submit" className="border border-black px-4">
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
