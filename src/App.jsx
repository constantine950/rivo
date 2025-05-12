import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayOut from "./ui/AppLayOut";
import Home from "./ui/Home";
import ChatUI from "./ui/ChatUI";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayOut,
    children: [
      { index: true, Component: Home },
      {
        path: "chat",
        Component: ChatUI,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
