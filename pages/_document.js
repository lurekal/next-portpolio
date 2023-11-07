import { Html, Main, NextScript } from 'next/document'

import Head from 'next/head'


export default function Document() {
  return (
    <Html lang="ko">

         <Head>
           <title>희준 포트폴리오</title>
           <meta name='description' content='오늘도 화이팅!'/>
           <link rel='icon' href='/favicon.ico'/>
         </Head>
         <body>
             <Main />
             <NextScript />

         </body>

    
    </Html>
  )
}


