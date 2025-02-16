"use client"
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
    useMotionTemplate,
    useMotionValue,
    motion,
    animate,
} from "framer-motion";
import Image from 'next/image';
import profilepic from "../assets/profile.png"
import object1 from "../assets/obj1.png"



const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
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

    const border = useMotionTemplate`1px solid ${color}`

    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
            style={{
                backgroundImage
            }}
            className="relative flex min-h-screen items-center justify-center text-gray-200 px-4 py-24"
        >
            <div className="z-10 flex flex-col items-center text-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for work
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl">
                    Shriharsh
                </h1>
                <Image
                    src={profilepic}
                    alt="profile pic"
                    width={250}
                    className="mt-4 mb-4"
                />

                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <Image
                        src={object1}
                        alt="object"
                        width={30}
                        className="rounded-2xl mx-auto"
                    />


                    <p className="font-medium">Fullstack Developer</p>
                </div>

                <p className="my-6 max-w-xl text-center">Based in India</p>
                <motion.a
                    href="/Shriharsh_Resume.pdf" // Path to your resume file inside the public/ directory
                    download="Shriharsh_Resume.pdf" // The name of the file when downloaded
                    style={{
                        border,
                        boxShadow
                    }}
                    whileHover={{
                        scale: 1.015
                    }}
                    whileTap={{
                        scale: 0.985
                    }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-white/10 text-white"
                >
                    Download CV
                    <FiArrowRight className="" />
                </motion.a>
            </div>
            <div className="bg-cirle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>

    )
}