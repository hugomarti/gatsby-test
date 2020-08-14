import React from "react"
import Layout from "../components/layout"

import styles from "../components/products.module.css"

const products = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is out products page.</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
          libero harum praesentium laborum perferendis soluta aperiam deserunt
          possimus id excepturi. Amet nulla alias dolorem distinctio minus,
          cupiditate eveniet officiis assumenda rerum doloribus libero qui
          voluptatum eum odit, iusto impedit fugit.
        </p>
      </div>
    </Layout>
  )
}

export default products
