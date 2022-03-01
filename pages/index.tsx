import Button from '@mui/material/Button';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>MS Confecções</title>
      </Head>
      <div>
        <h1>Projeto MS Confecções</h1>
        <Button variant="contained"> Olá Mundo</Button>
      </div>
    </>
  );
}
