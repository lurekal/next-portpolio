import Image from 'next/image'
import { Inter } from 'next/font/google'
import Animation from '../components/animation'

import Link from "next/link";
import Layout from '../components/layout';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
       <section className="flex min-h-screen flex-col items-center justify-center  text-gray-600 body-font">
         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              안녕하세요
               <br className="hidden lg:inline-block"/>
               찾아 와주셔서 감사합니다.
             </h1>
             <p className="mb-8 leading-relaxed">
              현 포트폴리오는 nextjs,tailwind,notionapi 로 구성되었습니다.
                
              </p>
             <div className="flex justify-center">

               <Link className="projectbtn"
                     href="/projects">
                 프로젝트 보러가기
                 </Link>
       
             </div>
           </div>
           <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">


             <Animation/>
          
           </div>
         </div>
       </section>
      </Layout>
  )
}
