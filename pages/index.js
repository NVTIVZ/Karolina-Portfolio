import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Karolina Slawczyk - UI/UX </title>
        <meta name="description" content="Karolina Slawczyk" />
        <meta name="description" content="UI/UX Designer" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <NavBar />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
