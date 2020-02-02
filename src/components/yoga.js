import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import "./yoga.css"

export default () => {
    const data = useStaticQuery(
        graphql`
        {        
            markdownRemark(frontmatter: {id: {eq: "yoga"}}) {
                html
            }
        }`
    );
    const content = data.markdownRemark.html;
    return (
        <div>
            <div className="yoga__text-container" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    )
}