import { Fragment } from 'react'
import Head from 'next/head'
import { BlogApi } from '../services/blog'
import AllPosts from '../components/post/all-post'



const Home = (props) => {
  const { posts } = props
  return (
    <Fragment>
      <Head>
        <title>Kloud.codes Home for informative blogs</title>
        <meta
          name="discription"
          content="Kloud.codes provide information on linux, javascript and other cloud related technologies"
        />
      </Head>
      <div className="pageHeader">
        <div className="container"></div>
      </div>
      <div className="pageWrapper">
        <div className="container">
          <div className="wrapperCard">
            <AllPosts posts={posts} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home

export async function getStaticProps() {
  const api = new BlogApi()
  const allPosts = await api.fetchBlogEntries()
  return { props: { posts: allPosts } }
}
