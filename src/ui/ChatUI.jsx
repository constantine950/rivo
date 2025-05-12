import Submitchat from "./Form";
import { useAppContext } from "../context/AppContext.jsx";
import { useRef, useEffect } from "react";

function ChatUI() {
  const { messages } = useAppContext();
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 mt-[25%] pb-[40%]">
        {messages.map((message) => (
          <div
            className={`${
              message.isUser ? " justify-end" : "justify-start"
            } flex text-sm`}
            key={message.id}
          >
            <div
              className={`${
                message.isUser ? "bg-[#414158]" : ""
              } text-white px-2.5 py-2 rounded-lg`}
            >
              {message.img ? (
                <img className="h-5 w-5" src={message.img} />
              ) : null}
              {message.text}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-[#292A2D]">
        <Submitchat />
      </div>
    </div>
  );
}

export default ChatUI;
