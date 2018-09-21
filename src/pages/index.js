import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="content">

      <h1>Documentation for React Projects</h1>

      <p>Automatically generate documentation for your project using MDX, react-docgen, and GatsbyJS.</p>
    
      <h2>Features</h2>

      <ul>
        <li>📝 <a href="https://github.com/mdx-js/mdx">MDX</a> - Write your documentation in Markdown and include React components using JSX!</li>
        <li>♻️ <a href="https://github.com/reactjs/react-docgen">react-docgen</a> - Automatically parses all your React components (functional, stateful, even stateless!) for JS Docblocks and Prop Types.</li>
        <li>⚛️ <a href="http://gatsby.org" rel="nofollow">GatsbyJS</a> - Creates local GraphQL server to build static version of documentation (easily deployed on a CDN or GHPages, Netlify, etc)</li>
        <li>🗄 Props Table - Component for displaying component props in a table format</li>
        <li>🎛 Modular - Easily install inside existing projects!</li>
        <li>⚖️ Lighweight - Only what you need, no extra dependencies.</li>
      </ul>
      
      <h2>Quick Start</h2>
      
      <ol>
        <li><code>git clone</code> project</li>
        <li>Update <code>gatsby-config.js</code> with the location of your components + MDX <em>(see: "Changing source folder")</em></li>
        <li><code>npm install</code> inside project</li>
        <li><code>npm run develop</code></li>
        <li>View your documentation: <a href="http://localhost:8000" rel="nofollow">http://localhost:8000</a></li>
      </ol>

      <Link to="about" className="btn">
        Get Started
      </Link>
    </div>
  </Layout>
)

export default IndexPage
