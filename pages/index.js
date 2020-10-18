import Head from 'next/head';
import LandingPage from '../src/components/LandingPage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>SpaceX Launch Programs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </div>
  )
}
