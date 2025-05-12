import { useAppContext } from "../context/AppContext";

function Input() {
  const { active, setActive } = useAppContext();

  return (
    <input
      value={active}
      onChange={(e) => setActive(e.target.value)}
      name="userInput"
      className="flex-1 placeholder:text-gray-400 outline-0 text-white"
      type="text"
      placeholder="Message Rivo"
    />
  );
}

export default Input;
