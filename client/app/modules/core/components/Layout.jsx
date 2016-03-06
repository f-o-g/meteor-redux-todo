import React from 'react'

const Layout = ({
  children
}) => (
  <div>
    {children}
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.node
}

export default Layout