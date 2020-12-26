import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({title}) => {
    return (
        <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <Link href="/">
        <Image
        src="/images/cloudplanet.png"
        alt="Cloud Planet Blog "
        width={250}
        height={100}
      />
      </Link>
        </>
    )
}

export default Header;