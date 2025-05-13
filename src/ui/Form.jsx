import chatWithLlama from "../api/chat";
import { useAppContext } from "../context/AppContext";
import Button from "./Button";
import Input from "./Input";
import { useNavigate } from "react-router";
import Spinner from "./Spinner";

function Submitchat() {
  const { setActive, setMessages, active, isLoading, setIsLoading } =
    useAppContext();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!active.trim() || isLoading) return;

    setIsLoading(true);

    // Add user message
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text: active, isUser: true },
    ]);

    setActive("");
    navigate("/chat");

    try {
      const chat = await chatWithLlama(active);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: chat,
          img: "rivo.png",
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error("API call failed:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[#404045] m-6 flex justify-between items-center px-4 py-5 mx-5 rounded-xl">
        <Input />
        {isLoading ? <Spinner /> : <Button />}
      </div>
    </form>
  );
}

export default Submitchat;
