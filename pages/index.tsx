import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';
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
          I&apos;m a {age} year old Computer Science student at Vrije Universiteit Amsterdam<br/>
          I currently do software development for the student rowing 
          club <Link href='https://asopos.nl/'><a>Asopos de Vliet</a></Link><br/>
        </p>
      </section>
      <section id='portfolio' className={styles.portfolio}>
        <h1>Portfolio</h1>
        <ul>
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
                <a>
                  Mobile app used for the internal communications of a student 
                  rowing club
                </a>
            </Link>
            <p>Tech stack: Docker, MongoDB, Express, Flutter</p>
          </li>
          <div className={styles.portfolioHead}>
            <h3>Full-Stack Developer</h3>
            <div className={styles.portfolioHeadChildren}>
              <p>Asopos de Vliet</p>
              <p>2021 - present</p>
            </div>
          </div>
          <li key='northwave-regatta'>
            <Link 
              href='https://northwaveregatta.nl'
              >
                <a>
                  Static site and CMS for the Northwave Regatta rowing competition
                </a>
            </Link>
            <p>Tech stack: Strapi, GraphQL, Gatsby, React</p>
          </li>
          <div className={styles.portfolioHead}>
            <h3>Full-Stack Developer</h3>
            <div className={styles.portfolioHeadChildren}>
              <p>Asopos de Vliet</p>
              <p>2020 - present</p>
            </div>
          </div>
          <li key='asopos-nl'>
            <Link 
              href='https://asopos.nl'
              >
                <a>
                Static site and CMS for the student rowing club Asopos de Vliet
                </a>
            </Link>
            <p>Tech stack: Strapi, GraphQL, Gatsby, React</p>
          </li>
        </ul>
      </section>
      <section id='skills'>
        <h1>Skills</h1>
        <h3>2+ Years experience</h3>
        <ul>
          <li>TypeScript / JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express (REST API&apos;s)</li>
          <li>Gatsby</li>
          <li>GraphQL</li>
          <li>SQL</li>
          <li>Linux</li>
          <li>Docker</li>
        </ul>
        <h3>1+ Years experience</h3>
        <ul>
          <li>Flutter</li>
          <li>Dart</li>
          <li>MongoDB</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
