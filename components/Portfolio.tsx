"use client"
import React, {useState, useEffect} from "react"
import Image from "next/image"
import whipserWave from "@/assets/whipserWave.jpeg"
import twitterClone from "@/assets/twitterClone.jpeg"
import megaBlog from "@/assets/mega_blog.webp"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

const projects = [
    {
     id:1,
     title: 'WhisperWave', 
     description: 'I built a real-time chat application with instant messaging, user authentication, and notifications. It features a sleek UI, powered by React, Node.js, and MongoDB, ensuring seamless communication. WebSockets enable live message updates, creating a smooth and interactive experience. Users can send text, images, and manage conversations efficiently.🚀',
     image: whipserWave,
    },
    {
     id:2,
     title: 'Twitter Clone', 
     description: 'I built a full-stack Twitter clone with features like posting, commenting, liking, and following users. It uses React, Node.js, Express, and MongoDB, with Tailwind for a sleek UI. Real-time updates are powered by React Query, and media uploads are handled via Cloudinary. Authentication is secured with JWT, ensuring a seamless user experience. ',
     image: twitterClone,
    },
    {
     id:3,
     title: 'MegaBlog', 
     description: 'I built Mega Blog, a full-stack blogging application using React.js and Appwrite for the backend. It allows users to sign up, log in, create, read, edit, and delete blog posts, with role-based access for authors. React Hook Forms ensures smooth form handling, while Redux manages state efficiently. The UI is crafted with Tailwind CSS, offering a sleek and responsive experience. ',
     image: megaBlog,
    }

]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]


export const Portfolio = () => {
   const [selectedProject,setSelectedProject] = useState(projects[0])

    const color = useMotionValue(COLORS_TOP[0])
    
    useEffect(() => {
            animate(color, COLORS_TOP, {
                ease: "easeInOut",
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror"
            })
        }, [color])

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
   
   
    return (
        <motion.section 
        style={{
            backgroundImage
        }}
        id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
            <div className="">
            <h2 className="text-6xl font-bold mb-10"> <span className=" text-purple-400">Projects</span></h2>
            {projects.map((project) => (
                <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer mb-8 group"
                >
                    <h3 className={`text-3xl font-semibold group-hover:text-purple-400 transition-colors
                        ${selectedProject.id === project.id ? 'text-purple-200' : ''} duration-300`}>
                        {project.title}
                    </h3>
                    {selectedProject.id === project.id && (
                        <div className="border-b-2 border-purple-200 my-4 "></div>
                    )}
                    {selectedProject.id === project.id && (
                        <p className="text-gray-400 transition-all duration-500 ease-in-out">
                            {project.description}
                        </p>
                    )}
                </div>
 ))}
           </div>
           
           <Image 
           src={selectedProject.image.src}
           alt={selectedProject.title}
           className="rounded-xl shadhow-lg transition-opacity duration-500 ease-in-out"
           width={520} // 65% of original width
           height={292} // 65% of original height
           />
           </div>
        </motion.section>
    )
}