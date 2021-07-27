import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

const Header = ({ title }) => {
  return (
    <Fragment>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <title>{title}</title>
        <link rel="icon" href="/images/favicon.ico" />

        {/* <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" /> */}
        {
          //   <link
          //   href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
          //   rel="stylesheet"
          // ></link>
        }
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Link href="/">
        <a>
          <Image
            src="/images/cloudplanet.png"
            alt="Simform Blog "
            width={250}
            height={100}
            className={'main_logo cursor_pointer'}
          />
        </a>
      </Link>
    </Fragment>
  )
}

export default Header;