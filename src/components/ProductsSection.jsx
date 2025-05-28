import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AllProducts from '../components/modalsdata';
import { Banner2, Banner3, Banner7 } from "../assets";
import Products from "./Products";
import { FaCircleArrowRight } from "react-icons/fa6";

const ProductSection = () => {
    const fadeInVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section className="py-20 px-6 relative">
            {/* Background elements with animation */}
            <motion.img 
                src={Banner7} 
                alt="" 
                className="w-full h-full absolute -z-20 mx-auto top-0 left-0" 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
            />
            
            <motion.div 
                className="absolute bg-[#00000076] w-full h-full top-0 left-0 p-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
            ></motion.div>

            <div className="flex gap-0 justify-between items-center relative z-[400]">
                <motion.div 
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-[400]"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                >
                    {/* Left Side */}
                    <motion.div
                        className="text-left z-[999] col-span-1"
                        variants={fadeInVariants}
                    >
                        <motion.h2 
                            className="text-3xl xl:text-5xl font-normal capitalize text-white"
                            variants={fadeInItem}
                        >
                            our <span className="text-mainbtn">products</span>
                        </motion.h2>
                        
                        <motion.p 
                            className="text-xs md:text-sm mt-6 mb-5 text-white"
                            variants={fadeInItem}
                        >
                            Discover our innovative and dependable elevator solutions, built for safety and efficiency. Our designs ensure seamless and smooth mobility for any space.
                        </motion.p>
                        
                        <motion.div variants={fadeInItem}>
                            <Link
                                to='/products'
                                className="mb-8 p-2 duration-150 bg-black w-fit px-3 h-10 text-white hover:bg-white hover:text-black  flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                All Products
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="w-full col-span-1"
                        variants={fadeInVariants}
                    >
                        <Products limit={2} column="2" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductSection;