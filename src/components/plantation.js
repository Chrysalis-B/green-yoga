import React from 'react'
import Img from 'gatsby-image/withIEPolyfill'
import { useStaticQuery, graphql } from 'gatsby'
import "./plantation.css"

export default () => {
    const data = useStaticQuery(
        graphql`
        {
            allFile(filter: {relativeDirectory: {eq: "assets/gallery"}}) {
              edges {
                node {
                    id
                    childImageSharp {
                    fixed(width: 250 height:250) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }         
            markdownRemark(frontmatter: {id: {eq: "plantation"}}) {
                html
            }
        }`
    );
    const images = data.allFile.edges;
    const content = data.markdownRemark.html;
    const imageStyles = {
        margin: '0.75rem',
        borderRadius: '0.3rem'
    };
    return (
        <div>
        <div 
            className="blog-post-content" 
            dangerouslySetInnerHTML={{ __html: content }}>
        </div>
        <div className="plantation__images-container">
        {images.map( image => {
            return (
            <Img fixed={image.node.childImageSharp.fixed}
            style={imageStyles}
            key={image.node.id}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Green Yoga" />  
            )    
        })}
        </div>
        
       </div>
    )
}