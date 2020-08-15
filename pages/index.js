import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../components/homepage';
import PageHeader from '../components/page-header';

const Index = () => {
  //const dispatch = useDispatch();
  //const {posts} = useSelector(state => state.posts);

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