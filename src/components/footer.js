import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby"

import "./footer.css"

export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            facebook: 
                file(relativePath: { eq: "assets/icons/facebook.png" }) {
                    childImageSharp {
                        fixed(width: 40) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
            whatsapp: 
                file(relativePath: { eq: "assets/icons/whats-app.png" }) {
                    childImageSharp {
                        fixed(width: 40) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
            instagram: 
                file(relativePath: { eq: "assets/icons/instagram.png" }) {
                    childImageSharp {
                        fixed(width: 60) {
                          ...GatsbyImageSharpFixed
                        }
                    }
                }
        }
      `
    );
    const styleIcon = {
        margin: '0.75rem'
    };
    return (
    <footer className="footer__wrapper">
        <address className="footer__container">
            <div className="footer__address-partition">
                <p className="footer__address-item">Green Yoga</p>
                <p className="footer__address-item">Srikanth Reddy Beeram</p> 
            </div>
            <div className="footer__address-partition">
                <a className="footer__address-item-link" href="https://goo.gl/maps/87LAAiKgWsxpH5b46" target="_blank" rel="noopener noreferrer">Sredzkistr. 59</a>
                <a className="footer__address-item-link" href="https://goo.gl/maps/87LAAiKgWsxpH5b462" target="_blank" rel="noopener noreferrer">10405 Berlin</a>
                <Link className="footer__address-item-link" to="/imprint">Imprint</Link>
            </div>
        </address>
        <div className="footer__container">
            <div className="footer__address-partition">
                <a className="footer__address-item-link" href="tel:49-1771431355">+49 1771 431355</a>
                <a className="footer__address-item-link" href="tel:49-15781974844">+49 1578 1974844</a>
            </div>
        </div>
        <div className="footer__container">
            <div className="footer__address-partition">
                <a href="https://www.facebook.com/greenyoga.org" target="_blank" rel="noopener noreferrer">
                    <Img style={styleIcon} fixed={data.facebook.childImageSharp.fixed} alt="Facebook" />
                </a>
            
                <a href="https://wa.me/00491771431355/" target="_blank" rel="noopener noreferrer">
                    <Img style={styleIcon} fixed={data.whatsapp.childImageSharp.fixed} alt="WhatsApp" />
                </a>
                <a href="https://www.instagram.com/greenyoga.co/" target="_blank" rel="noopener noreferrer">
                    <Img fixed={data.instagram.childImageSharp.fixed} alt="Instagram" />
                </a>
            </div>
        </div>
    </footer>
)}