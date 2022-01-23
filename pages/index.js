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
        <title>Create Next App</title>
        <meta name="description" content="Karolina Slawczyk" />
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
