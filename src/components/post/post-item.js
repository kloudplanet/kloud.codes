import Link from 'next/link'
import Image from 'next/image'

import classes from './post-item.module.css'

const PostItem = (props) => {
  const { post } = props
  return (
    <li className={classes.post}>
      <Link href={post.slug}>
        <a>
          <div className={classes.image}>
            <Image
              src={
                'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
              }
              alt={post.title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{post.title}</h3>
            <time>{post.publishDate}</time>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
