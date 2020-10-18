import Head from 'next/head';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../src/components/LandingPage'));

export default function App() {
  return (
    <div>
      <Head>
        <title>SpaceX Launch Programs</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='theme-color' content='#90cdf4' />
        <link rel='apple-touch-icon' href='/logo-96x96.png' />
        <meta name='apple-mobile-web-app-status-bar' content='#90cdf4' />
      </Head>
      <main>
        <LandingPage />
      </main>
    </div>
  );
}
