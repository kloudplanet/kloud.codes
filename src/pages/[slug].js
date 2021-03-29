import { BlogApi } from '../services/blog'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout/Layout'

const BlogDetails = (props) => {
    const { entry: {title, tags, publishDate, body, coverImage} } = props

    if(Object.keys(props.entry).length === 0 && props.entry.constructor === Object){
      return "Loading...."
    }
    
    return (
        <Layout title={title}>
        <h1>{title}</h1>

        {coverImage?.imageUrl && <Image
        src={coverImage.imageUrl}
        alt={coverImage.description || `${title}-Image`}
        width={500}
        height={500}
      />}
      <div className="blog_content">
      <ReactMarkdown children={body}/>
      </div>

        <div>

        </div>
        </Layout>
    )

}

export default BlogDetails

// This function gets called at build time
export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const api = new BlogApi();
    const entries = await api.fetchBlogEntries();    
  
    // Get the paths we want to pre-render based on posts
    const paths = entries.map((post) => ({
      params: { slug: post.slug, id: post.id },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  // This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/blog-post, then params.slug is blog-post
    const api = new BlogApi();
    const entry = await api.fetchBlogById(params.slug);
  
    // Pass post data to the page via props
    return { props: { entry } }
  }