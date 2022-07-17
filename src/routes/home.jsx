import React from "react";

import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { HeroIllustration } from "../components/hero-illustration";
import { SplitLayout } from "../components/split-layout";
import { handleSupabaseErrors, validateEmail } from "../utils";

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

const UserForm = () => {
  const [submitMessage, setSubmitMessage] = React.useState("");
  const [userDetails, setUserDetails] = React.useState({
    name: "",
    clientType: "Personal",
    email: null
  });

  const handleChange = (e) => {
    setUserDetails({...userDetails, [e.target.name]: e.target.value})
    
  }

  const onFormSubmit = async () => {
    const { name, clientType, email} = userDetails;
    if (!validateEmail(email)) {
      setSubmitMessage("Invalid email");
      return false
    }
    console.log("URL and Key supabase", process.env.SUPABASE_URL);
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_PUBLIC_KEY);
    const { data, error } = await supabase
      .from("users")
      .insert([{ name: name, client_type: clientType, email: email }]);

    if (error) {
      const msg = handleSupabaseErrors(error)
      setSubmitMessage(`Error submitting details: ${msg}`);
    } else {
      setSubmitMessage("Successfully submitted your details! We'll be in touch soon!")
    }
    
  }
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
              <span className="text-gray-700">Profile</span>
              <select
                name="clientType"
                onChange={handleChange}
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
                <option value="Personal">Personal</option>
                <option value="Business">Business</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="block">
              <span className="text-gray-700">Name</span>
              <input
                name="name"
                onChange={handleChange}
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
                name="email"
                onChange={handleChange}
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
                    <p className="ml-2">
                      By submitting you agree that you will allow us to send you emails when Binbot is launched.
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <div className="block">
              <button
                onClick={onFormSubmit}
                className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-success py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
                type="submit"
              >
                {"Get access"}
              </button>
            </div>
            {submitMessage !== "" && 
              <div className="block">
                <p>{submitMessage}</p>
              </div>
            }
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
  
  return (
    <div className="overflow-hidden">
      <SplitLayout
        left={<Landing setSignupForm={(value) => setSignupForm(value)} />}
        right={signupForm ? <UserForm /> : <HeroIllustration />}
      />
    </div>
  );
}
