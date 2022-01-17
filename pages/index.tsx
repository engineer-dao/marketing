import type { NextPage } from 'next';
import Head from 'next/head';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Resources from '../components/Resources';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>EngineerDAO</title>
        <meta
          name="description"
          content="Anonymous, permissionless bounties for software engineers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
      <Resources />
      <Footer />
    </div>
  );
};

export default Home;
