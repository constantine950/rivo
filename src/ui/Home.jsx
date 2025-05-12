import Submitchat from "./Form";

function Home() {
  return (
    <div className="text-center pt-[60%]">
      <div className="mx-auto space-y-2">
        <h1 className="text-white text-3xl">Hi, I'm Rivo.</h1>
        <p className="text-gray-100">How can i help you today?</p>
      </div>
      <Submitchat />
    </div>
  );
}

export default Home;
