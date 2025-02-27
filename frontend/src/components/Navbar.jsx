import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login"); // This will navigate to the login page
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  return (
    <nav className="flex justify-between items-center p-3 z-10 bg-[#6E4523]">
      <div className="flex items-center gap-4 ">
        <img src={logo} className="h-20 w-auto"></img>
      </div>
      <ul className="flex gap-4">
        <li className="hover:text-yellow-700 transition duration-300 cursor-pointer font-semibold text-white">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-700 transition duration-300 cursor-pointer font-semibold  text-white">
          <Link to="/courses">Trainings</Link>
        </li>
        <li className="hover:text-yellow-700 transition duration-300 cursor-pointer font-semibold  text-white">
          <Link to="/menu">Our Menu</Link>
        </li>
        <li className="hover:text-yellow-700 transition duration-300 cursor-pointer font-semibold  text-white">
          <Link to="/services">Reservation</Link>
        </li>
        <li className="hover:text-yellow-700 transition duration-300 cursor-pointer font-semibold  text-white">
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <div className="hidden md:flex items-center gap-4">
        <button
          className="p-2 font-bold text-white p bg-[#B47137] rounded"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="bg-orange-00 rounded p-2 font-bold text-white bg-[#B47137]"
          onClick={handleSignUpClick}
        >
          SignUp
        </button>
      </div>
    </nav>
  );
}
