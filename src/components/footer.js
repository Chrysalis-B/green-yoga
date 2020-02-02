import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import PhoneIcon from "../assets/icons/phone.svg"
import SmsIcon from "../assets/icons/sms.svg"
import { useStaticQuery, graphql } from "gatsby"
import ContactDataPBerg from "../data/contact-p-berg.json"
import ContactDataXBerg from "../data/contact-x-berg.json"
import NavigationData from "../data/navigation.json"
import "./footer.css"

export default () => {
    const data = useStaticQuery(
        graphql`
            query {
                facebook: file(
                    relativePath: { eq: "assets/icons/facebook.png" }
                ) {
                    childImageSharp {
                        fixed(width: 40) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                whatsapp: file(
                    relativePath: { eq: "assets/icons/whats-app.png" }
                ) {
                    childImageSharp {
                        fixed(width: 20) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                instagram: file(
                    relativePath: { eq: "assets/icons/instagram.png" }
                ) {
                    childImageSharp {
                        fixed(width: 60) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    )
    const styleIcon = {
        margin: "0.75rem",
    }
    let contactData = []
    contactData.push(ContactDataPBerg)
    contactData.push(ContactDataXBerg)
    return (
        <footer className="footer__wrapper">
            {contactData.map(contact => {
                return (
                    <React.Fragment key={contact.studioName}>
                        <div className="footer__studio-wrapper">
                            <div className="footer__address-partition">
                                <p className="footer__address-item-title">
                                    {contact.studioName}
                                </p>
                            </div>
                            <div className="footer__address-partition">
                                <p className="footer__address-item">
                                    {contact.contactName}
                                </p>
                                <div>
                                    <img
                                        className="footer__address-icon-phone"
                                        src={PhoneIcon}
                                        alt="call"
                                    />
                                    <img
                                        className="footer__address-icon-phone"
                                        src={SmsIcon}
                                        alt="text"
                                    />
                                    <a
                                        className="footer__address-item-link"
                                        href={contact.tel1.url}
                                    >
                                        {contact.tel1.number}
                                    </a>
                                    <div className="footer__address-item-container">
                                        <a
                                            href={contact.whatsapp.url}
                                            className="footer__address-item-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Img
                                                style={{
                                                    marginRight: "0.25rem",
                                                }}
                                                fixed={
                                                    data.whatsapp
                                                        .childImageSharp.fixed
                                                }
                                                alt="WhatsApp"
                                            />
                                        </a>
                                        <a
                                            href={contact.whatsapp.url}
                                            className="footer__address-item-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            WhatsApp
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <address className="footer__container-address">
                                <div className="footer__address-partition">
                                    <div>
                                        <a
                                            className="footer__address-item-link"
                                            href={contact.address.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contact.address.street}
                                        </a>
                                    </div>
                                    <div>
                                        <span className="footer__address-item">
                                            {contact.address.street2}
                                        </span>
                                    </div>
                                    <div>
                                        <a
                                            className="footer__address-item-link"
                                            href={contact.address.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {contact.address.zip}{" "}
                                            {contact.address.city}
                                        </a>
                                    </div>
                                </div>
                            </address>
                            {contact.socialMedia && (
                                <div className="footer__container">
                                    <div>
                                        {contact.socialMedia.facebook && (
                                            <a
                                                href={
                                                    contact.socialMedia.facebook
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Img
                                                    style={styleIcon}
                                                    fixed={
                                                        data.facebook
                                                            .childImageSharp
                                                            .fixed
                                                    }
                                                    alt="Facebook"
                                                />
                                            </a>
                                        )}
                                        {contact.socialMedia.instagram && (
                                            <a
                                                href={
                                                    contact.socialMedia
                                                        .instagram
                                                }
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Img
                                                    fixed={
                                                        data.instagram
                                                            .childImageSharp
                                                            .fixed
                                                    }
                                                    alt="Instagram"
                                                />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </React.Fragment>
                )
            })}
            <div className="footer__address-partition">
                <div>
                    <Link
                        className="footer__address-item-link"
                        to={NavigationData.footer[0].url}
                    >
                        {NavigationData.footer[0].text}
                    </Link>
                </div>
            </div>
        </footer>
    )
}
