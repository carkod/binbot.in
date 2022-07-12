import React from "react";

import { useNavigate } from "react-router-dom";
import { HeroIllustration } from "../components/hero-illustration";
import { SplitLayout } from "../components/split-layout";

const Landing = ({ setSignupForm }) => {
  let navigate = useNavigate();

  return (
    <div className="bg-white md:py-16">
      <div className="block">
        <h1 className="mt-0 mb-4 mb-10 text-4xl font-bold md:text-5xl">
          Invest in crypto without buying coins or tokens
        </h1>
        <p className="text-gray-500 prose prose-xl mb-6 px-16 md:px-0">
          We know crypto is complex, risky and there is not much information
          available for you to make sound decisions.
        </p>
        <p className="text-black-500 prose prose-2xl mb-6 px-16 decoration-brand md:px-0">
          Let us make it easier for you. Invest with Binbot.
        </p>
      </div>
      <div className="mt-12 block">
        <button
          className="mr-12 cursor-pointer whitespace-nowrap rounded-sm border-0 bg-success py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
          onClick={() => setSignupForm(true)}
        >
          Get early access
        </button>
        <button
          className="cursor-pointer whitespace-nowrap rounded-sm border-0 bg-primary py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
          type="submit"
          onClick={() => navigate("/how-it-works")}
        >
          How does it work?
        </button>
      </div>
    </div>
  );
};

const renderForm = () => {
  return (
    <>
      <div className="py-12">
        <h2 className="inline text-2xl font-bold">
          Sign up to see how you can earn 14 APY*
        </h2>
      </div>
      <div className="py-12">
        <div className="mt-8 max-w-md">
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Client type</span>
              <select
                className="
                    border-gray-300
                    focus:border-indigo-300
                    focus:ring-indigo-200
                    mt-1
                    block
                    w-full
                    rounded-md shadow-sm focus:ring focus:ring-opacity-50
                  "
              >
                <option>Personal</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input
                type="text"
                className="
                    border-gray-300
                    focus:border-indigo-300
                    focus:ring-indigo-200
                    mt-1
                    block
                    w-full
                    rounded-md shadow-sm focus:ring focus:ring-opacity-50
                  "
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="
                    border-gray-300
                    focus:border-indigo-300
                    focus:ring-indigo-200
                    mt-1
                    block
                    w-full
                    rounded-md shadow-sm focus:ring focus:ring-opacity-50
                  "
                placeholder="john@example.com"
              />
            </label>
            <div className="block">
              <div className="mt-2">
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="
                          border-gray-300
                          text-indigo-600
                          focus:border-indigo-300
                          focus:ring-indigo-200
                          rounded
                          shadow-sm
                          focus:ring
                          focus:ring-opacity-50
                          focus:ring-offset-0
                        "
                      checked=""
                    />
                    <span className="ml-2">
                      Email me when Binbot is launched
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="block">
              <button
                className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-success py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
                type="submit"
              >
                {"Get access"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <small>
          *Depends on market conditions. This is an average estimation
        </small>
      </div>
    </>
  );
};

export default function HomePage() {
  const [signupForm, setSignupForm] = React.useState(false);

  function onFormSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ values });
      }, 1000);
    });
  }
  return (
    <div className="overflow-hidden">
      <SplitLayout
        left={<Landing setSignupForm={(value) => setSignupForm(value)} />}
        right={signupForm ? renderForm() : <HeroIllustration />}
      />
    </div>
  );
}
