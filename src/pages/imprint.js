import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({data}) => {
    const content = data.markdownRemark.html;
    return (
        <Layout>
            <div style={{padding: '1rem'}} dangerouslySetInnerHTML={{ __html: content }}></div>
        </Layout>
    )
}

export const query = graphql`
query {
    markdownRemark(frontmatter: {id: {eq: "imprint"}}) {
        html
    }
}`;
