import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "Country",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    comments: false,
    candidates: false,
    offers: false,
    notify: "",
  });

  console.log(formData);

  function changeHandler(event) {
    setFormData((previousData) => {
      const { name, type, value, checked } = event.target;
      return {
        ...previousData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandle(event){
    event.preventDefault();
    console.log("Done with all data fetch ... hihi")
    console.log(formData)

  }
  return (
    <>
      <div className="text-center">
        <form action="" onSubmit={submitHandle}>
          {/* first name */}
          <div>
            <label htmlFor="fname">first name: </label>
            <input
              id="fname"
              className="border border-black"
              placeholder="First name"
              type="text"
              name="fname"
              value={formData.fname}
              onChange={changeHandler}
            />
          </div>

          {/* last name */}
          <div>
            <label htmlFor="lName">Last Name</label>
            <input
              type="text"
              className="border border-black"
              id="lName"
              placeholder="last name"
              name="lname"
              value={formData.lname}
              onChange={changeHandler}
            />
          </div>

          {/* email */}
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              className="border border-black"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </div>
          {/* country */}
          <div>
            <label htmlFor="country">Country: </label>
            <select
              name="country"
              id="country"
              className="border border-black"
              onChange={changeHandler}
              value={formData.country}
            >
              <option value="India">India</option>
              <option value="Viatnam">Viatnam</option>
              <option value="Japan">Japan</option>
              <option value="Afganistan">Afganistan</option>
              <option value="Slovakia">Slovakia</option>
            </select>
          </div>
          {/* address */}
          <div>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              id="address"
              className="border border-black"
              placeholder="Enter Address"
              name="address"
              value={formData.address}
              onChange={changeHandler}
            />
          </div>
          {/* city */}
          <div>
            <label htmlFor="city">City: </label>
            <input
              type="text"
              name="city"
              onChange={changeHandler}
              value={formData.city}
              placeholder="Enter City"
              className="border border-black"
            />
          </div>

          {/* state */}
          <div>
            <label htmlFor="city">State: </label>
            <input
              type="text"
              name="state"
              onChange={changeHandler}
              value={formData.state}
              placeholder="Enter state"
              className="border border-black"
            />
          </div>

          {/* zipCode */}
          <div>
            <label htmlFor="">ZipCode: </label>
            <input
              type="text"
              placeholder="Enter Zipcode"
              name="zipcode"
              className="border border-black"
              style={{
                width: "130px",
              }}
              value={formData.zipcode}
              onChange={changeHandler}
            />
          </div>

          {/* By Email checkbox */}
          <div>
            <input
              type="checkbox"
              id="comments"
              onChange={changeHandler}
              name="comments"
              checked={formData.comments}
            />
            <label htmlFor="comments">Comments</label>
            <p
              id="comments"
              style={{
                fontSize: "10px",
              }}
            >
              Get notification when someone posts a comments on a posting.
            </p>
          </div>

          {/* cadidate */}
          <div>
            <input
              type="checkbox"
              id="candidates"
              onChange={changeHandler}
              name="candidates"
              checked={formData.candidates}
            />
            <label htmlFor="candidates">candidates</label>
            <p
              id="candidates"
              style={{
                fontSize: "10px",
              }}
            >
              Get notification when candidate applies for a job
            </p>
          </div>

          {/* offers */}
          <div>
            <input
              type="checkbox"
              name="offers"
              checked={formData.offers}
              onChange={changeHandler}
            />
            <label htmlFor="offers">Offers</label>
          </div>

          {/* Puch Notification */}

          <p>these are delivered via SMS to your mobile phone.</p>
          <div>
            <input
              type="radio"
              name="notify"
              value="EveryThing"
              onChange={changeHandler}
            />
            <label htmlFor="one">EveryThing</label>
          </div>
          <div>
            <input
              type="radio"
              name="notify"
              value="Same as email"
              onChange={changeHandler}
            />
            <label htmlFor="two">Same as email</label>
          </div>
          <div>
            <input
              type="radio"
              name="notify"
              value="No Notification"
              onChange={changeHandler}
            />
            <label htmlFor="three">No push Notification</label>
          </div>

          <button type="submit" className="border border-black px-4">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
