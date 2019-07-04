import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import { useStaticQuery, graphql } from "gatsby";

export default (props) => {
    const data = useStaticQuery(
        graphql`
        query {
          file(relativePath: { eq: "assets/logos/logo.jpg" }) {
            childImageSharp {
              fixed(width: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `
    );
    return (<Img fixed={data.file.childImageSharp.fixed}
        objectFit="cover"
        objectPosition="50% 50%"
        alt="Green Yoga" />)
}