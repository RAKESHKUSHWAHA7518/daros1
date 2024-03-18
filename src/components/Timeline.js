import React from 'react'

// import { useState } from 'react';

 
  

const Timeline = ({info}) => {

    const {timeline}= info.user
    // const [hoveredIndex, setHoveredIndex] = useState(null);
   const tt=timeline[4].icon.url;
 
  return (

    

  //   <div className="flex">
  //   <div className="">
  //     <h1 className="text-center py-10 font-bold text-4xl">Timeline of Experience</h1>
  //     {timeline
  //       .filter((timelineItem) => timelineItem.enabled) // Filter based on the "enabled" field
  //       .sort((a, b) => a.sequence - b.sequence) // Sort based on the "sequence" field
  //       .map((timelines, index) => (
  //         <React.Fragment key={index}>
  //           <div className="flex items-center">
              
  //             <div className="w-full md:w-auto px-10 mb-8 object-center">
  //             <h1 className="relative timeline-marker rounded-full bg-gray-300 h-8 w-8 md:mx-20 text-center hover:bg-gray-400">{timelines.sequence}</h1>
  //               <div className="h-full border-l-4 border-gray-400 ml-8 px-4 md:mx-20 transition duration-300 ease-in-out transform hover:bg-gray-100 p-4 m-4">
  //                 <div className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col gap-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:bg-gray-300">
  //                   <div className="flex items-center gap-4">
  //                     <div className="flex">
  //                       <div>
  //                         <img
  //                           className="h-10 w-full object-cover rounded-t-md"
  //                           src={
  //                             timelines.icon && timelines.icon.url
  //                               ? timelines.icon.url
  //                               : tt
  //                           }
  //                           alt={timelines.jobTitle}
  //                         />
  //                       </div>
  //                       <div className="flex flex-col">
  //                         <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">
  //                           {timelines.jobTitle}
  //                         </h3>
  //                         <p className="text-sm md:text-xs font-medium text-gray-600 text-center">
  //                           {timelines.company_name} - {timelines.jobLocation}
  //                         </p>
  //                         <h6 className="text-xs md:text-xxs font-normal text-gray-500 text-center">
  //                           {new Date(timelines.startDate).getDate()} /{" "}
  //                           {new Date(timelines.startDate).getMonth()} /{" "}
  //                           {new Date(timelines.startDate).getFullYear()} -{" "}
  //                           {new Date(timelines.endDate).getDate()} /{" "}
  //                           {new Date(timelines.endDate).getMonth()} /{" "}
  //                           {new Date(timelines.endDate).getFullYear()}
  //                         </h6>
  //                       </div>
  //                     </div>
  //                   </div>
  //                   <div className="text-sm md:text-xs font-normal text-gray-600">
  //                     <p>{timelines.summary}</p>
  //                     <br />
  //                     <ul className="list-disc pl-4">
  //                       {timelines.bulletPoints.map((point, index) => (
  //                         <li key={index}>{point.trim()}</li>
  //                       ))}
  //                     </ul>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </React.Fragment>
  //       ))}
  //   </div>
  // </div>
  

     




    <div className="flex ">
    <div className=''>
        <h1 className='text-center  py-10 font-bold text-4xl'>Timeline of Experience</h1>
        {timeline
            .filter(timelineItem => timelineItem.enabled) // Filter based on the "enabled" field
            .sort((a, b) => a.sequence - b.sequence) // Sort based on the "sequence" field
            .map((timelines, index) => (
                <React.Fragment key={index}>
                  

                  

<div className='w-full md:w-3/4 md:mx-auto     px-10 mb-8 object-center'>
<div className="timeline-marker rounded-full bg-gray-300 h-8 w-8 md:mx-auto text-center ">{timelines.sequence}</div>
<div className="h-full border-l-4 hover:border-blue-400  border-gray-400 ml-10 px-4  md:mx-auto    hover:bg-black p-5 m-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-5  rounded-lg ">
 
  <div className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col gap-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2  hover:bg-gray-300  ">
    <div className="flex items-center gap-4 ">
     <div className='flex '>
      <div> 
      {/* <img className="h-10 w-full object-cover rounded-t-md" src={<img className="h-10 w-full object-cover rounded-t-md" src={timelines.icon.url ? timelines.icon.url:tt } alt={timelines.jobTitle} /> } alt={timelines.jobTitle} /> */}

      <img className="h-10 w-full object-cover rounded-t-md" src={timelines.icon && timelines.icon.url ? timelines.icon.url : tt} alt={timelines.jobTitle} />

      </div>
      <div className="flex flex-col">
        <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">{timelines.jobTitle}</h3>
        <p className="text-sm md:text-xs font-medium text-gray-600 text-center">{timelines.company_name} - {timelines.jobLocation}</p>
        <h6 className="text-xs md:text-xxs font-normal text-gray-500 text-center"> {new Date(timelines.startDate).getDate()}/ {new Date(timelines.startDate).getMonth()}/{new Date(timelines.startDate).getFullYear()} -{new Date(timelines.endDate).getDate()}/ {new Date(timelines.endDate).getMonth()}/{new Date(timelines.endDate).getFullYear()}</h6>
        </div>
        </div>

    </div>
    <div className="text-sm md:text-xs font-normal text-gray-600">
      <p>{timelines.summary}</p>
      <br />
      <ul className="list-disc pl-4">
        {timelines.bulletPoints.map((point, index) => (
          <li key={index}>{point.trim()}</li>
        ))}
      </ul>

    </div>
    </div>
    
  </div>
</div>
                        
                    
                    
                </React.Fragment>
            ))}
    </div>
</div>















  //   <div className="flex ">
  //   <div className=''>
  //     <h1 className='text-center py-10 font-bold text-4xl'>Timeline of Experience</h1>
  //     {timeline.map((timelines, index) => (
  //       <React.Fragment key={index}>
  //         <div className="timeline-marker rounded-full bg-gray-300 h-8 w-8 md:mx-60 text-center ">{timelines.sequence}</div>

  //         <div className='w-full md:w-1/2 md:mx-80   px-10 mb-8 object-center'>
  //           <div className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col gap-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2  hover:bg-gray-300">
  //             <div className="flex items-center gap-4">
  //              <div className='flex'>
  //               <div> 
  //               {/* <img className="h-10 w-full object-cover rounded-t-md" src={<img className="h-10 w-full object-cover rounded-t-md" src={timelines.icon.url ? timelines.icon.url:tt } alt={timelines.jobTitle} /> } alt={timelines.jobTitle} /> */}

  //               <img className="h-10 w-full object-cover rounded-t-md" src={timelines.icon && timelines.icon.url ? timelines.icon.url : tt} alt={timelines.jobTitle} />

  //               </div>
  //               <div className="flex flex-col">
  //                 <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">{timelines.jobTitle}</h3>
  //                 <p className="text-sm md:text-xs font-medium text-gray-600 text-center">{timelines.company_name} - {timelines.jobLocation}</p>
  //                 <h6 className="text-xs md:text-xxs font-normal text-gray-500 text-center"> {new Date(timelines.startDate).getDate()}/ {new Date(timelines.startDate).getMonth()}/{new Date(timelines.startDate).getFullYear()} -{new Date(timelines.endDate).getDate()}/ {new Date(timelines.endDate).getMonth()}/{new Date(timelines.endDate).getFullYear()}</h6>
  //                 </div>
  //                 </div>

  //             </div>
  //             <div className="text-sm md:text-xs font-normal text-gray-600">
  //               <p>{timelines.summary}</p>
  //               <br />
  //               <ul className="list-disc pl-4">
  //                 {timelines.bulletPoints.map((point, index) => (
  //                   <li key={index}>{point.trim()}</li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </div>
  //         </div>
  //       </React.Fragment>
  //     ))}
  //   </div>
  // </div>
 


    
  )
                    }

