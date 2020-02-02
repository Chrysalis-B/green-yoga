import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import "./schedule.css"

export default ({data}) => {
    const content = data.markdownRemark.html;
    const title = data.markdownRemark.frontmatter.title;
    return (
        <Layout>
            <React.Fragment>
                <h1 className="schedule__title">{title}</h1>
                <a className="schedule__link-to-sheet" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTv1tUsiHfzydOB7otZgW-OwkndHfKMS7n5gfLD-iLqOxaDMeUuO-jZr1lzAt8XUJus1vF-0FRufd12/pubhtml?gid=354688609&single=true">Link to schedule</a>
                <iframe title="schedule-sheet" className="schedule__timetable-sheet" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTv1tUsiHfzydOB7otZgW-OwkndHfKMS7n5gfLD-iLqOxaDMeUuO-jZr1lzAt8XUJus1vF-0FRufd12/pubhtml?gid=354688609&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
                <div className="schedule__classes-container" dangerouslySetInnerHTML={{ __html: content }}></div>
            </React.Fragment> 
        </Layout>
    )
}

export const query = graphql`
query {
    markdownRemark(frontmatter: {id: {eq: "schedule-x-berg"}}) {
        frontmatter {
            title
        }
        html
    }
}`;