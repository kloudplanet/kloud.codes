import Head from 'next/head'
import styles from '../../styles/Home.module.css' 
import Image from 'next/image'
import Link from 'next/link' 
import { Fragment, useState, useEffect } from "react";

const Header = ({ title }) => {
  const [sticky, setSticky] = useState(false);

  const trackScroll = () => {
    if (typeof window === "undefined") {
      return;
    } else {
      setSticky(window.scrollY >= 80);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", trackScroll);

    return () => {
      document.removeEventListener("scroll", trackScroll);
    };
  }, []);
 
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <header className={`header ${sticky ? 'sticky' : ''}`}> 
          <div className="container">
            <div className="logo">
              <Link href="/">
                  <Image
                    src="/images/cloudplanet.png"
                    alt="Simform Blog "
                    width={250}
                    height={100}
                    className={'main_logo cursor_pointer'}
                  />
              </Link>
              </div>
          </div>
      </header>
    </Fragment>
  )
}

export default Header;