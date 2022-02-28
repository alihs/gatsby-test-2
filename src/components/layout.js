/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> |    <a href="javascript:void(0)" class="cmp-revoke-consent">Revoke Consent</a>
        </footer>
      </div>

      <link rel='stylesheet' type='text/css' href='https://cdn-prod.securiti.ai/consent/cookie-consent.css' />
      <script>
      (function () {
        var s = document.createElement('script');
        s.src = 'https://cdn-prod.securiti.ai/consent/cookie-consent-sdk.js';
        s.setAttribute('data-tenant-uuid', 'ac148030-769c-49c3-95d9-312b84bb140d');
        s.setAttribute('data-domain-uuid', '552e3395-4ef0-43a2-aa73-5b88837093d7');
        s.setAttribute('data-backend-url', 'https://app.securiti.ai');
        s.defer = true;
        var parent_node = document.head || document.body;
        parent_node.appendChild(s);
        s.addEventListener('load', function() { window.initCmp(); });
      })()
      </script>


    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
