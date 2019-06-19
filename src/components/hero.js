import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import "./hero.css"
import useInterval from "../lib/useInterval"
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
    const [image, setImage] = useState(data.image2.childImageSharp.fluid)
    const images = [data.image1.childImageSharp.fluid, data.image2.childImageSharp.fluid, data.image3.childImageSharp.fluid];
    
    useInterval(() => {
        setImage(data.image1.childImageSharp.fluid);
      }, 2000);
    
    return (
        <div className="hero-section__image-container">
            <BackgroundImage className="hero-section__background-image" fluid={image}/>
        </div>
    )
}