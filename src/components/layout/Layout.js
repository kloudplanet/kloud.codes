
import styles from '../../styles/Home.module.css'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div className={styles.homepage}>
      <Header />
      {props?.children}
      <Footer />
    </div>
  )
}

export default Layout