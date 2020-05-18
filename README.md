## Green Yoga

This project was build with [Gatsby](https://www.gatsbyjs.org/)

## Prerequisites

1. node 11 or higher
2. yarn 1

## Setup

Run `yarn` to install dependencies.

Run `yarn develop` to start the development server on port `8000`.

## Deployment to greenyoga.co

Deployment will be started from your local machine so make sure you are on the most current version of `master` on your local before running the build command

1. `git pull`
2. `git checkout master`
3. Run `yarn deploy` - this will build the bundle into `/public` and move the content to the `gh-pages`-branch on github.
more info: [How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
