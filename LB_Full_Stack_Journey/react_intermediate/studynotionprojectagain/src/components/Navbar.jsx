import toast from "react-hot-toast";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
const Navbar = (props) => {
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;
  // const nevigate = useNavigate();

  return (
    <div className="flex justify-between item-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link className="">
        <img src={Logo} alt="" />
      </Link>
      <nav className="flex gap-x-6 text-white">
        <div>
          <ul className="flex gap-2 ">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="flex gap-4 item-center">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/">
            <button
              className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
              onClick={() => {
                setIsLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              DashBoard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
