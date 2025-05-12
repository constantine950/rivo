import chatWithLlama from "../api/chat";
import { useAppContext } from "../context/AppContext";
import Button from "./Button";
import Input from "./Input";
import { useLocation, useNavigate } from "react-router";

function Submitchat() {
  const { setActive, setMessages, active } = useAppContext();
  const navigate = useNavigate();
  const pathname = useLocation();

  async function handleSubmit(e) {
    e.preventDefault();
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: active, isUser: true },
    ]);

    setActive("");

    const chat = await chatWithLlama(active);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: chat, img: "rivo.png", isUser: false },
      ]);
    }, 2000);
    if (pathname === "/chat") return;
    navigate("/chat");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#404045] m-6 flex justify-between items-center px-4 py-5 mx-5 rounded-xl">
        <Input />
        <Button />
      </div>
    </form>
  );
}

export default Submitchat;
