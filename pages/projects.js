import Layout from '@/components/layout';
import {TOKEN,DATABASE_ID} from '../config/index'
import ProjectItem from '@/components/projects/project-item';



export default function Projects({projects}){

    // console.log(projects)

    return(
        <Layout>
            <div  className='flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10 px-6'>
                <h1 className='text-4xl font-bold sm:text-6xl'>
                    총 프로젝트 :
                 
                    <span className='text-blue-500'>   {projects.results.length} </span>
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 m-6 py-10'>
                     {projects.results.map((project,index)=>

                          <ProjectItem key={index} item={project}/>

                     )}
                </div>
            </div>
        </Layout>
    );
}

//빌드 타임에 호출
export async function getStaticProps(){


    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify(
        {
                page_size: 100,
                "sorts": [
                    {
                        "property": "period",
                        "direction": "ascending"
                    }
                ]
            }
            
            
            )
      };
      
    const res= await  fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
     

    const projects = await res.json()
   



    return{
        props:{projects}
    }
}