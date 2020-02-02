import React from "react"
import Layout from "../components/layout"
import ContactDataPBerg from "../data/contact-p-berg.json"
import ContactDataXBerg from "../data/contact-x-berg.json"
import { graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import "./studios.css"

export default ({ data }) => {
    const images = data.allFile.edges
    const imageStyles = {
        margin: "0.75rem 0",
        borderRadius: "0.3rem",
    }
    return (
        <Layout>
            <h2 className="studio__title">Where to find us</h2>
            <div className="studio__directions_container">
                <div className="studio__address">
                    <a
                        className="studio__address-item-link"
                        href={ContactDataPBerg.address.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Green Yoga P-Berg
                    </a>
                    <p>{ContactDataPBerg.address.street}</p>
                    <p>
                        {ContactDataPBerg.address.zip}{" "}
                        {ContactDataPBerg.address.city}
                    </p>
                    <p>{ContactDataPBerg.tel1.number}</p>
                </div>
                <div className="studio__address">
                    <a
                        className="studio__address-item-link"
                        href={ContactDataXBerg.address.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Green Yoga X-Berg
                    </a>
                    <p>{ContactDataXBerg.address.street}</p>
                    <p>
                        {ContactDataXBerg.address.zip}{" "}
                        {ContactDataXBerg.address.city}
                    </p>
                    <p>{ContactDataXBerg.tel1.number}</p>
                </div>
                <div className="studio__map">
                    <iframe
                        title="map-p-berg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.7484859330143!2d13.419246717295579!3d52.5379846596298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e0123a140b5%3A0x249d1cbdc20bfd80!2sSredzkistra%C3%9Fe+59%2C+10405+Berlin!5e0!3m2!1sen!2sde!4v1559236774966!5m2!1sen!2sde"
                        width="550"
                        height="450"
                        frameBorder="0"
                    ></iframe>
                </div>
                <div className="studio__map">
                    <iframe
                        title="map-x-berg"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.7082103869!2d13.411916815806793!3d52.5025212798108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e326d7d3ea9%3A0xdd3662c1fc65a250!2sOranienstra%C3%9Fe%20163%2C%2010969%20Berlin!5e0!3m2!1sen!2sde!4v1580662646321!5m2!1sen!2sde"
                        width="550"
                        height="450"
                        frameborder="0"
                    ></iframe>
                </div>
            </div>
            <h2 className="studio__title">Our space</h2>
            <div className="studio__images_container">
                {images.map(image => {
                    return (
                        <Img
                            fluid={image.node.childImageSharp.fluid}
                            key={image.node.id}
                            style={imageStyles}
                            objectFit="cover"
                            objectPosition="50% 50%"
                            alt=""
                        />
                    )
                })}
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allFile(filter: { relativeDirectory: { eq: "assets/studio" } }) {
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
    }
`
