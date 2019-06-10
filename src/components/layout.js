import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

export default (props) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
                description
                language
              }
            }
          }
        `
      )
    return ( 
    <React.Fragment>
        <Helmet>
            <html lang={data.site.siteMetadata.language}/>
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description}/>
        </Helmet>
        <Header />
        <main>
            {props.children}
        </main>
        <Footer />
    </React.Fragment>
   )
}