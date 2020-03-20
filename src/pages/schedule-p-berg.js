import React from "react"
import Layout from "../components/layout"
import ContactData from "../data/contact-p-berg.json"
import { graphql } from "gatsby"
import "./schedule.css"

export default ({ data }) => {
    const content = data.markdownRemark.html
    const title = data.markdownRemark.frontmatter.title
    return (
        <Layout>
            <React.Fragment>
                <h1 className="schedule__title">{title}</h1>
                <div className="schedule__address-container">
                    <p>{ContactData.address.street}</p>
                    <p>
                        {ContactData.address.zip} {ContactData.address.city}
                    </p>
                </div>
                <a
                    className="schedule__link-to-sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://widget.fitogram.pro/green-yoga?fito-embedded=true&w=/list-view"
                >
                    Link to schedule
                </a>
                <iframe
                    class="schedule__timetable-sheet"
                    frameborder="0"
                    title="schedule"
                    id="embeddedFrame"
                    name="embeddedFrame"
                    scrolling="yes"
                    src="https://widget.fitogram.pro/green-yoga?fito-embedded=true&w=/list-view"
                    width="100%"
                    height="800px">
                </iframe>
                <div
                    className="schedule__classes-container"
                    dangerouslySetInnerHTML={{ __html: content }}
                ></div>
            </React.Fragment>
        </Layout>
    )
}

export const query = graphql`
    query {
        markdownRemark(frontmatter: { id: { eq: "schedule-p-berg" } }) {
            frontmatter {
                title
            }
            html
        }
    }
`
