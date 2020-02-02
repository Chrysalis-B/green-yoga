import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import PhoneIcon from "../assets/icons/phone.svg"
import SmsIcon from "../assets/icons/sms.svg"
import { useStaticQuery, graphql } from "gatsby"
import ContactData from "../data/contact-p-berg.json"
import NavigationData from "../data/navigation.json"
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
                <p className="footer__address-item">{ContactData.companyName}</p>
                <p className="footer__address-item">{ContactData.name}</p>
                <div><Link className="footer__address-item-link" to={NavigationData.footer[0].url}>{NavigationData.footer[0].text}</Link></div> 
            </div>
            <div className="footer__address-partition">
                <div><a className="footer__address-item-link" href={ContactData.address.url} target="_blank" rel="noopener noreferrer">{ContactData.address.street}</a></div>
                <div><a className="footer__address-item-link" href={ContactData.address.url} target="_blank" rel="noopener noreferrer">{ContactData.address.zip} {ContactData.address.city}</a></div>
            </div>
        </address>
        <div className="footer__container">
            <div className="footer__address-partition">
                <div>
                    <img className="footer__address-icon-phone" src={PhoneIcon} alt="call"/> 
                    <img className="footer__address-icon-phone" src={SmsIcon} alt="text"/>
                    <a className="footer__address-item-link" href={ContactData.tel1.url}>{ContactData.tel1.number}</a>
                </div>
                <div>
                    <img className="footer__address-icon-phone" src={PhoneIcon} alt="call"/> 
                    <img className="footer__address-icon-phone" src={SmsIcon} alt="text"/>
                    <a className="footer__address-item-link" href={ContactData.tel2.url}>{ContactData.tel2.number}</a>
                </div>
                
            </div>
        </div>
        <div className="footer__container">
            <div className="footer__address-partition">
                <a href={ContactData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                    <Img style={styleIcon} fixed={data.facebook.childImageSharp.fixed} alt="Facebook" />
                </a>

                <a href={ContactData.socialMedia.whatsapp} target="_blank" rel="noopener noreferrer">
                    <Img style={styleIcon} fixed={data.whatsapp.childImageSharp.fixed} alt="WhatsApp" />
                </a>
                <a href={ContactData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                    <Img fixed={data.instagram.childImageSharp.fixed} alt="Instagram" />
                </a>
            </div>
        </div>
    </footer>
)}