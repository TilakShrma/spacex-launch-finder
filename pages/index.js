import Head from 'next/head';

import HomePage from '../components/homepage';
import PageHeader from '../components/page-header';

const Index = () => {
  return (
    <div id='App'>
      <Head>
          <title> SpaceX Launch finder </title>
      </Head>
      <main id='homepage'>
        <PageHeader />
        <HomePage />
      </main>
    </div>
  )
};

export default Index;