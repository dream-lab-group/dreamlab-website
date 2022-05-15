import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

/* Components */
import Navigation from './Components/Navigation'
import Agentur from './Components/Agentur'
import Projekt from './Components/Projekt'
import Team from './Components/Team'
import Kontakt from './Components/Kontakt'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        {/* Title */}
        <title>dream lab</title>
        {/* Description */}
        <meta name="description" content="Generated by create next app" />
        {/* Responsive Meta Tag - Mui */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navigation */}
      <Navigation />
      {/* Components Content */}
      <Agentur />
      <Projekt />
      <Team />
      <Kontakt />

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
