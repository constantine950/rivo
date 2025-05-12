import { HiArrowUpCircle } from "react-icons/hi2";
import { useAppContext } from "../context/AppContext";

function Button() {
  const { active } = useAppContext();

  return (
    <button
      className={` ${!active.length ? "cursor-not-allowed" : "cursor-pointer"}`}
      disabled={!active.length}
    >
      <HiArrowUpCircle
        className={`h-10 w-10 ${
          !active.length ? " text-gray-400" : "text-[#4F6ECA]"
        }`}
      />
    </button>
  );
}

export default Button;
