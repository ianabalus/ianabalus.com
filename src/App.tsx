import Logo from "./components/Logo";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="fixed top-0 flex flex-col gap-y-2 md:gap-y-3 items-center justify-center w-[100vw] h-[100%]">
      <Logo />
      <h2 className="text-grey font-serif text-center text-[16px] md:text-[26px] -mt-4 md:-mt-8 animate-[move_500ms_ease-in-out_500ms_both]">
        Senior Frontend Developer
      </h2>
      <Socials
        className="transition-move duration-500 ease-in-out-quad animate-[move_500ms_ease-in-out_750ms_both]"
        socials={[
          {
            name: "github",
            url: "https://github.com/ianabalus",
            text: "Github",
          },
          {
            name: "instagram",
            url: "https://instagram.com/ianabalus_",
            text: "Instagram",
          },
          {
            name: "linkedin",
            url: "https://linkedin.com/in/ianabalus",
            text: "LinkedIn",
          },
          {
            name: "messenger",
            url: "https://m.me/ianabalus",
            text: "Messenger",
          },
        ]}
      />
    </div>
  );
}

export default App;
