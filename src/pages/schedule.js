import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./schedule.css"

export default ({data}) => {
    const content = data.markdownRemark.html;
    return (
        <Layout>
            <div className="schedule__container" dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export const query = graphql`
query {
    markdownRemark(frontmatter: {id: {eq: "schedule"}}) {
        html
    }
}`;