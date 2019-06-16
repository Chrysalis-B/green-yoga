import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

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
            <link href="https://fonts.googleapis.com/css?family=Raleway:400,600" rel="stylesheet"/>
        </Helmet>
        <div className="layout__wrapper">
           <Header />
        <main className="layout__main">
            {props.children}
        </main>
        <Footer /> 
        </div>
        
    </React.Fragment>
   )
}