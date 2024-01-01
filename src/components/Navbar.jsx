import { menu, shoppingBag, user } from "../assets/icons";

function Navbar() {
  return (
    <nav className="container flex items-center justify-between py-3">
      <a href="/" className=" text-2xl">
        Grace
      </a>

      <ul className="flex space-x-8">
        <li className="uppercase text-blue-100 ">Home</li>
        <li className="uppercase">About</li>
        <li className="uppercase">Contact Us</li>
      </ul>

      <div className="space-x-4">
        <button>
          <img src={user} alt="" />
        </button>
        <button className="relative">
          <img src={shoppingBag} alt="" />
          <span className="flex items-center justify-center absolute -right-2 -top-2 w-5 h-5 rounded-full bg-blue-100 text-white text-sm">
            0
          </span>
        </button>
        <button>
          <img src={menu} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
