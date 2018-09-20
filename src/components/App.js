import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Hero from './Hero'
import Featuring from './Featuring'
import OurStory from './OurStory'
import FAQ from './FAQ'
import Footer from './Footer'
import './main.sass'

const App = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Triliogy Code Example' },
            { name: 'keywords', content: 'trilogy, cool, test, awesome, example' },
          ]}
        >
        <html lang="en" />
        </Helmet>
        <Header />
        <Hero />
        <Featuring />
        <OurStory />
        <FAQ />
        <Footer />
      </>
    )}
  />
)

export default App
