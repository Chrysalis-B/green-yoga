import React, { useState } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import './hero.css'
import useInterval from '../lib/useInterval'
import BackgroundImage from 'gatsby-background-image'
import ContentBox from './content-box'

export default () => {
  const data = useStaticQuery(
    graphql`
        query {
            image0: 
                file(relativePath: { eq: "assets/hero-img-studio-one.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1000 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            image1: 
                file(relativePath: { eq: "assets/hero-img-planting.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1000 maxHeight: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                }
            image2: 
                file(relativePath: { eq: "assets/hero-img-studio-two.jpg" }) {
                    childImageSharp {
                      fluid(maxWidth: 1200 maxHeight: 1000) {
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
  const [plantation, setPlantationTab] = useState(false);
  const [pranic, setPranicTab] = useState(false);
  const [delay, setDelay] = useState(3000);

  const clickPlantation = (() => {
    setPlantationTab(!plantation);
    setPranicTab(false);
    determineDelay(!plantation);
  });

  const clickPranic = (() => {
    setPlantationTab(false);
    setPranicTab(!pranic);
    determineDelay(!pranic);
  });

  const determineDelay = ( (contentState) => {
    contentState ? setDelay(null) : setDelay(3000); 
  })    

  useInterval(() => {
    if (current < images.length - 1) {
      setCurrent(current + 1);
      setImage(images[current + 1])
    }
    else {
      setCurrent(0);
      setImage(images[0])
    }
  }, delay);

  return (
    <div className="hero-section__image-container">
      <BackgroundImage className="hero-section__background-image" fluid={image}>
        <div className="hero-text">
          <h1 className="hero-text__title">Do Yoga to Plant Trees</h1>
          <h2 className="hero-text__sub-title">Pay as you wish yoga to fight climate change</h2>
          <div className="hero-text__button-container">
            <button onClick={() => clickPlantation()} className="hero-text__button">Plantation</button>
            <Link to="/schedule">
              <button className="hero-text__button">Yoga / Meditation</button>
            </Link>
            <button onClick={() => clickPranic()} className="hero-text__button">Pranic Healing</button>
          </div>
          {plantation && <ContentBox plantation="true"/>}
          {pranic && <ContentBox pranic="true"/>}
        </div>
      </BackgroundImage>
    </div>
  )
}