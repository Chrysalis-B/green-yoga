import React, { useState } from 'react';
import { useStaticQuery, graphql } from "gatsby"
import "./hero.css"
import useInterval from "../lib/useInterval"
import BackgroundImage from 'gatsby-background-image'

export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            image0: 
                file(relativePath: { eq: "assets/hero-img-studio-one.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1800 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            image1: 
                file(relativePath: { eq: "assets/hero-img-planting.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1800 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            image2: 
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
    const images = [data.image0.childImageSharp.fluid, data.image1.childImageSharp.fluid, data.image2.childImageSharp.fluid];
    const [image, setImage] = useState(images[0])
    const [current, setCurrent] = useState(0);

    useInterval(() => {
        if(current < images.length - 1) {
            setCurrent(current +1);
            setImage(images[current +1])
        }
        else {
            setCurrent(0);
            setImage(images[0])
        }
      }, 2000);
    
    return (
        <div className="hero-section__image-container">
            <BackgroundImage className="hero-section__background-image" fluid={image}/>
        </div>
    )
}