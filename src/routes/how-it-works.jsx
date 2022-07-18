import React from "react";

import { ArticleContent } from "../components/article";
import { SplitLayout } from "../components/split-layout";
import About from "./about";

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

const ServiceProcessCards = ({ data }) => {
  return (
    <div className="hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 my-12 flex flex-col items-center rounded-lg border bg-white shadow-md md:max-w-xl md:flex-row">
      <div className="h-96 w-full rounded-t-lg object-cover p-5 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
        <i className={data.iconClasses} />
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-gray-900 mb-2 text-2xl font-bold tracking-tight dark:text-white">
          {data.title}
        </h5>
      </div>
    </div>
  );
};

const HowWorks = () => {
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
