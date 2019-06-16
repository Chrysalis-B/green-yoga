import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery } from "gatsby"
import "./hero.css"


export default () => {
    const data = useStaticQuery(
        graphql`
        query {
          file(relativePath: { eq: "assets/hero-img-planting.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1800 maxHeight: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `
    );
    return (
        <div className="hero-section__image-container">
            <Img fluid={data.file.childImageSharp.fluid}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="" />
        </div>
        
    )
}