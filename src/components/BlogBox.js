import Link from 'next/link'

const BlogBox = (props) => {
    return (
        <div>
            <Link href={props.slug}><h1>{props.title}</h1></Link>
        </div>
    )

}

export default BlogBox