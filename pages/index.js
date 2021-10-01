import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const Chat = dynamic(() => import('../components/Chat'), { ssr: false });

export default function Index() {
  return (
    <div>
      <Head>
        <title>Global Meet</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
        <script src="https://meet.jit.si/libs/lib-jitsi-meet.min.js"></script>
      </Head>
      <main>
        <Chat />
      </main>
    </div>
  );
}
