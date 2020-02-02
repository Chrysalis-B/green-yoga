import React from "react"
import Layout from "../components/layout"
import ContactData from "../data/contact-p-berg.json"
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import "./studio.css"



export default ({data}) => {
    const images = data.allFile.edges;
    const imageStyles = {
        margin: '0.75rem 0',
        borderRadius: '0.3rem'
    };
    return (
    <Layout>
        <h2 className="studio__title">Where to find us</h2>
        <div className="studio__container">
            <div className="studio__address">
                <p className="studio__address-item">Green Yoga</p>
                <a className="studio__address-item" href={ContactData.address.url} target="_blank" rel="noopener noreferrer"><p>{ContactData.address.street}</p></a>
                <a className="studio__address-item" href={ContactData.address.url} target="_blank" rel="noopener noreferrer"><p>{ContactData.address.zip} {ContactData.address.city}</p></a>
                <a className="studio__address-item" href={ContactData.tel1.url}><p>{ContactData.tel1.number}</p></a>
            </div> 
            <div className="studio__map">
                <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.7484859330143!2d13.419246717295579!3d52.5379846596298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e0123a140b5%3A0x249d1cbdc20bfd80!2sSredzkistra%C3%9Fe+59%2C+10405+Berlin!5e0!3m2!1sen!2sde!4v1559236774966!5m2!1sen!2sde" width="600" height="450" frameBorder="0"></iframe>
            </div>
        </div>
        <h2 className="studio__title">Our space</h2>
        <div className="studio__container">
            {images.map( image => {
            return (
            <Img fluid={image.node.childImageSharp.fluid}
            key={image.node.id}
            style={imageStyles}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="" />  
            )    
        })} 
        </div>
    </Layout>
)}

export const query = graphql`
query {
    allFile(filter: {relativeDirectory: {eq: "assets/studio"}}) {
        edges {
          node {
              id
              childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }  
  }`;