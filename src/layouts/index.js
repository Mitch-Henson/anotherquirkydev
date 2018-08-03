import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const Layout = ({ children, data }) => (
  <div style={{
    height: '100%'
  }}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A personal website for Mitchell Henson' },
        { name: 'keywords', content: 'developer, programmer, aussie' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
      }}
    >
      {children()}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
