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
      </Head>
      <main id='homepage'>
        <PageHeader />
        <HomePage />
      </main>
    </div>
  )
};

export default Index;