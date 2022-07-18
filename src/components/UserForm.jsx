import { createClient } from "@supabase/supabase-js";
import { useRef, useState } from "react";
import { handleSupabaseErrors, validateEmail } from "../utils";

const UserForm = () => {
  const [submitMessage, setSubmitMessage] = useState("");
  const [userDetails, setUserDetails] = useState({
    name: "",
    clientType: "Personal",
    email: null,
  });
  const signupFormRef = useRef(null)

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const onFormSubmit = async () => {
    const { name, clientType, email } = userDetails;
    if (!validateEmail(email)) {
      setSubmitMessage("Invalid email");
      return false;
    }

    const supabase = createClient(
      "https://ikdyivgtebggltvjweuw.supabase.co",
      process.env.REACT_APP_SUPABASE_ANON_PUBLIC_KEY
    );
    const { data, error } = await supabase
      .from("users")
      .insert([{ name: name, client_type: clientType, email: email }]);

    if (error) {
      const msg = handleSupabaseErrors(error);
      setSubmitMessage(`Error submitting details: ${msg}`);
    }
    if (data) {
      setSubmitMessage(
        "Successfully submitted your details! We'll be in touch soon!"
      );
    }
  };
  return (
    <>
      <div className="py-12">
        <h2 id="signup-form" ref={signupFormRef} className="inline text-2xl font-bold">
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
                      By submitting you agree that you will allow us to send you
                      emails when Binbot is launched.
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
            {submitMessage !== "" && (
              <div className="block">
                <p>{submitMessage}</p>
              </div>
            )}
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

export default UserForm;
