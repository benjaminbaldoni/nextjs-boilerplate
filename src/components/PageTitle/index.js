import PropTypes from 'prop-types'

import styles from './styles.module.sass'

const PageTitle = ({ children }) => (
  <div className={styles.pageTitle}>
    {children}
  </div>
)

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default PageTitle
