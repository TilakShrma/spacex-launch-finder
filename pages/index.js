import Head from 'next/head';

import HomePage from '../components/homepage';
import PageHeader from '../components/page-header';

const Index = () => {
  return (
    <div id='App'>
      <Head>
          <title> SpaceX Launch finder </title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="keywords" content="NextJs, Javascript, spacex, server side redering" />
          <meta name="description" content="SpaceX launch finder" />
          <meta name="author" content="Tilak Sharma" />

          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
      </Head>
      <main id='homepage'>
        <PageHeader />
        <HomePage />
      </main>
    </div>
  )
};

export default Index;