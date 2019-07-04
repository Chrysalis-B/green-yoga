import React from "react"
import Layout from "../components/layout"
import ContactData from "../data/contact.json"

export default () => (
    <Layout>
        <div className="studio">
                <div className="contact">
                    <p>Green Yoga</p>
                    <a href={ContactData.address.url} target="_blank" rel="noopener noreferrer"><p>{ContactData.address.street}</p></a>
                    <a href={ContactData.address.url} target="_blank" rel="noopener noreferrer"><p>{ContactData.address.zip} {ContactData.address.city}</p></a>
                    <a href={ContactData.tel1.url}><p>{ContactData.tel1.number}</p></a>
                    <a href={ContactData.tel2.url}><p>{ContactData.tel2.number}</p></a>
                </div>
                {/* <div className="map">
                    <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.7484859330143!2d13.419246717295579!3d52.5379846596298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e0123a140b5%3A0x249d1cbdc20bfd80!2sSredzkistra%C3%9Fe+59%2C+10405+Berlin!5e0!3m2!1sen!2sde!4v1559236774966!5m2!1sen!2sde" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div> */}
        </div>
    </Layout>
)