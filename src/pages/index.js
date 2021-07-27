import { Fragment } from 'react'

import Layout from '../components/layout/Layout'
import { BlogApi } from '../services/blog'

import AllPosts from '../components/post/all-post'

const Home = (props) => {
  const { posts } = props
  return (
    <Layout title="Blog Home">
      <AllPosts posts={posts} />
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  const api = new BlogApi()
  const allPosts = await api.fetchBlogEntries()
  return { props: { posts: allPosts } }
}
