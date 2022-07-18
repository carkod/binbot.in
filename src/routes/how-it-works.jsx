import React, { useEffect } from "react";
import { ArticleContent } from "../components/article";
import ServiceProcessCards from "../components/ServiceProcessCards";
import { SplitLayout } from "../components/split-layout";
import About from "./about";
import ReactGA from "react-ga4";


const serviceProcessCardsContent = [
  {
    name: "sign-in",
    title: "Sign into your account",
    iconClasses: "fa-solid fa-user fa-2xl",
  },
  {
    name: "deposit",
    title: "Deposit the amount you want to invest",
    iconClasses: "fa-solid fa-piggy-bank fa-2xl",
  },
  {
    name: "check-balance",
    title: "Check your balance, watch your investment grow",
    iconClasses: "fa-solid fa-chart-line fa-2xl",
  },
  {
    name: "withdraw",
    title: "Withdraw your money or keep it to accrue even more interest",
    iconClasses: "fa-solid fa-sack-dollar fa-2xl",
  },
];



const HowWorks = () => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <ArticleContent title="How does it work?">
      <h4>Easiest way to invest in cryptocurrencies.</h4>
      <hr />
      {serviceProcessCardsContent.map((content, i) => (
        <ServiceProcessCards key={i} data={content} />
      ))}
    </ArticleContent>
  );
};

const HowWorksPage = () => {
  return <SplitLayout left={<HowWorks />} right={<About />} />;
};

export default HowWorksPage;
