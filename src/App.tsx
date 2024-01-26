import "./App.css";
import Logo from "./components/Logo";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="bg-black flex flex-col gap-y-2 md:gap-y-3 items-center justify-center w-[100vw] h-[100vh]">
      <Logo />
      <h2 className="text-grey font-serif text-center text-[16px] md:text-[26px] -mt-4 md:-mt-8">
        Senior Frontend Developer
      </h2>
      <Socials
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
          // {
          //   name: "npm",
          //   url: "https://npmjs.com/~ianabalus",
          //   text: "NPM",
          // },
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
