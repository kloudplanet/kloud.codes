import PostItem from './post-item'
import classes from './posts-grid.module.css'

function PostsGrid(props) {
  const { posts } = props
  const ISSERVER = typeof window === 'undefined'


  return (
    <div className={classes.blogGrid}>
      {posts.map((post) => {
        return <PostItem key={post.slug} post={post} />
      })}
    </div>
  )
}

export default PostsGrid
