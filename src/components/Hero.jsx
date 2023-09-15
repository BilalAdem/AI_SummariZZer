import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/BilalAdem/AI_SummariZZer", "_blank")
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize your text with{" "}
        <span className="orange_gradient">the power of AI</span>
      </h1>
      <h2 className="desc">
        Simplify your text with our AI-powered summarizer. Just paste your text
        below and let the magic happen!
      </h2>
    </header>
  );
};

export default Hero;
