import React from 'react'
import Link from 'gatsby-link'

import style from './style.module.css'
console.log('running', style)
export const Header = ({ siteTitle }) => (
  <div
    className={style.header}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          className={style.link}
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)
export default Header;
