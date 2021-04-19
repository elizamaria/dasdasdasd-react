import React from 'react'

import Helmet from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>dasdasdasd</title>
        <meta property="og:title" content="dasdasdasd" />
      </Helmet>
    </div>
  )
}

export default Home
