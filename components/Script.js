import React from 'react'

export default ({ children }) => (
  // eslint-disable-next-line standard/object-curly-even-spacing
  <script dangerouslySetInnerHTML={{ __html: `(${children.toString()})();` }} />
)
