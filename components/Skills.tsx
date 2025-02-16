"use client"


const skills = [
    {
        id: '01', 
        title:'Frontend Development', 
        description: "Crafting visually stunning and user-friendly websites tailored to your brand's identity and goals."
     },
     {
         id: '02',
         title: 'Backend Development',
         description: "Building robust and scalable server-side applications with efficient database management and API integration."
     },
     {
        id: '03',
        title: 'Full-Stack Development',
        description: "Bringing together frontend and backend expertise to develop seamless, high-performance web applications."
    },
    {
        id: '04',
        title: 'UI/UX Design',
        description: "Designing intuitive and engaging user experiences that enhance usability and customer satisfaction."
    },
    {
        id: '05',
        title: 'Performance Optimization',
        description: "Improving website speed, efficiency, and responsiveness for a smooth and high-performing user experience."
    },
    {
        id: '06',
        title: 'Responsive Web Design',
        description: "Ensuring your website looks great and functions perfectly on all devices, from desktops to mobile phones."
    },
   ]

export const Skills = () => {
  
   return (
    <section className="text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row">
         <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
         <h2 className="text-6xl text-purple-300 font-extrabold sticky top-20 ml-4">SKILLS</h2>
         </div>

         <div className="md:w-3/4">
          {skills.map(skill => (
            <div key={skill.id} className="mb-16 flex items-start">
                <div className="text-purple-300 font-bold text-5xl mr-6">
                {skill.id}
                </div>
                <div>
                 <h3 className="text-2xl font-bold mb-2">{skill.title}</h3>
                 <p>{skill.description}</p>
                </div>
            </div>
          ))}
         </div>

        </div> 
    
    </section>
   )
}