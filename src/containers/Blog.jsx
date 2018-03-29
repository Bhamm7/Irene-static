
import React from 'react'
import { withRouteData, Link } from 'react-static'
import Butter from 'buttercms'

const butter = Butter('763fdfaf8d9f5f8179931fad07f2cc98bf3cd155')

//

butter.post.list({ page: 1, page_size: 10 }).then(function(postResponse) {

  console.log(postResponse)
})
butter.content.retrieve(['homepage_headline']).then(function(headlineResponse) {
  let headline = headlineResponse.data.data.homepage_headline
  console.log(headlineResponse)
})

let headline = 'hello'

// export default () => (
//   <div>
//     <h1>Irene's Blog</h1>
//     <br />
//     <h1>{ headline }</h1>
//      <ul>
//       {posts.map(post => (
//         <li key={post.id}>
//           <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
//         </li>
//       ))
//     </ul> 
//   </div>
// )




export default withRouteData(({ posts }) => (
  <div>
    <h1>Irene's Blog</h1>
    <br />
    All Posts:
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  </div> 
))
