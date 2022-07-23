import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';

const Home: NextPage = () => {
  const age = Math.floor((Date.now() - Date.parse('2000-02-27')) / 31557600000)

  return (
    <>
      <Head>
        <title>Jari Kasandiredjo</title>
      </Head>
      <section id='about-me'>
        <h1>Hey! I'm Jari Kasandiredjo</h1>
        <p>
          I'm a {age} year old Computer Science student at Vrije Universiteit Amsterdam<br/>
          I currently do software development for the student rowing 
          club <Link href='https://asopos.nl/'><a>Asopos de Vliet</a></Link><br/>
        </p>
      </section>
      <section id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          <li key='asopos app'>
            <Link 
              href='https://apps.apple.com/app/asopos/id1606014844?platform=iphone'
              >
                <a>
                  Mobile app used for the internal communications of a student 
                  rowing club (Full-Stack)
                </a>
            </Link>
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
          <li>Express (REST API's)</li>
          <li>Gatsby</li>
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
    </>
  )
}

export default Home
