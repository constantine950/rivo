import Submitchat from "./Form";
import { useAppContext } from "../context/AppContext.jsx";
import { useRef, useEffect } from "react";
import Spinner from "./Spinner.jsx";

function ChatUI() {
  const { messages, isLoading } = useAppContext();
  const messageEndRef = useRef(null);

  useEffect(() => {
    messages.length > 2
      ? messageEndRef.current?.scrollIntoView({ behavior: "smooth" })
      : null;
  }, [messages]);

  return (
    <div className="md:mx-36 xl:mx-80">
      <div className="flex flex-col h-screen">
        <div
          className={`flex-1 p-4 space-y-4 overflow-y-auto ${
            messages.length > 2 ? "pb-[45%]" : ""
          } `}
        >
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
                {message.img && <img className="h-5 w-5" src={message.img} />}
                {message.text}
              </div>
            </div>
          ))}

          {/* Show spinner at the bottom when loading */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="text-white px-2.5 py-2 rounded-lg">
                <Spinner />
              </div>
            </div>
          )}

          <div ref={messageEndRef} />
        </div>

        <div className="fixed bottom-0 left-0 right-0 md:right-36 md:left-36 xl:left-80 xl:right-80 bg-[#292A2D]">
          <Submitchat />
        </div>
      </div>
    </div>
  );
}

export default ChatUI;
