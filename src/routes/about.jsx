import React from "react";

import { ArticleContent } from "../components/article";

const About = () => {
  return (
    <ArticleContent title="About Binbot">
      <h4>
        Binbot is a cyptocurrency fund, that works like your usual mutual fund.
      </h4>
      <div className="article--media relative -right-10 py-10 lg:right-0 lg:w-full lg:py-0">
        <p className="text-medium-gray">
          Unlike cryptocurrencies, we wanted to make it simple, highly available
          to any individual without the fuss of complicated transactions, it's
          just like a trip to your local branch.
        </p>
      </div>

      <p className="text-medium-gray">
        Cryptocurrencies are highly volatile, little information is available on
        most coins or tokens, markets run 24/7 365 days, and therefore, the
        chances of falling into scams, losing it all, or missing on a sudden
        hype are very high.
      </p>
      <p className="text-medium-gray">
        We deal with it professionally, we screen the high yield
        cryptocurrencies using bots and algorithms, using strategies that
        maintain a low risk profile and maximizing diversification.
      </p>
    </ArticleContent>
  );
};

export default About;
