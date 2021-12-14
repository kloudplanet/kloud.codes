import { Fragment } from 'react'

import Layout from '../components/layout/Layout'
import { BlogApi } from '../services/blog'
import AllPosts from '../components/post/all-post'

import styles from './../styles/Home.module.css'


const Home = (props) => {
  const { posts } = props
  return (
    <Layout title="Blog Home">
      <div className="pageHeader">
        <div className="container">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="pageWrapper">
        <div className="container">
          <div className="wrapperCard">
          <AllPosts posts={posts} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const api = new BlogApi()
  const allPosts = await api.fetchBlogEntries()
  return { props: { posts: allPosts } }
}
