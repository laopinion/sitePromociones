import Layout from '../components/Layout.js'
import Slides from '../components/containers/Slides'
import ProductsGrid from '../components/ProductsGrid'

const Home = () => {
  return (
    <Layout title='Promociones'>
      <Slides />
      <ProductsGrid />
    </Layout>
  )
}

export default Home

// import Link from 'next/link'

// function getPosts () {
//   return [
//     { id: 'hello-nextjs', title: 'Hello Next.js' },
//     { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
//     { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
//   ]
// }

// // Doc -> https://github.com/zeit/next.js#css-in-js
// const PostLink = ({ post }) => (
//   <li>
//     <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
//       <a>{post.title}</a>
//     </Link>
//     <style jsx>{`
//       li {
//         list-style: none;
//         margin: 5px 0;
//       }

//       a {
//         text-decoration: none;
//         color: blue;
//         font-family: 'Arial';
//       }

//       a:hover {
//         opacity: 0.6;
//       }
//     `}</style>
//   </li>
// )

// export default function Blog () {
//   return (
//     <Layout title='Promociones'>
//       <h1>My Blog</h1>
//       <ul>
//         {getPosts().map(post => (
//           <PostLink key={post.id} post={post} />
//         ))}
//       </ul>
//       <style jsx>{`
//         h1,
//         a {
//           font-family: 'Arial';
//         }

//         ul {
//           padding: 0;
//         }

//         li {
//           list-style: none;
//           margin: 5px 0;
//         }

//         a {
//           text-decoration: none;
//           color: blue;
//         }

//         a:hover {
//           opacity: 0.6;
//         }
//       `}</style>
//     </Layout>
//   )
// }
