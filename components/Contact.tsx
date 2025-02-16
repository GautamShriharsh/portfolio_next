"use client"

import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <section id='contact' className="overflow-x-clip py-32 text-white max-w-[1200px] mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:flex lg:justify-between lg:items-start gap-16"
            >
                {/* Contact Info */}
                <div className="space-y-12 lg:w-1/2">
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl font-bold text-gray-300"
                    >
                        Get in <span className="text-purple-400">touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="glass p-8 rounded-2xl space-y-6"
                    >
                        {/* Phone */}
                        <div className="space-y-1">
                            <p className="text-base text-gray-300">Phone</p>
                            <a href="tel:+91 7992368064" className="text-xl font-semibold hover:text-gray-400 transition duration-300 flex items-center gap-2">
                               +91 79923 68064
                                <span className="ml-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <p className="text-base text-gray-300">Email</p>
                            <a href="mailto:shriharshgautam7@gmail.com" className="text-xl font-semibold hover:text-gray-400 transition duration-300 flex items-center">
                                shriharshgautam7@gmail.com
                                <span className="ml-1">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </span>
                            </a>
                        </div>

                        {/* Office Location */}
                        <div className="space-y-1">
                            <p className="text-base text-gray-300">Office</p>
                            <address className="text-lg not-italic leading-relaxed">
                                Pune, <br />
                                Maharashtra <br />
                                India
                            </address>
                        </div>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="lg:w-1/2 h-[300px] rounded-2xl overflow-hidden mt-24 self-start"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186317.14330322642!2d73.6981495227241!3d18.52487061474803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1739705418519!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen loading="lazy"
                    ></iframe>
                </motion.div>
            </motion.div>
        </section>
    );
};
