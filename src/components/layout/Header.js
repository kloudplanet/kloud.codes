import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({title}) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/images/favicon.ico" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            {/* <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" /> */}
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap" rel="stylesheet"></link>
        </Head>
        <Link href="/">
        <Image
        src="/images/cloudplanet.png"
        alt="Cloud Planet Blog "
        width={250}
        height={100}
        className={"main_logo cursor_pointer"}
      />
      </Link>
        </>
    )
}

export default Header;