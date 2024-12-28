import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", title: "Home" },
    { path: "/aboutus", title: "About us" },
    { path: "/program", title: "Program" },
    { path: "/membership", title: "Membership" },
    { path: "/testomonials", title: "Testomonials" },
  ];

  return (
    <div className="px-12">
      <nav className="flex  justify-between items-center py-4 text-white">
        <div className="flex">
          <img src="/images/logo.png" alt="logo" className="w-[50px] h-auto" />

          <h1>FITNESXIA</h1>
        </div>

        <div className="flex gap-x-6 items-center">
          <div>
            <ul className="flex gap-x-4">
              {navItems.map(({ path, title }) => (
                <li key={path}>
                  <NavLink to={path}>{title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <button className="py-2 px-5 border text-white border-red-500 bg-red-500 rounded-lg ">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
