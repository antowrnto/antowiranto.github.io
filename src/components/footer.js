import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import StyledFooter from './styled/footer';
import SocialList from './elements/social-list';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <p className="title">
        <svg>
          <use xlinkHref="/logo.svg#logo" />
        </svg>
        Portfolio Anto Wiranto
      </p>
      <SocialList />
      <p className="author">
        Created by{' '}
        <a
          href="https://github.com/antowrnto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anto Wiranto 👑
        </a>
      </p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
