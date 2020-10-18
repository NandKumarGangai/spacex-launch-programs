import Head from 'next/head';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../src/components/LandingPage'));

export default function App() {
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
