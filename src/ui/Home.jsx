import Submitchat from "./Form";

function Home() {
  return (
    <div className="text-center h-screen pt-[45%] sm:pt-[35%] md:pt-[25%] lg:pt-[15%]">
      <div className="mx-auto space-y-2">
        <h1 className="text-white text-3xl md:text-4xl">Hi, I'm Rivo.</h1>
        <p className="text-gray-100 md:text-2xl">How can i help you today?</p>
      </div>
      <div className="sm:mx-24 lg:mx-52 xl:mx-[25rem]">
        <Submitchat />
      </div>
    </div>
  );
}

export default Home;
