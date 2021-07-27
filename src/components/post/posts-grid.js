import PostItem from './post-item'
import classes from './posts-grid.module.css'

function PostsGrid(props) {
  const { posts } = props
  const ISSERVER = typeof window === 'undefined'

  if (!ISSERVER) {
    console.log(localStorage.getItem('default-item'))
  }

  return (
    <ul className={classes.grid}>
      {posts.map((post, i) => {
        // if (i + 1 === localStorage.getItem('default-item')) return;
        return <PostItem key={post.slug} post={post} />
      })}
    </ul>
  )
}

export default PostsGrid
