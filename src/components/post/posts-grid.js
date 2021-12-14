import PostItem from './post-item'
import classes from './posts-grid.module.css'

function PostsGrid(props) {
  const { posts } = props
  const ISSERVER = typeof window === 'undefined'

  if (!ISSERVER) {
    console.log(localStorage.getItem('default-item'))
  }

  return (
    <div className={classes.blogGrid}>
      {posts.map((post, i) => {
        // if (i + 1 === localStorage.getItem('default-item')) return;
        return <PostItem key={post.slug} post={post} />
      })}
    </div>
  )
}

export default PostsGrid
