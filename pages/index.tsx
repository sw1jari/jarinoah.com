import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const age = Math.floor((Date.now() - Date.parse('2000-02-27')) / 31557600000)

  return (
    <div className={styles.home}>
      <Head>
        <title>Jari Kasandiredjo</title>
      </Head>
      <section id='about-me'>
        <h1>Hey! I&apos;m Jari Kasandiredjo</h1>
        <p>
          I&apos;m a {age} year old Computer Science student at Vrije 
          Universiteit Amsterdam.
        </p>
        <p>
          I currently do software development for the student rowing club&nbsp;
          <Link href='https://asopos.nl/'><a>Asopos de Vliet</a></Link>
        </p>
      </section>
      <section id='portfolio' className={styles.portfolio}>
        <h1>Portfolio</h1>
        <ul>
          <div className={styles.portfolioHead}>
            <h3>Full-Stack Developer</h3>
            <div className={styles.portfolioHeadChildren}>
              <p>Bonnie</p>
              <p>2022 - 2023</p>
            </div>
          </div>
          <li key='bonnie'>
            <p>
              Bonnie is a system that converts POS receipts to PDFs which you
              could then download from a server to a mobile app via an NFC 
              tag.
            </p>
            <p>
              I worked on the mobile app, the software for the device that 
              converts the receipts to PDFs and uploads them and writes the NFC.
              I also added support receipts sent via email, these would also be 
              sent to the server and be scannable in store via the NFC tag.
            </p>
            <p>
              <Link href='/flyer.webp'>I also made a flyer for them!</Link>
            </p>
            <p>Tech stack: Python, Ruby on Rails, Flutter</p>
          </li>
          <div className={styles.portfolioHead}>
            <h3>Full-Stack Developer</h3>
            <div className={styles.portfolioHeadChildren}>
              <p>Asopos de Vliet</p>
              <p>2021 - present</p>
            </div>
          </div>
          <li key='asopos-app'>
            <Link 
              href='https://apps.apple.com/app/asopos/id1606014844?platform=iphone'
              >
                <a target='_blank'>
                  Mobile app used for the internal communication of a student 
                  rowing club
                </a>
            </Link>
            <p>Tech stack: Docker, MongoDB, Express, Flutter</p>
          </li>
          <div className={styles.portfolioHead}>
            <h3>Frontend Developer</h3>
            <div className={styles.portfolioHeadChildren}>
              <p>Asopos de Vliet</p>
              <p>2021 - present</p>
            </div>
          </div>
          <li key='northwave-regatta'>
            <Link 
              href='https://northwaveregatta.nl'
              >
                <a target='_blank'>
                  Static site and CMS for the Northwave Regatta rowing 
                  competition
                </a>
            </Link>
            <p>Tech stack: Strapi, GraphQL, Gatsby, React</p>
          </li>
          <div className={styles.portfolioHead}>
            <h3>Frontend Developer</h3>
            <div className={styles.portfolioHeadChildren}>
              <p>Asopos de Vliet</p>
              <p>2020 - present</p>
            </div>
          </div>
          <li key='asopos-nl'>
            <Link 
              href='https://asopos.nl'
              >
                <a target='_blank'>
                Static site and CMS for the student rowing club Asopos de Vliet
                </a>
            </Link>
            <p>Tech stack: Strapi, GraphQL, Gatsby, React</p>
          </li>
        </ul>
      </section>
      <section id='skills'>
        <h1>Skills</h1>
        <ul>
          <li>Dart / Flutter</li>
          <li>TypeScript / JavaScript</li>
          <li>React</li>
          <li>Python</li>
          <li>C(++)</li>
          <li>Ruby on Rails</li>
          <li>REST API&apos;s</li>
          <li>GraphQL</li>
          <li>SQL</li>
          <li>Linux</li>
          <li>Docker</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