export default Timeline;

 
{/* <div className="flex">
<div className="">
  <h1 className="text-center py-10 font-bold text-4xl">Timeline of Experience</h1>
  {timeline
    .filter((timelineItem) => timelineItem.enabled) // Filter based on the "enabled" field
    .sort((a, b) => a.sequence - b.sequence) // Sort based on the "sequence" field
    .map((timelines, index) => (
      <React.Fragment key={index}>
        <div className="flex items-center">
          
            
          </h1>
         
            <div className="w-full md:w-auto  px-10 mb-8 object-center">
            <h1 className="timeline-marker rounded-full bg-gray-300 h-8 w-8 md:mx-20 text-center">
            {timelines.sequence}
            </h1>
            <div className="h-full border-l-4 border-gray-400 ml-8 px-4 transition duration-300 ease-in-out transform hover:bg-gray-100 p-4 m-4">
            

              <div className="border border-gray-300 rounded-lg shadow-md p-4 flex flex-col gap-4 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2  hover:bg-gray-300">
                <div className="flex items-center gap-4">
                  <div className="flex">
                    <div>
                      <img
                        className="h-10 w-full object-cover rounded-t-md"
                        src={
                          timelines.icon && timelines.icon.url
                            ? timelines.icon.url
                            : tt
                        }
                        alt={timelines.jobTitle}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-lg text-start md:text-base font-semibold text-gray-900">
                        {timelines.jobTitle}
                      </h3>
                      <p className="text-sm md:text-xs font-medium text-gray-600 text-center">
                        {timelines.company_name} - {timelines.jobLocation}
                      </p>
                      <h6 className="text-xs md:text-xxs font-normal text-gray-500 text-center">
                        {new Date(timelines.startDate).getDate()} /{" "}
                        {new Date(timelines.startDate).getMonth()} /{" "}
                        {new Date(timelines.startDate).getFullYear()} -{" "}
                        {new Date(timelines.endDate).getDate()} /{" "}
                        {new Date(timelines.endDate).getMonth()} /{" "}
                        {new Date(timelines.endDate).getFullYear()}
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="text-sm md:text-xs font-normal text-gray-600">
                  <p>{timelines.summary}</p>
                  <br />
                  <ul className="list-disc pl-4">
                    {timelines.bulletPoints.map((point, index) => (
                      <li key={index}>{point.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    ))}
</div>
</div> */}


