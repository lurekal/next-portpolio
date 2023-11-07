import { Html, Head, Main, NextScript } from 'next/document'




export default function Document() {
  return (
    <Html lang="ko">

         <Head>
        
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


