import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [username, setUsername] = useState('');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.chapter}>
          <h2>router 이동 example.</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          &nbsp;&nbsp;
          <Link href={`/users/${username}`}>
            <a>Move To {`"/users/${username}"`}</a>
          </Link>
        </div>

        <div className={styles.chapter}>
          <h2>getServerSideProps Example.</h2>
          <Link href={`/ServerSideTest`}>
            <a>Move To {`ServerSideTest`}</a>
          </Link>
        </div>

        <div className={styles.chapter}>
          <h2>getStaticPropsTest Example.</h2>
          <Link href={`/StaticPropsTest`}>
            <a>Move To {`StaticPropsTest`}</a>
          </Link>
        </div>

        <div className={styles.chapter}>
          <h2>getStaticProps {`&&`} Paths Example.</h2>
          <Link href={`/dynamicstaticprops/jerrynim`}>
            <a>Move To {`/dynamicstaticprops/jerrynim`}</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
