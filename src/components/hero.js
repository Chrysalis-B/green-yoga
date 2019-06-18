import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./hero.css"
import useState from "react"

import BackgroundImage from 'gatsby-background-image'


export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            image1: 
                file(relativePath: { eq: "assets/hero-img-studio-one.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1800 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            image2: 
                file(relativePath: { eq: "assets/hero-img-planting.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1800 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            image3: 
                file(relativePath: { eq: "assets/hero-img-studio-two.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1800 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
        }
      `
    );
    const images = [data.image1.childImageSharp.fluid, data.image2.childImageSharp.fluid, data.image3.childImageSharp.fluid];
    return (
        <div className="hero-section__image-container">
            <BackgroundImage className="hero-section__background-image" fluid={images}/>
        </div>
    )
}