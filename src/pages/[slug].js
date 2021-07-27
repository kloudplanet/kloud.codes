import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Gist from 'react-gist'
//coy
//ghcolors
//prism
import { BlogApi } from '../services/blog'
import Layout from '../components/layout/Layout'

const BlogDetails = (props) => {
  const {
    entry: { title, tags, publishDate, body, coverImage }
  } = props

  if (
    Object.keys(props.entry).length === 0 &&
    props.entry.constructor === Object
  ) {
    return 'Loading....'
  }

  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph
      if (node.children[0].type === 'image') {
        const image = node.children[0]
        return (
          <div className="content-image">
            <Image
              src={`https:${image.url}`}
              alt={image.alt}
              width={800}
              height={800}
            />
          </div>
        )
      }

      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { language, value } = code
      return (
        <div className="code-center">
          <SyntaxHighlighter
            style={ghcolors}
            language={language}
            children={value}
            showLineNumbers={true}
            useInlineStyles={true}
            customStyle={{
              // border: '1px solid #FF914C',
              width: '50%',
              //backgroundColor: '#ffd7b5',
              display: 'inline-block'
            }}
          />
        </div>
      )
    },
    blockquote(blockquote) {
      return (
        <div className="theme-color">
          <blockquote>{blockquote.children}</blockquote>
        </div>
      )
    }
  }

  return (
    <Layout title={title}>
      <h1>{title}</h1>

      {coverImage?.imageUrl && (
        <Image
          src={coverImage.imageUrl}
          alt={coverImage.description || `${title}-Image`}
          width={500}
          height={500}
        />
      )}

      <div className="blog_content">
        <ReactMarkdown renderers={customRenderers}>{body}</ReactMarkdown>
      </div>

      <div></div>
    </Layout>
  )
}

export default BlogDetails

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const api = new BlogApi()
  const entries = await api.fetchBlogEntries()

  // Get the paths we want to pre-render based on posts
  const paths = entries.map((post) => ({
    params: { slug: post.slug, id: post.id }
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/blog-post, then params.slug is blog-post
  const api = new BlogApi()
  const entry = await api.fetchBlogById(params.slug)

  // Pass post data to the page via props
  return { props: { entry } }
}
