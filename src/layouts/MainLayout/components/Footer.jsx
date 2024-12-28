import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#18191C] px-28 py-16">
      <div className="grid grid-cols-12">
        <div className="col-span-2 flex flex-col gap-6">
          <h1 className="text-xl font-medium leading-7 text-white">Company</h1>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-6 text-white">About Us</p>
            <p className="text-base leading-6 text-white">Why Us</p>
            <p className="text-base leading-6 text-white">Security</p>
            <p className="text-base leading-6 text-white">Partnership</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-6 pb-10">
          <h1 className="text-xl font-medium leading-7 text-white">
            Categories
          </h1>
          <div className="flex flex-col gap-4">
            <p className="text-base leading-6 text-white">Basic Yoga</p>
            <p className="text-base leading-6 text-white">Strength Training</p>
            <p className="text-base leading-6 text-white">Body Building</p>
            <p className="text-base leading-6 text-white">Weight Lost</p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-6">
          <h1 className="text-xl font-medium leading-7 text-white">Help</h1>
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-base leading-6 text-white">
              Account
            </Link>
            <Link to="/" className="text-base leading-6 text-white">
              Support Center
            </Link>
            <Link to="/" className="text-base leading-6 text-white">
              Privacy Policy
            </Link>
            <Link to="/aboutus" className="text-base leading-6 text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <h1 className="text-xl font-medium leading-7 text-white">
            Contact US
          </h1>
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-base leading-6 text-white">
              +0987654321
            </Link>
            <Link to="/" className="text-base leading-6 text-white">
              example@email.com
            </Link>
            <Link to="/faq" className="text-base leading-6 text-white">
              2456 Royal Ln, New Jersey
            </Link>
          </div>
        </div>
        <div className="col-span-3 flex flex-col gap-6">
          <h1 className="text-xl font-medium leading-7 text-white">
            Subscribe Our NewsLetter
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center">
              <input
                type="email"
                className="p-2 rounded-l-full w-full max-w-xs text-gray-900"
                placeholder="Enter your email"
              />
              <button className="bg-red-500 rounded-r-full p-2">
                <FontAwesomeIcon icon={faPaperPlane} className="text-white" />
              </button>
            </div>

            <p className="text-base leading-6 text-white">
              Never miss an update and news to your email
            </p>
          </div>
        </div>
      </div>

      <hr>
      </hr>
      <div>
      <div className="flex  justify-between items-center py-4 text-white">
        <div className="flex">
          <img src="/images/logo.png" alt="logo" className="w-[50px] h-auto" />

          <h1>FITNESXIA</h1>
        </div>

        <div className="flex gap-x-6 items-center">
          <div className="">
            <p>@2023 DesignAxen</p>
        
          </div>
          <div className="flex gap-2">
          <FaFacebookSquare />
          <FaFacebookMessenger />
          <FaTwitterSquare />
          <FaLinkedin />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
