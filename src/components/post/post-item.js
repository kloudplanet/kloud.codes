import Link from 'next/link'
import Image from 'next/image'

import classes from './post-item.module.css'

const PostItem = (props) => {
  const { post } = props
  return (
    <div className={classes.postCol}>
      <Link href={post.slug}>
        <div className={classes.postCard}>
          {/* <div className="thumb">
            <Image
              src={
                'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
              }
              alt={post.title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div> */} 
            <p className={classes.postCardTime}>{post.publishDate}</p>
            <h3>{post.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default PostItem
