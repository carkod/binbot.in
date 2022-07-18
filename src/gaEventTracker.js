import ReactGA from "react-ga4";

ReactGA.initialize(process.env.REACT_APP_GA_ID);

/**
 * 
 * @param {string} category Name of the page e.g. Homepage, About us, How it works etc...
 * @param {string} action Custom action name, must include a verb
 * @param {string} label HTML element group ["button", "form"]
 * @returns 
 */
const useAnalyticsEventTracker = (
  category = "Homepage",
  action = "access",
  label = "button"
) => {
  const eventTracker = () => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};
export default useAnalyticsEventTracker;
