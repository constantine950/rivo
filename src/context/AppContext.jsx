import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [active, setActive] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey there! How can I help you today?",
      img: "rivo.png",
      isUser: false,
    },
  ]);

  return (
    <AppContext value={{ active, setActive, messages, setMessages }}>
      {children}
    </AppContext>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Using context out of the provider");
  return context;
}
