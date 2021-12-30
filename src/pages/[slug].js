import { Fragment } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

//coy
//ghcolors
//prism
import { BlogApi } from '../services/blog'
import Layout from '../components/layout/Layout'

export const QuoteICon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M11 9.275C11 14.416 7.108 19.794 1 21l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746A5.213 5.213 0 010 7.979C0 4.797 2.584 3 5.199 3 8.214 3 11 5.305 11 9.275zm13 0C24 14.416 20.108 19.794 14 21l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746A5.213 5.213 0 0113 7.979C13 4.797 15.584 3 18.199 3 21.214 3 24 5.305 24 9.275z"></path>
    </svg>
  )
}

const BlogDetails = (props) => {
  const {
    entry: { title, tags, publishDate, body, coverImage, ellipsis }
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
            <Image src={`https:${image.url}`} alt={image.alt} layout="fill" />
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
            style={vscDarkPlus}
            language={language}
            children={value}
            showLineNumbers={false}
            useInlineStyles={true}
            customStyle={{
              borderRadius: '15px',
              boxShadow:
                '0 1px 18px 0 rgb(0 0 0 / 5%), 0 3px 5px -1px rgb(0 0 0 / 7%)',
              maxWidth: '800px',
              width: '100%',
              margin: '0 auto 20px',
              display: 'inline-block'
            }}
          />
        </div>
      )
    },
    blockquote(blockquote) {
      return (
        <div className="blockquote-card">
          <span className="iconTop">
            <QuoteICon />
          </span>
          <span className="iconBottom">
            <QuoteICon />
          </span>
          <blockquote>{blockquote.children}</blockquote>
        </div>
      )
    }
  }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={ellipsis} />
      </Head>
      <div className="pageHeader">
        <div className="container">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="pageWrapper">
        <div className="container">
          <div className="wrapperCard">
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
          </div>
        </div>
      </div>
    </Fragment>
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
