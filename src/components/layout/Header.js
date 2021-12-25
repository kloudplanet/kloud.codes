import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, useState, useEffect } from 'react'

const Header = ({ title }) => {
  const [sticky, setSticky] = useState(false)
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const trackScroll = () => {
    if (typeof window === 'undefined') {
      return
    } else {
      setSticky(window.scrollY >= 80)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', trackScroll)

    return () => {
      document.removeEventListener('scroll', trackScroll)
    }
  }, [])
  const openMenu = () => {
    setOpenMobileMenu(!openMobileMenu)
  }
  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>

      <header className={`header ${sticky ? 'sticky' : ''}`}>
        <div className="container">
          <div className="header-row">
            <div className="logo">
              <Link href="/">
                {
                  // <Image
                  //   src="/images/cloudplanet.png"
                  //   alt="Simform Blog "
                  //   width={250}
                  //   height={100}
                  //   className={'main_logo cursor_pointer'}
                  // />
                }
                <h1 style={{ cursor: 'pointer' }}>Kloud.Codes</h1>
              </Link>
            </div>
            {
              // <div className="menu-btn">
              //   <button type="button" className="mobile-btn" onClick={openMenu}>
              //     {!openMobileMenu ? (
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         fill="currentColor"
              //         width="40"
              //         height="40"
              //         viewBox="0 0 24 24"
              //       >
              //         <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
              //       </svg>
              //     ) : (
              //       <svg
              //         xmlns="http://www.w3.org/2000/svg"
              //         fill="currentColor"
              //         width="40"
              //         height="40"
              //         viewBox="0 0 24 24"
              //       >
              //         <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
              //       </svg>
              //     )}
              //   </button>
              // </div>
              // <div className={`menu-row ${openMobileMenu ? 'open' : ''}`}>
              //   <ul>
              //     <li>
              //       <Link href="/">
              //         <a>Home</a>
              //       </Link>
              //     </li>
              //     <li>
              //       <Link href="/">
              //         <a>Home</a>
              //       </Link>
              //     </li>
              //     <li>
              //       <Link href="/">
              //         <a>Home</a>
              //       </Link>
              //     </li>
              //     <li>
              //       <Link href="/">
              //         <a>Home</a>
              //       </Link>
              //     </li>
              //     <li>
              //       <Link href="/">
              //         <a>Home</a>
              //       </Link>
              //     </li>
              //   </ul>
              // </div>
            }
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header
