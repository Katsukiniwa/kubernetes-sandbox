import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

// host: products-api.default.svc.cluster.local
// host: service-name.namespace name.svc.cluster-domain

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_HOST}/products`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { products: data.products || [] } }
}

export default function Home({ products }) {
  // const [products, setProducts] = useState([])

  // useEffect(async ()=> {
  //   ;(async function () {
  //     const result = await fetch(`${process.env.NEXT_PUBLIC_PRODUCT_API_HOST}/products`)
  //     const json = await result.json()
  //     setProducts(json.products)
  //   })()
  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>products list</h1>
        {products.map(product => (
          <div>
            <p>id: {product.id}</p>
            <p>name: {product.name}</p>
          </div>
        ))}
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> on Docker!
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
