import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div className="post-container">
    <div className="post-back-button"><Link to="/blog/">{'<'} Back</Link></div>
    <div className="post-title" dangerouslySetInnerHTML={{__html: post.title}} />
    <div className="post-body" dangerouslySetInnerHTML={{__html: post.body}} />
  </div>
))
