import { HiBan } from "react-icons/hi";
import { Link } from "react-router";
import { useAppContext } from "../context/AppContext";

function Header() {
  const { setMessages, setActive } = useAppContext();

  function handleClick() {
    setMessages([
      {
        id: 1,
        text: "Hey there! How can I help you today?",
        img: "rivo.png",
        isUser: false,
      },
    ]),
      setActive("");
  }

  return (
    <div className="flex fixed left-0 top-0 border-b border-gray-50 right-0 bg-[#292A2D] justify-between items-center px-4 sm:px-7 lg:px-12">
      <Link onClick={handleClick} to="/">
        <img className="h-[5.2rem] " src="/rivo.png" />
      </Link>

      <div onClick={handleClick}>
        <HiBan className="h-7 w-7 cursor-pointer text-gray-400 hover:text-gray-300" />
      </div>
    </div>
  );
}

export default Header;
