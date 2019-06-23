import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import "./pranic.css"

export default () => {
    const data = useStaticQuery(
        graphql`
        {        
            markdownRemark(frontmatter: {id: {eq: "pranic"}}) {
                html
            }
        }`
    );
    const content = data.markdownRemark.html;
    return (
        <div>
            <div className="pranic__text-container" dangerouslySetInnerHTML={{ __html: content }}></div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/I6bdx7zM9bw" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="Introduction to Pranic Healing"></iframe>
        </div>
    )
}