import Button from '@mui/material/Button';
import Head from 'next/head';
import NavBar from '../components/NavBar/NavBar';
import About from '../components/About/About';

export default function Home() {
  return (
    <>
      <Head>
        <title>MS Confecções</title>
      </Head>
      <NavBar />
      <About />
    </>
  );
}
