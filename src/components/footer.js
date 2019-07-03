import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import PhoneIcon from "../assets/icons/phone.svg"
import SmsIcon from "../assets/icons/sms.svg"
import { useStaticQuery, graphql } from "gatsby"
import FooterData from "../data/footer.json"
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
                <p className="footer__address-item">{FooterData.companyName}</p>
                <p className="footer__address-item">{FooterData.name}</p>
                <div><Link className="footer__address-item-link" to="/imprint">Imprint</Link></div> 
            </div>
            <div className="footer__address-partition">
                <div><a className="footer__address-item-link" href={FooterData.address.url} target="_blank" rel="noopener noreferrer">{FooterData.address.street}</a></div>
                <div><a className="footer__address-item-link" href={FooterData.address.url} target="_blank" rel="noopener noreferrer">{FooterData.address.zip} {FooterData.address.city}</a></div>
            </div>
        </address>
        <div className="footer__container">
            <div className="footer__address-partition">
                <div>
                    <img className="footer__address-icon-phone" src={PhoneIcon} alt="call"/> 
                    <img className="footer__address-icon-phone" src={SmsIcon} alt="text"/>
                    <a className="footer__address-item-link" href={FooterData.tel1.url}>{FooterData.tel1.number}</a>
                </div>
                <div>
                    <img className="footer__address-icon-phone" src={PhoneIcon} alt="call"/> 
                    <img className="footer__address-icon-phone" src={SmsIcon} alt="text"/>
                    <a className="footer__address-item-link" href={FooterData.tel2.url}>{FooterData.tel2.number}</a>
                </div>
                
            </div>
        </div>
        <div className="footer__container">
            <div className="footer__address-partition">
                <a href={FooterData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Img style={styleIcon} fixed={data.facebook.childImageSharp.fixed} alt="Facebook" />
                </a>

                <a href={FooterData.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Img style={styleIcon} fixed={data.whatsapp.childImageSharp.fixed} alt="WhatsApp" />
                </a>
                <a href={FooterData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Img fixed={data.instagram.childImageSharp.fixed} alt="Instagram" />
                </a>
            </div>
        </div>
    </footer>
)}