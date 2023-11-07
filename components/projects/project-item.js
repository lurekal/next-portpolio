import Image from "next/image"

export default function ProjectItem({item}){

    console.log(item.properties)

    const title = item.properties.name.title[0].plain_text
    const role = item.properties.role.rich_text[0].plain_text
    const description=  item.properties.description.rich_text[0].plain_text
    const imgSrc=item.cover.file?.url || item.cover.external.url
    const startDate=item.properties.period.date.start
    const endDate=item.properties.period.date.end

    const tags= item.properties.tag.multi_select

    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src={imgSrc}
                alt='corver image'
                width="100"
                height="60"
                layout="responsive"
                objectFit="none"
                quality={100}
      
            />
            <div className="p-4 flex flex-col">
                
              <h1 className="text-2xl font-bold">{title}</h1>
              <p className="my-1">
                작업기간 :{startDate} ~ {endDate}
                </p>



              <h3 className="mt-4">{role}</h3>
              <h3 className="mt-4">{description}
              </h3>
              
              <div className="mt-2 space-x-2">
           
         
                    {tags.map((tag)=>

               <span class="inline-flex items-center gap-x-1.5 mt-2 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white"
                  key={tag.id} >
                      {tag.name}
                </span>
   

                    )}
                </div>

                
       

            
            </div>





            
        </div>
    )
}