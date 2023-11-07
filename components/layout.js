import Header from "./header";
import Footer from "./footer";
import Head from 'next/head'


export default function Layout({children}){

    return(
        <div className="bg-primary">

        <Head>
            <title>희준의 포트폴리오</title>

      </Head>
      
                  <Header/>
                     <div>{children}</div>
                  <Footer/>
      
        </div>
    )
}