import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import useAnalyticsEventTracker from "../gaEventTracker";

const Landing = ({ setSignupForm }) => {
  let navigate = useNavigate();
  useAnalyticsEventTracker("Homepage", "access", "Button");

  const handleAccessButton = () => {
    setSignupForm(true);
    ScrollReveal().reveal("#signup-form");
    document.getElementById("signup-form").scrollIntoView();
  };

  return (
    <div className="bg-white md:py-16">
      <div className="block">
        <h1 className="mt-0 mb-4 mb-10 text-4xl font-bold md:text-5xl">
          Invest in crypto without buying coins or tokens
        </h1>
        <p className="text-gray-500 prose prose-xl md:px-0">
          We know crypto is complex, risky and there is not much information
          available for you to make sound decisions.
        </p>
        <p className="text-black-500 prose prose-2xl decoration-brand md:px-0">
          Let us make it easier for you. Invest with Binbot.
        </p>
      </div>
      <div className="block">
        <button
          className="mt-6 mr-12 cursor-pointer whitespace-nowrap rounded-sm border-0 bg-success py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
          onClick={handleAccessButton}
        >
          Get early access
        </button>
        <button
          className="mt-6 cursor-pointer whitespace-nowrap rounded-sm border-0 bg-primary py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg xs:mt-6"
          type="submit"
          onClick={() => navigate("/how-it-works")}
        >
          How does it work?
        </button>
      </div>
    </div>
  );
};

export default Landing;
