import React from 'react';

import { Layout, SEO } from '../components/elements';
import StyledAboutPg from '../components/styled/about-pg';

export default function aboutPage() {
  return (
    <Layout>
      <SEO title="About" description="About Us page" />
      <StyledAboutPg>
        <h1>About</h1>
        <div>
          <div className="section starter">
            <h2>Gatsby Emotion Tailwind Starter</h2>
            <p>
              A Gatsby starter combining some of my favourite libraries to
              create an awesome template to build your own{' '}
              <a href="https://jamstack.org/">JAMStack</a> website!
            </p>
          </div>
          <div className="section features">
            <h2>Skills</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JAVA SCRIPT</li>
              <li>PHP</li>
              <li>C++</li>
              <li>Laravel</li>
              <li>CodeIgniter</li>
             </ul>
          </div>
        <div className="section tech">
            <h2>Tech Stack</h2>
            <ul>
              <li>
                <a
                  className="gatsby"
                  href="https://www.gatsbyjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gatsby:
                </a>{' '}
                A blazing fast React framework for building websites & apps.
              </li>
              <li>
                <a
                  className="emotion"
                  href="https://emotion.sh/docs/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Emotion:
                </a>{' '}
                Library designed for writing css styles with JavaScript.
              </li>
              <li>
                <a
                  className="tailwind"
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind CSS:
                </a>{' '}
                CSS framework that gives you all of the building blocks you need
                to build bespoke designs with low-level utility classes.
              </li>
             <li>
                <a
                  className="tailwind"
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  React Js:
                </a>{' '}
                React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
             </li>
            </ul>
          </div>
        </div>
      </StyledAboutPg>
    </Layout>
  );
}
