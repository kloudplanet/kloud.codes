import Link from 'next/link'

const BlogBox = (props) => {
    return (
        <div>
            <Link href={props.slug} passHref><h1 className={"cursor_pointer"}>{props.title}</h1></Link>
        </div>
    )

}

export default BlogBox