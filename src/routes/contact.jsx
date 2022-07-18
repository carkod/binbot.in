import React, { useEffect } from 'react'
import { Layout } from '../components/layout'
import { Article, ArticleContent, ArticleMedia } from '../components/article'
import ReactGA from "react-ga4";

export default function ContactPage() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);
  return (
    <Layout>
      <Article>
        <ArticleContent title="Contact">
          <p>Add your contact information here.</p>
        </ArticleContent>

        <ArticleMedia>
          <img src="https://picsum.photos/420/640" alt="Lorem Picsum" />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
