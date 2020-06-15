import Head from 'next/head'
import PropTypes from 'prop-types'

import styles from './styles.module.sass'

const PageLayout = ({ children, title, description }) => (
  <div className={styles.container}>
    <Head>
      <link rel="icon" href="/favicon.png" />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
    </Head>

    <main>{children}</main>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
}

PageLayout.defaultProps = {
  title: 'nextjs-boilerplate',
  description: 'Starting project for next.js web applications',
}

export default PageLayout
