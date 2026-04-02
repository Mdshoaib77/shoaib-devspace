// // // // // // // import { NavLink } from "react-router-dom";
// // // // // // // import { projects } from "../../assets/data/data";
// // // // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // // // import { motion } from "framer-motion";

// // // // // // // export const Portfolio = () => {
// // // // // // //   return (
// // // // // // //     <motion.section
// // // // // // //       className="portfolio-section"
// // // // // // //       initial={{ opacity: 0 }}
// // // // // // //       animate={{ opacity: 1 }}
// // // // // // //       transition={{ duration: 1 }}
// // // // // // //     >
// // // // // // //       <div className="container">
// // // // // // //         <div className="section-header text-center">
// // // // // // //           <motion.h2
// // // // // // //             className="section-title"
// // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //           >
// // // // // // //             My Recent Works
// // // // // // //           </motion.h2>
// // // // // // //           <motion.p
// // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // // // //           >
// // // // // // //             We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
// // // // // // //           </motion.p>
// // // // // // //         </div>

// // // // // // //         <div className="portfolio-filter text-center">
// // // // // // //           <div className="button-group filter-button-group">
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.1 }}
// // // // // // //               whileTap={{ scale: 0.9 }}
// // // // // // //               transition={{ duration: 0.3 }}
// // // // // // //             >
// // // // // // //               All
// // // // // // //             </motion.button>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.1 }}
// // // // // // //               whileTap={{ scale: 0.9 }}
// // // // // // //               transition={{ duration: 0.3 }}
// // // // // // //             >
// // // // // // //               UX/UI
// // // // // // //             </motion.button>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.1 }}
// // // // // // //               whileTap={{ scale: 0.9 }}
// // // // // // //               transition={{ duration: 0.3 }}
// // // // // // //             >
// // // // // // //               Branding
// // // // // // //             </motion.button>
// // // // // // //             <motion.button
// // // // // // //               whileHover={{ scale: 1.1 }}
// // // // // // //               whileTap={{ scale: 0.9 }}
// // // // // // //               transition={{ duration: 0.3 }}
// // // // // // //             >
// // // // // // //               Websites
// // // // // // //             </motion.button>
// // // // // // //             <div className="active-bg"></div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <motion.div
// // // // // // //           className="portfolio-box"
// // // // // // //           initial={{ opacity: 0 }}
// // // // // // //           whileInView={{ opacity: 1 }}
// // // // // // //           transition={{ duration: 1, delay: 0.3 }}
// // // // // // //         >
// // // // // // //           <div className="grid2">
// // // // // // //             {projects.map((project) => (
// // // // // // //               <motion.div
// // // // // // //                 className="portfolio-item branding"
// // // // // // //                 key={project.id}
// // // // // // //                 initial={{ opacity: 0, y: 50 }}
// // // // // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // // // // //                 transition={{ duration: 0.8 }}
// // // // // // //               >
// // // // // // //                 <div className="image-box">
// // // // // // //                   <motion.img
// // // // // // //                     src={project.cover}
// // // // // // //                     alt=""
// // // // // // //                     initial={{ scale: 1.1 }}
// // // // // // //                     whileHover={{ scale: 1 }}
// // // // // // //                     transition={{ duration: 0.3 }}
// // // // // // //                   />
// // // // // // //                 </div>
// // // // // // //                 <div className="content-box">
// // // // // // //                   <NavLink to="/details">
// // // // // // //                     <motion.h3
// // // // // // //                       className="portfolio-title"
// // // // // // //                       initial={{ y: -10, opacity: 0 }}
// // // // // // //                       whileInView={{ y: 0, opacity: 1 }}
// // // // // // //                       transition={{ duration: 0.5 }}
// // // // // // //                     >
// // // // // // //                       {project.title}
// // // // // // //                     </motion.h3>
// // // // // // //                   </NavLink>
// // // // // // //                   <motion.p
// // // // // // //                     initial={{ opacity: 0 }}
// // // // // // //                     whileInView={{ opacity: 1 }}
// // // // // // //                     transition={{ duration: 0.6, delay: 0.4 }}
// // // // // // //                   >
// // // // // // //                     {project.desc}
// // // // // // //                   </motion.p>
// // // // // // //                   <motion.i
// // // // // // //                     initial={{ x: 20, opacity: 0 }}
// // // // // // //                     whileInView={{ x: 0, opacity: 1 }}
// // // // // // //                     transition={{ duration: 0.3, delay: 0.6 }}
// // // // // // //                   >
// // // // // // //                     <GoArrowUpRight size={50} />
// // // // // // //                   </motion.i>
// // // // // // //                 </div>
// // // // // // //               </motion.div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </motion.div>
// // // // // // //       </div>
// // // // // // //     </motion.section>
// // // // // // //   );
// // // // // // // };


// // // // // // // import { useRef, useState } from "react";
// // // // // // // import { FaPlay } from "react-icons/fa";
// // // // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // // // import { motion } from "framer-motion";
// // // // // // // import videoFile from "../../Video/Web Development GIG.mp4";

// // // // // // // const primary = "#8750f7";

// // // // // // // export const Portfolio = () => {
// // // // // // //   const videoRefs = useRef([]);
// // // // // // //   const [activeVideo, setActiveVideo] = useState(null);

// // // // // // //   const toggleVideo = (index) => {
// // // // // // //     const video = videoRefs.current[index];
// // // // // // //     if (!video) return;

// // // // // // //     if (activeVideo === index) {
// // // // // // //       video.pause();
// // // // // // //       setActiveVideo(null);
// // // // // // //     } else {
// // // // // // //       videoRefs.current.forEach((v) => {
// // // // // // //         if (v) {
// // // // // // //           v.pause();
// // // // // // //           v.currentTime = 0;
// // // // // // //         }
// // // // // // //       });

// // // // // // //       video.muted = false;
// // // // // // //       video.play();
// // // // // // //       setActiveVideo(index);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const projects = [
// // // // // // //     {
// // // // // // //       title: "Portfolio | MERN Stack",
// // // // // // //       desc: "Full MERN Stack Portfolio with authentication, admin dashboard, JWT auth and Stripe integration.",
// // // // // // //       tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Stripe"],
// // // // // // //       url: "https://your-mern-portfolio-url.com",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "E-Commerce | MERN",
// // // // // // //       desc: "Advanced eCommerce platform with cart system, payment gateway and admin control panel.",
// // // // // // //       tech: ["MERN", "Redux", "Stripe", "Cloudinary"],
// // // // // // //       url: "#",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "Booking System",
// // // // // // //       desc: "Full booking system with real-time scheduling and secure authentication.",
// // // // // // //       tech: ["MongoDB", "Node", "React", "JWT"],
// // // // // // //       url: "#",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       title: "SaaS Dashboard",
// // // // // // //       desc: "Premium SaaS dashboard with subscription and analytics system.",
// // // // // // //       tech: ["Next.js", "Tailwind", "Node.js"],
// // // // // // //       url: "#",
// // // // // // //     },
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section style={{ padding: "100px 0", background: "#1c2336" }}>
// // // // // // //       <div className="container">

// // // // // // //         <h2 style={{
// // // // // // //           textAlign: "center",
// // // // // // //           color: "#fff",
// // // // // // //           fontSize: "38px",
// // // // // // //           marginBottom: "70px"
// // // // // // //         }}>
// // // // // // //           My Recent Projects
// // // // // // //         </h2>

// // // // // // //         {/* GRID */}
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "grid",
// // // // // // //             gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
// // // // // // //             gap: "40px",
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {projects.map((project, index) => (
// // // // // // //             <motion.div
// // // // // // //               key={index}
// // // // // // //               initial={{ opacity: 0, y: 40 }}
// // // // // // //               whileInView={{ opacity: 1, y: 0 }}
// // // // // // //               transition={{ duration: 0.6 }}
// // // // // // //               style={{
// // // // // // //                 background: "#111318",
// // // // // // //                 borderRadius: "25px",
// // // // // // //                 padding: "30px",
// // // // // // //                 display: "flex",
// // // // // // //                 gap: "30px",
// // // // // // //                 flexWrap: "wrap",
// // // // // // //                 border: `1px solid ${primary}30`,
// // // // // // //                 boxShadow: `0 0 40px ${primary}20`,
// // // // // // //               }}
// // // // // // //             >

// // // // // // //               {/* LEFT VIDEO */}
// // // // // // //               <div style={{
// // // // // // //                 flex: "1 1 280px",
// // // // // // //                 position: "relative",
// // // // // // //                 borderRadius: "20px",
// // // // // // //                 overflow: "hidden",
// // // // // // //               }}>
// // // // // // //                 <video
// // // // // // //                   ref={(el) => (videoRefs.current[index] = el)}
// // // // // // //                   src={videoFile}
// // // // // // //                   poster="/images/common/profile1.jpg"
// // // // // // //                   style={{
// // // // // // //                     width: "100%",
// // // // // // //                     height: "260px",
// // // // // // //                     objectFit: "cover",
// // // // // // //                     borderRadius: "20px",
// // // // // // //                   }}
// // // // // // //                 />

// // // // // // //                 {/* Play Overlay */}
// // // // // // //                 <div
// // // // // // //                   onClick={() => toggleVideo(index)}
// // // // // // //                   style={{
// // // // // // //                     position: "absolute",
// // // // // // //                     inset: 0,
// // // // // // //                     display: "flex",
// // // // // // //                     alignItems: "center",
// // // // // // //                     justifyContent: "center",
// // // // // // //                     cursor: "pointer",
// // // // // // //                     background:
// // // // // // //                       activeVideo === index
// // // // // // //                         ? "transparent"
// // // // // // //                         : "rgba(0,0,0,0.45)",
// // // // // // //                     transition: "0.3s",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {activeVideo !== index && (
// // // // // // //                     <div
// // // // // // //                       style={{
// // // // // // //                         width: "75px",
// // // // // // //                         height: "75px",
// // // // // // //                         borderRadius: "50%",
// // // // // // //                         background: primary,
// // // // // // //                         display: "flex",
// // // // // // //                         alignItems: "center",
// // // // // // //                         justifyContent: "center",
// // // // // // //                         boxShadow: `0 0 30px ${primary}`,
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       <FaPlay color="#fff" size={24} />
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* RIGHT CONTENT */}
// // // // // // //               <div style={{ flex: "1 1 280px", color: "#fff" }}>
// // // // // // //                 <div style={{
// // // // // // //                   display: "inline-block",
// // // // // // //                   padding: "5px 15px",
// // // // // // //                   borderRadius: "20px",
// // // // // // //                   background: `${primary}20`,
// // // // // // //                   color: primary,
// // // // // // //                   fontSize: "12px",
// // // // // // //                   marginBottom: "15px",
// // // // // // //                 }}>
// // // // // // //                   MERN STACK
// // // // // // //                 </div>

// // // // // // //                 <h3 style={{ fontSize: "24px", marginBottom: "15px" }}>
// // // // // // //                   {project.title}
// // // // // // //                 </h3>

// // // // // // //                 <p style={{
// // // // // // //                   color: "#aaa",
// // // // // // //                   marginBottom: "20px",
// // // // // // //                   lineHeight: "1.6"
// // // // // // //                 }}>
// // // // // // //                   {project.desc}
// // // // // // //                 </p>

// // // // // // //                 {/* TECH TAGS */}
// // // // // // //                 <div style={{
// // // // // // //                   display: "flex",
// // // // // // //                   flexWrap: "wrap",
// // // // // // //                   gap: "10px",
// // // // // // //                   marginBottom: "25px"
// // // // // // //                 }}>
// // // // // // //                   {project.tech.map((tech, i) => (
// // // // // // //                     <span
// // // // // // //                       key={i}
// // // // // // //                       style={{
// // // // // // //                         padding: "6px 14px",
// // // // // // //                         borderRadius: "20px",
// // // // // // //                         background: "#1b1f27",
// // // // // // //                         border: `1px solid ${primary}`,
// // // // // // //                         color: primary,
// // // // // // //                         fontSize: "12px",
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {tech}
// // // // // // //                     </span>
// // // // // // //                   ))}
// // // // // // //                 </div>

// // // // // // //                 <a
// // // // // // //                   href={project.url}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{
// // // // // // //                     display: "inline-flex",
// // // // // // //                     alignItems: "center",
// // // // // // //                     gap: "8px",
// // // // // // //                     padding: "12px 25px",
// // // // // // //                     borderRadius: "30px",
// // // // // // //                     background: primary,
// // // // // // //                     color: "#fff",
// // // // // // //                     fontWeight: "600",
// // // // // // //                     textDecoration: "none",
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Live Preview <GoArrowUpRight />
// // // // // // //                 </a>
// // // // // // //               </div>

// // // // // // //             </motion.div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };



// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // // // import project1 from "../../../src/assets/zamans.png";
// // // // // // // import project2 from "../../../src/assets/Foodessa.png"
// // // // // // // import demoImage from "../../../src/assets/zamans.png";

// // // // // // // const primary = "#8750f7";

// // // // // // // export const Portfolio = () => {

// // // // // // //   const projects = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       title: "Zaman's Gadget",
// // // // // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online. This application allows users to view, search, and purchase various gadgets with a modern, responsive design and secure user authentication.",
// // // // // // //       tech: [
// // // // // // //         "React",
// // // // // // //         "Tailwind CSS",
// // // // // // //         "Node.js",
// // // // // // //         "Express.js",
// // // // // // //         "MongoDB",
// // // // // // //         "JWT"
// // // // // // //       ],
// // // // // // //       image: project1,
// // // // // // //       link: "https://zamansgadget.com/"
// // // // // // //     },
// // // // // // //     // {
// // // // // // //     //   id: 2,
// // // // // // //     //   title: "Demo MERN Project",
// // // // // // //     //   desc: "Full MERN stack project with authentication system and modern UI dashboard.",
// // // // // // //     //   tech: ["React", "Node.js", "MongoDB", "JWT"],
// // // // // // //     //   image: project2,
// // // // // // //     //   link: "https://foodessa.netlify.app/"
// // // // // // //     // },
// // // // // // //     {
// // // // // // //   id: 2,
// // // // // // //   title: "Foodessa – Full Stack Food Ordering App",
// // // // // // //   desc: "A complete MERN stack food ordering platform with user authentication, category-based food browsing, cart system, and dedicated admin dashboard for managing foods and orders.",
// // // // // // //   tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // // //   image: project2,
// // // // // // //   link: "https://foodessa.netlify.app/"
// // // // // // // },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       title: "E-Commerce Platform",
// // // // // // //       desc: "Advanced shopping platform with cart system and payment gateway integration.",
// // // // // // //       tech: ["MERN", "Stripe", "Redux"],
// // // // // // //       image: demoImage,
// // // // // // //       link: "#"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 4,
// // // // // // //       title: "Admin Dashboard",
// // // // // // //       desc: "Modern admin dashboard with analytics and full management system.",
// // // // // // //       tech: ["React", "Tailwind", "Node.js"],
// // // // // // //       image: demoImage,
// // // // // // //       link: "#"
// // // // // // //     }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <motion.section
// // // // // // //       className="portfolio-section"
// // // // // // //       initial={{ opacity: 0 }}
// // // // // // //       animate={{ opacity: 1 }}
// // // // // // //       transition={{ duration: 1 }}
// // // // // // //       style={{ padding: "100px 0", background: "#0d0f14" }}
// // // // // // //     >
// // // // // // //       <div className="container">

// // // // // // //         {/* SAME SECTION TITLE */}
// // // // // // //         <div className="section-header text-center">
// // // // // // //           {/* <motion.h2
// // // // // // //             className="section-title"
// // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //           >
// // // // // // //             My Recent Projects
// // // // // // //           </motion.h2> */}
// // // // // // //             <motion.h2
// // // // // // //             className="section-title"
// // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //           >
// // // // // // //             My Recent Works
// // // // // // //           </motion.h2>
// // // // // // //           <motion.p
// // // // // // //             initial={{ opacity: 0, y: 50 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.4 }}
// // // // // // //           >
// // // // // // //             I put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
// // // // // // //           </motion.p>
// // // // // // //         </div>

// // // // // // //         {/* GRID 2x2 Desktop */}
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "grid",
// // // // // // //             gridTemplateColumns: "repeat(auto-fit, minmax(550px, 1fr))",
// // // // // // //             gap: "40px",
// // // // // // //             marginTop: "60px"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {projects.map((project) => (
// // // // // // //             <motion.div
// // // // // // //               key={project.id}
// // // // // // //               whileHover={{ y: -8 }}
// // // // // // //               transition={{ duration: 0.3 }}
// // // // // // //               style={{
// // // // // // //                 background: "#111318",
// // // // // // //                 borderRadius: "25px",
// // // // // // //                 padding: "35px",
// // // // // // //                 display: "flex",
// // // // // // //                 gap: "35px",
// // // // // // //                 flexWrap: "wrap",
// // // // // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // // // // //                 boxShadow: "0 0 40px rgba(0,0,0,0.5)"
// // // // // // //               }}
// // // // // // //             >

// // // // // // //               {/* LEFT IMAGE */}
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   flex: "1 1 300px",
// // // // // // //                   borderRadius: "20px",
// // // // // // //                   overflow: "hidden"
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <img
// // // // // // //                   src={project.image}
// // // // // // //                   alt={project.title}
// // // // // // //                   style={{
// // // // // // //                     width: "100%",
// // // // // // //                     height: "100%",
// // // // // // //                     objectFit: "cover",
// // // // // // //                     borderRadius: "20px"
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               {/* RIGHT CONTENT */}
// // // // // // //               <div style={{ flex: "1 1 300px", color: "#fff" }}>

// // // // // // //                 <div
// // // // // // //                   style={{
// // // // // // //                     display: "inline-block",
// // // // // // //                     padding: "6px 18px",
// // // // // // //                     borderRadius: "20px",
// // // // // // //                     background: `${primary}20`,
// // // // // // //                     color: primary,
// // // // // // //                     fontSize: "12px",
// // // // // // //                     marginBottom: "15px"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   MERN STACK
// // // // // // //                 </div>

// // // // // // //                 <h3 style={{ fontSize: "26px", marginBottom: "15px" }}>
// // // // // // //                   {project.title}
// // // // // // //                 </h3>

// // // // // // //                 <p
// // // // // // //                   style={{
// // // // // // //                     color: "#aaa",
// // // // // // //                     marginBottom: "20px",
// // // // // // //                     lineHeight: "1.6"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {project.desc}
// // // // // // //                 </p>

// // // // // // //                 {/* TECH TAGS */}
// // // // // // //                 <div
// // // // // // //                   style={{
// // // // // // //                     display: "flex",
// // // // // // //                     flexWrap: "wrap",
// // // // // // //                     gap: "10px",
// // // // // // //                     marginBottom: "25px"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {project.tech.map((tech, i) => (
// // // // // // //                     <span
// // // // // // //                       key={i}
// // // // // // //                       style={{
// // // // // // //                         padding: "6px 14px",
// // // // // // //                         borderRadius: "20px",
// // // // // // //                         background: "#1b1f27",
// // // // // // //                         border: `1px solid ${primary}`,
// // // // // // //                         color: primary,
// // // // // // //                         fontSize: "12px"
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {tech}
// // // // // // //                     </span>
// // // // // // //                   ))}
// // // // // // //                 </div>

// // // // // // //                 {/* LIVE LINK */}
// // // // // // //                 <a
// // // // // // //                   href={project.link}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{
// // // // // // //                     display: "inline-flex",
// // // // // // //                     alignItems: "center",
// // // // // // //                     gap: "8px",
// // // // // // //                     padding: "12px 28px",
// // // // // // //                     borderRadius: "30px",
// // // // // // //                     background: primary,
// // // // // // //                     color: "#fff",
// // // // // // //                     fontWeight: "600",
// // // // // // //                     textDecoration: "none"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Live Preview <GoArrowUpRight />
// // // // // // //                 </a>

// // // // // // //               </div>

// // // // // // //             </motion.div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </motion.section>
// // // // // // //   );
// // // // // // // };



// // // // // // // import { motion } from "framer-motion";
// // // // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // // // import project1 from "../../../src/assets/zamans.png";
// // // // // // // import project2 from "../../../src/assets/Foodessa.png";
// // // // // // // import project3 from "../../../src/assets/outfiro.png";
// // // // // // // import project4 from "../../../src/assets/realstate.png";


// // // // // // // const primary = "#8750f7";

// // // // // // // export const Portfolio = () => {

// // // // // // //   const projects = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       title: "Zaman's Gadget",
// // // // // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // // //       image: project1,
// // // // // // //       link: "https://zamansgadget.com/"
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       title: "Foodessa Food Ordering App",
// // // // // // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT",],
// // // // // // //       image: project2,
// // // // // // //       link: "https://foodessa.netlify.app/"
// // // // // // //     },
// // // // // // // {
// // // // // // //   id: 3,
// // // // // // //   title: "Outfiro Fashion Store",
// // // // // // //   desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // // // // // //   tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // // //   image: project3,
// // // // // // //   link: "https://outfiro.netlify.app/"
// // // // // // // },
// // // // // // // {
// // // // // // //   id: 4,
// // // // // // //   title: "Real Estate Platform",
// // // // // // //   desc: "Modern property listing platform with advanced search filters and secure management system.And Web3Forms contact handling.",
// // // // // // //   tech: ["React", "Tailwind", "web3form"],
// // // // // // //   image: project4,
// // // // // // //   link: "https://real-estate-vy0e.onrender.com/"
// // // // // // // }
// // // // // // //   ];

// // // // // // //   return (
// // // // // // //     <section
// // // // // // //       style={{
// // // // // // //         padding: "120px 0",
// // // // // // //         background: "linear-gradient(180deg,#0d0f14 0%, #0b0c10 100%)"
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       <div className="container">

// // // // // // //         {/* SECTION HEADER */}
// // // // // // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // // // // // //           <motion.h2
// // // // // // //             initial={{ opacity: 0, y: 60 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8 }}
// // // // // // //             style={{
// // // // // // //               fontSize: "48px",
// // // // // // //               fontWeight: "800",
// // // // // // //               background: "linear-gradient(90deg,#8750f7,#c084fc)",
// // // // // // //               WebkitBackgroundClip: "text",
// // // // // // //               WebkitTextFillColor: "transparent",
// // // // // // //               marginBottom: "20px"
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             My Recent Works
// // // // // // //           </motion.h2>

// // // // // // //           <motion.p
// // // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // // // // //             style={{
// // // // // // //               color: "#aaa",
// // // // // // //               maxWidth: "650px",
// // // // // // //               margin: "0 auto",
// // // // // // //               fontSize: "18px",
// // // // // // //               lineHeight: "1.6"
// // // // // // //             }}
// // // // // // //           >
// // // // // // //             I transform ideas into premium web experiences that inspire users
// // // // // // //             and deliver real-world solutions.
// // // // // // //           </motion.p>
// // // // // // //         </div>

// // // // // // //         {/* PROJECT GRID */}
// // // // // // //         <div
// // // // // // //           style={{
// // // // // // //             display: "grid",
// // // // // // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // // // // // //             gap: "50px"
// // // // // // //           }}
// // // // // // //         >
// // // // // // //           {projects.map((project) => (
// // // // // // //             <motion.div
// // // // // // //               key={project.id}
// // // // // // //               whileHover={{ y: -12 }}
// // // // // // //               transition={{ duration: 0.4 }}
// // // // // // //               style={{
// // // // // // //                 background: "rgba(255,255,255,0.03)",
// // // // // // //                 backdropFilter: "blur(12px)",
// // // // // // //                 borderRadius: "30px",
// // // // // // //                 padding: "35px",
// // // // // // //                 display: "flex",
// // // // // // //                 flexDirection: "column",
// // // // // // //                 gap: "25px",
// // // // // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // // // // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // // // // // //                 transition: "all 0.4s ease"
// // // // // // //               }}
// // // // // // //             >

// // // // // // //               {/* IMAGE */}
// // // // // // //               <div
// // // // // // //                 style={{
// // // // // // //                   borderRadius: "20px",
// // // // // // //                   overflow: "hidden",
// // // // // // //                   position: "relative"
// // // // // // //                 }}
// // // // // // //               >
// // // // // // //                 <motion.img
// // // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // // //                   transition={{ duration: 0.6 }}
// // // // // // //                   src={project.image}
// // // // // // //                   alt={project.title}
// // // // // // //                   style={{
// // // // // // //                     width: "100%",
// // // // // // //                     borderRadius: "20px",
// // // // // // //                     objectFit: "cover"
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </div>

// // // // // // //               {/* CONTENT */}
// // // // // // //               <div style={{ color: "#fff" }}>

// // // // // // //                 <div
// // // // // // //                   style={{
// // // // // // //                     display: "inline-block",
// // // // // // //                     padding: "6px 18px",
// // // // // // //                     borderRadius: "30px",
// // // // // // //                     background: `${primary}15`,
// // // // // // //                     color: primary,
// // // // // // //                     fontSize: "12px",
// // // // // // //                     marginBottom: "15px",
// // // // // // //                     letterSpacing: "1px"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   MERN STACK
// // // // // // //                 </div>

// // // // // // //                 <h3
// // // // // // //                   style={{
// // // // // // //                     fontSize: "28px",
// // // // // // //                     fontWeight: "700",
// // // // // // //                     marginBottom: "15px"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {project.title}
// // // // // // //                 </h3>

// // // // // // //                 <p
// // // // // // //                   style={{
// // // // // // //                     color: "#b5b5b5",
// // // // // // //                     lineHeight: "1.7",
// // // // // // //                     marginBottom: "20px"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {project.desc}
// // // // // // //                 </p>

// // // // // // //                 {/* TECH TAGS */}
// // // // // // //                 <div
// // // // // // //                   style={{
// // // // // // //                     display: "flex",
// // // // // // //                     flexWrap: "wrap",
// // // // // // //                     gap: "10px",
// // // // // // //                     marginBottom: "25px"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   {project.tech.map((tech, i) => (
// // // // // // //                     <span
// // // // // // //                       key={i}
// // // // // // //                       style={{
// // // // // // //                         padding: "6px 14px",
// // // // // // //                         borderRadius: "20px",
// // // // // // //                         background: "rgba(255,255,255,0.05)",
// // // // // // //                         border: `1px solid ${primary}`,
// // // // // // //                         color: primary,
// // // // // // //                         fontSize: "12px",
// // // // // // //                         transition: "all 0.3s ease"
// // // // // // //                       }}
// // // // // // //                     >
// // // // // // //                       {tech}
// // // // // // //                     </span>
// // // // // // //                   ))}
// // // // // // //                 </div>

// // // // // // //                 {/* BUTTON */}
// // // // // // //                 <a
// // // // // // //                   href={project.link}
// // // // // // //                   target="_blank"
// // // // // // //                   rel="noreferrer"
// // // // // // //                   style={{
// // // // // // //                     display: "inline-flex",
// // // // // // //                     alignItems: "center",
// // // // // // //                     gap: "8px",
// // // // // // //                     padding: "14px 30px",
// // // // // // //                     borderRadius: "40px",
// // // // // // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // // // // // //                     color: "#fff",
// // // // // // //                     fontWeight: "600",
// // // // // // //                     textDecoration: "none",
// // // // // // //                     transition: "all 0.3s ease",
// // // // // // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // // // // // //                   }}
// // // // // // //                 >
// // // // // // //                   Live Preview <GoArrowUpRight />
// // // // // // //                 </a>

// // // // // // //               </div>
// // // // // // //             </motion.div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //       </div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // };


// // // // // // import { motion } from "framer-motion";
// // // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // // import project1 from "../../../src/assets/zamans.png";
// // // // // // import project2 from "../../../src/assets/Foodessa.png";
// // // // // // import project3 from "../../../src/assets/outfiro.png";
// // // // // // import project4 from "../../../src/assets/realstate.png";

// // // // // // const primary = "#8750f7";

// // // // // // export const Portfolio = () => {

// // // // // //   const projects = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       title: "Zaman's Gadget",
// // // // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // //       image: project1,
// // // // // //       link: "https://zamansgadget.com/"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       title: "Foodessa Food Ordering App",
// // // // // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // //       image: project2,
// // // // // //       link: "https://foodessa.netlify.app/"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       title: "Outfiro Fashion Store",
// // // // // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // //       image: project3,
// // // // // //       link: "https://outfiro.netlify.app/"
// // // // // //     },
// // // // // //     {
// // // // // //        id: 4,
// // // // // //     title: "eTuitionBd – Tuition Platform",
// // // // // //     desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // // // // //     tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // // // // //     image: project4,
// // // // // //     link: "https://etuitionbd-portal.netlify.app/"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section
// // // // // //       style={{
// // // // // //         padding: "120px 0",
// // // // // //         background: "linear-gradient(180deg,#0d0f14 0%, #0b0c10 100%)",
// // // // // //         overflowX: "hidden" // 🔥 Prevent side scroll
// // // // // //       }}
// // // // // //     >
// // // // // //       <div className="container" style={{ overflow: "hidden" }}>

// // // // // //         {/* SECTION HEADER */}
// // // // // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // // // // //           <motion.h2
// // // // // //             initial={{ opacity: 0, y: 60 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             style={{
// // // // // //               fontSize: "48px",
// // // // // //               fontWeight: "800",
// // // // // //               background: "linear-gradient(90deg,#8750f7,#c084fc)",
// // // // // //               WebkitBackgroundClip: "text",
// // // // // //               WebkitTextFillColor: "transparent",
// // // // // //               marginBottom: "20px"
// // // // // //             }}
// // // // // //           >
// // // // // //             My Recent Works
// // // // // //           </motion.h2>

// // // // // //           <motion.p
// // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // // // //             style={{
// // // // // //               color: "#aaa",
// // // // // //               maxWidth: "650px",
// // // // // //               margin: "0 auto",
// // // // // //               fontSize: "18px",
// // // // // //               lineHeight: "1.6"
// // // // // //             }}
// // // // // //           >
// // // // // //             I transform ideas into premium web experiences that inspire users
// // // // // //             and deliver real-world solutions.
// // // // // //           </motion.p>
// // // // // //         </div>

// // // // // //         {/* PROJECT GRID */}
// // // // // //         <div
// // // // // //           className="project-grid"
// // // // // //           style={{
// // // // // //             display: "grid",
// // // // // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // // // // //             gap: "50px"
// // // // // //           }}
// // // // // //         >
// // // // // //           {projects.map((project) => (
// // // // // //             <motion.div
// // // // // //               key={project.id}
// // // // // //               whileHover={{ y: -12 }}
// // // // // //               transition={{ duration: 0.4 }}
// // // // // //               style={{
// // // // // //                 background: "rgba(255,255,255,0.03)",
// // // // // //                 backdropFilter: "blur(12px)",
// // // // // //                 borderRadius: "30px",
// // // // // //                 padding: "35px",
// // // // // //                 display: "flex",
// // // // // //                 flexDirection: "column",
// // // // // //                 gap: "25px",
// // // // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // // // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // // // // //                 transition: "all 0.4s ease",
// // // // // //                 width: "100%",
// // // // // //                 boxSizing: "border-box"
// // // // // //               }}
// // // // // //             >

// // // // // //               {/* IMAGE */}
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   borderRadius: "20px",
// // // // // //                   overflow: "hidden"
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <motion.img
// // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // //                   transition={{ duration: 0.6 }}
// // // // // //                   src={project.image}
// // // // // //                   alt={project.title}
// // // // // //                   style={{
// // // // // //                     width: "100%",
// // // // // //                     borderRadius: "20px",
// // // // // //                     objectFit: "cover"
// // // // // //                   }}
// // // // // //                 />
// // // // // //               </div>

// // // // // //               {/* CONTENT */}
// // // // // //               <div style={{ color: "#fff" }}>

// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     display: "inline-block",
// // // // // //                     padding: "6px 18px",
// // // // // //                     borderRadius: "30px",
// // // // // //                     background: `${primary}15`,
// // // // // //                     color: primary,
// // // // // //                     fontSize: "12px",
// // // // // //                     marginBottom: "15px",
// // // // // //                     letterSpacing: "1px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   MERN STACK
// // // // // //                 </div>

// // // // // //                 <h3
// // // // // //                   style={{
// // // // // //                     fontSize: "28px",
// // // // // //                     fontWeight: "700",
// // // // // //                     marginBottom: "15px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {project.title}
// // // // // //                 </h3>

// // // // // //                 <p
// // // // // //                   style={{
// // // // // //                     color: "#b5b5b5",
// // // // // //                     lineHeight: "1.7",
// // // // // //                     marginBottom: "20px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {project.desc}
// // // // // //                 </p>

// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     display: "flex",
// // // // // //                     flexWrap: "wrap",
// // // // // //                     gap: "10px",
// // // // // //                     marginBottom: "25px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {project.tech.map((tech, i) => (
// // // // // //                     <span
// // // // // //                       key={i}
// // // // // //                       style={{
// // // // // //                         padding: "6px 14px",
// // // // // //                         borderRadius: "20px",
// // // // // //                         background: "rgba(255,255,255,0.05)",
// // // // // //                         border: `1px solid ${primary}`,
// // // // // //                         color: primary,
// // // // // //                         fontSize: "12px"
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       {tech}
// // // // // //                     </span>
// // // // // //                   ))}
// // // // // //                 </div>

// // // // // //                 <a
// // // // // //                   href={project.link}
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{
// // // // // //                     display: "inline-flex",
// // // // // //                     alignItems: "center",
// // // // // //                     gap: "8px",
// // // // // //                     padding: "14px 30px",
// // // // // //                     borderRadius: "40px",
// // // // // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // // // // //                     color: "#fff",
// // // // // //                     fontWeight: "600",
// // // // // //                     textDecoration: "none",
// // // // // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Live Preview <GoArrowUpRight />
// // // // // //                 </a>

// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //       </div>

// // // // // //       {/* 🔥 RESPONSIVE FIX */}
// // // // // //       <style>
// // // // // //         {`
// // // // // //         @media (max-width: 768px) {
// // // // // //           .project-grid {
// // // // // //             grid-template-columns: 1fr !important;
// // // // // //           }
// // // // // //         }
// // // // // //         `}
// // // // // //       </style>

// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // import { motion } from "framer-motion";
// // // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // // import project1 from "../../../src/assets/zamans.png";
// // // // // // import project2 from "../../../src/assets/Foodessa.png";
// // // // // // import project3 from "../../../src/assets/outfiro.png";
// // // // // // import project4 from "../../../src/assets/realstate.png";

// // // // // // const primary = "#8750f7";

// // // // // // export const Portfolio = () => {

// // // // // //   const projects = [
// // // // // //     {
// // // // // //       id: 1,
// // // // // //       title: "Zaman's Gadget",
// // // // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // //       image: project1,
// // // // // //       link: "https://zamansgadget.com/"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 2,
// // // // // //       title: "Foodessa Food Ordering App",
// // // // // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // //       image: project2,
// // // // // //       link: "https://foodessa.netlify.app/"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 3,
// // // // // //       title: "Outfiro Fashion Store",
// // // // // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // // //       image: project3,
// // // // // //       link: "https://outfiro.netlify.app/"
// // // // // //     },
// // // // // //     {
// // // // // //       id: 4,
// // // // // //       title: "eTuitionBd – Tuition Platform",
// // // // // //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // // // // //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // // // // //       image: project4,
// // // // // //       link: "https://etuitionbd-portal.netlify.app/"
// // // // // //     }
// // // // // //   ];

// // // // // //   return (
// // // // // //     <section
// // // // // //       style={{
// // // // // //         padding: "120px 0",
// // // // // //         background: "linear-gradient(180deg,#0d0f14 0%, #0b0c10 100%)",
// // // // // //         overflowX: "hidden" 
// // // // // //       }}
// // // // // //     >
// // // // // //       <div className="container" style={{ overflow: "hidden" }}>

// // // // // //         {/* SECTION HEADER */}
// // // // // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // // // // //           <motion.h2
// // // // // //             initial={{ opacity: 0, y: 60 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8 }}
// // // // // //             style={{
// // // // // //               fontSize: "48px",
// // // // // //               fontWeight: "800",
// // // // // //               // EXACT SAME GRADIENT AS MD SHOAIB LOGO
// // // // // //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// // // // // //               WebkitBackgroundClip: "text",
// // // // // //               WebkitTextFillColor: "transparent",
// // // // // //               marginBottom: "20px",
// // // // // //               display: "inline-block"
// // // // // //             }}
// // // // // //           >
// // // // // //             My Recent Works
// // // // // //           </motion.h2>

// // // // // //           <motion.p
// // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // // // //             style={{
// // // // // //               color: "#aaa",
// // // // // //               maxWidth: "650px",
// // // // // //               margin: "0 auto",
// // // // // //               fontSize: "18px",
// // // // // //               lineHeight: "1.6"
// // // // // //             }}
// // // // // //           >
// // // // // //             I transform ideas into premium web experiences that inspire users
// // // // // //             and deliver real-world solutions.
// // // // // //           </motion.p>
// // // // // //         </div>

// // // // // //         {/* PROJECT GRID */}
// // // // // //         <div
// // // // // //           className="project-grid"
// // // // // //           style={{
// // // // // //             display: "grid",
// // // // // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // // // // //             gap: "50px"
// // // // // //           }}
// // // // // //         >
// // // // // //           {projects.map((project) => (
// // // // // //             <motion.div
// // // // // //               key={project.id}
// // // // // //               whileHover={{ y: -12 }}
// // // // // //               transition={{ duration: 0.4 }}
// // // // // //               style={{
// // // // // //                 background: "rgba(255,255,255,0.03)",
// // // // // //                 backdropFilter: "blur(12px)",
// // // // // //                 borderRadius: "30px",
// // // // // //                 padding: "35px",
// // // // // //                 display: "flex",
// // // // // //                 flexDirection: "column",
// // // // // //                 gap: "25px",
// // // // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // // // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // // // // //                 transition: "all 0.4s ease",
// // // // // //                 width: "100%",
// // // // // //                 boxSizing: "border-box"
// // // // // //               }}
// // // // // //             >

// // // // // //               {/* IMAGE */}
// // // // // //               <div
// // // // // //                 style={{
// // // // // //                   borderRadius: "20px",
// // // // // //                   overflow: "hidden"
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <motion.img
// // // // // //                   whileHover={{ scale: 1.05 }}
// // // // // //                   transition={{ duration: 0.6 }}
// // // // // //                   src={project.image}
// // // // // //                   alt={project.title}
// // // // // //                   style={{
// // // // // //                     width: "100%",
// // // // // //                     borderRadius: "20px",
// // // // // //                     objectFit: "cover"
// // // // // //                   }}
// // // // // //                 />
// // // // // //               </div>

// // // // // //               {/* CONTENT */}
// // // // // //               <div style={{ color: "#fff" }}>

// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     display: "inline-block",
// // // // // //                     padding: "6px 18px",
// // // // // //                     borderRadius: "30px",
// // // // // //                     background: `${primary}15`,
// // // // // //                     color: primary,
// // // // // //                     fontSize: "12px",
// // // // // //                     marginBottom: "15px",
// // // // // //                     letterSpacing: "1px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   MERN STACK
// // // // // //                 </div>

// // // // // //                 <h3
// // // // // //                   style={{
// // // // // //                     fontSize: "28px",
// // // // // //                     fontWeight: "700",
// // // // // //                     marginBottom: "15px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {project.title}
// // // // // //                 </h3>

// // // // // //                 <p
// // // // // //                   style={{
// // // // // //                     color: "#b5b5b5",
// // // // // //                     lineHeight: "1.7",
// // // // // //                     marginBottom: "20px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {project.desc}
// // // // // //                 </p>

// // // // // //                 <div
// // // // // //                   style={{
// // // // // //                     display: "flex",
// // // // // //                     flexWrap: "wrap",
// // // // // //                     gap: "10px",
// // // // // //                     marginBottom: "25px"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   {project.tech.map((tech, i) => (
// // // // // //                     <span
// // // // // //                       key={i}
// // // // // //                       style={{
// // // // // //                         padding: "6px 14px",
// // // // // //                         borderRadius: "20px",
// // // // // //                         background: "rgba(255,255,255,0.05)",
// // // // // //                         border: `1px solid ${primary}`,
// // // // // //                         color: primary,
// // // // // //                         fontSize: "12px"
// // // // // //                       }}
// // // // // //                     >
// // // // // //                       {tech}
// // // // // //                     </span>
// // // // // //                   ))}
// // // // // //                 </div>

// // // // // //                 <a
// // // // // //                   href={project.link}
// // // // // //                   target="_blank"
// // // // // //                   rel="noreferrer"
// // // // // //                   style={{
// // // // // //                     display: "inline-flex",
// // // // // //                     alignItems: "center",
// // // // // //                     gap: "8px",
// // // // // //                     padding: "14px 30px",
// // // // // //                     borderRadius: "40px",
// // // // // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // // // // //                     color: "#fff",
// // // // // //                     fontWeight: "600",
// // // // // //                     textDecoration: "none",
// // // // // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   Live Preview <GoArrowUpRight />
// // // // // //                 </a>

// // // // // //               </div>
// // // // // //             </motion.div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //       </div>

// // // // // //       <style>
// // // // // //         {`
// // // // // //         @media (max-width: 768px) {
// // // // // //           .project-grid {
// // // // // //             grid-template-columns: 1fr !important;
// // // // // //           }
// // // // // //         }
// // // // // //         `}
// // // // // //       </style>

// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // import { motion } from "framer-motion";
// // // // // import { GoArrowUpRight } from "react-icons/go";
// // // // // import project1 from "../../../src/assets/zamans.png";
// // // // // import project2 from "../../../src/assets/Foodessa.png";
// // // // // import project3 from "../../../src/assets/outfiro.png";
// // // // // import project4 from "../../../src/assets/realstate.png";


// // // // // const primary = "#8750f7";

// // // // // export const Portfolio = () => {

// // // // //   const projects = [
// // // // //     {
// // // // //       id: 1,
// // // // //       title: "Zaman's Gadget",
// // // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // //       image: project1,
// // // // //       link: "https://zamansgadget.com/"
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       title: "Foodessa Food Ordering App",
// // // // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // //       image: project2,
// // // // //       link: "https://foodessa.netlify.app/"
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       title: "Outfiro Fashion Store",
// // // // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // // //       image: project3,
// // // // //       link: "https://outfiro.netlify.app/"
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       title: "eTuitionBd – Tuition Platform",
// // // // //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // // // //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // // // //       image: project4,
// // // // //       link: "https://etuitionbd-portal.netlify.app/"
// // // // //     }
// // // // //   ];

// // // // //   return (
// // // // //     <section
// // // // //       style={{
// // // // //         padding: "120px 0",
// // // // //         background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
// // // // //         overflowX: "hidden"
// // // // //       }}
// // // // //     >
// // // // //       <div className="container" style={{ overflow: "hidden" }}>

// // // // //         {/* SECTION HEADER */}
// // // // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // // // //           <motion.h2
// // // // //             initial={{ opacity: 0, y: 60 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8 }}
// // // // //             style={{
// // // // //               fontSize: "48px",
// // // // //               fontWeight: "800",
// // // // //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// // // // //               WebkitBackgroundClip: "text",
// // // // //               WebkitTextFillColor: "transparent",
// // // // //               marginBottom: "20px",
// // // // //               display: "inline-block"
// // // // //             }}
// // // // //           >
// // // // //             My Recent Works
// // // // //           </motion.h2>

// // // // //           <motion.p
// // // // //             initial={{ opacity: 0, y: 40 }}
// // // // //             whileInView={{ opacity: 1, y: 0 }}
// // // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // // //             style={{
// // // // //               color: "#aaa",
// // // // //               maxWidth: "650px",
// // // // //               margin: "0 auto",
// // // // //               fontSize: "18px",
// // // // //               lineHeight: "1.6"
// // // // //             }}
// // // // //           >
// // // // //             I transform ideas into premium web experiences that inspire users
// // // // //             and deliver real-world solutions.
// // // // //           </motion.p>
// // // // //         </div>

// // // // //         {/* PROJECT GRID */}
// // // // //         <div
// // // // //           className="project-grid"
// // // // //           style={{
// // // // //             display: "grid",
// // // // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // // // //             gap: "50px"
// // // // //           }}
// // // // //         >
// // // // //           {projects.map((project) => (
// // // // //             <motion.div
// // // // //               key={project.id}
// // // // //               whileHover={{ y: -12 }}
// // // // //               transition={{ duration: 0.4 }}
// // // // //               style={{
// // // // //                 background: "rgba(255,255,255,0.03)",
// // // // //                 backdropFilter: "blur(12px)",
// // // // //                 borderRadius: "30px",
// // // // //                 padding: "35px",
// // // // //                 display: "flex",
// // // // //                 flexDirection: "column",
// // // // //                 gap: "25px",
// // // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // // // //                 transition: "all 0.4s ease",
// // // // //                 width: "100%",
// // // // //                 boxSizing: "border-box"
// // // // //               }}
// // // // //             >

// // // // //               {/* IMAGE */}
// // // // //               <div
// // // // //                 style={{
// // // // //                   borderRadius: "20px",
// // // // //                   overflow: "hidden"
// // // // //                 }}
// // // // //               >
// // // // //                 <motion.img
// // // // //                   whileHover={{ scale: 1.05 }}
// // // // //                   transition={{ duration: 0.6 }}
// // // // //                   src={project.image}
// // // // //                   alt={project.title}
// // // // //                   style={{
// // // // //                     width: "100%",
// // // // //                     borderRadius: "20px",
// // // // //                     objectFit: "cover"
// // // // //                   }}
// // // // //                 />
// // // // //               </div>

// // // // //               {/* CONTENT */}
// // // // //               <div style={{ color: "#fff" }}>

// // // // //                 <div
// // // // //                   style={{
// // // // //                     display: "inline-block",
// // // // //                     padding: "6px 18px",
// // // // //                     borderRadius: "30px",
// // // // //                     background: `${primary}15`,
// // // // //                     color: primary,
// // // // //                     fontSize: "12px",
// // // // //                     marginBottom: "15px",
// // // // //                     letterSpacing: "1px"
// // // // //                   }}
// // // // //                 >
// // // // //                   MERN STACK
// // // // //                 </div>

// // // // //                 <h3
// // // // //                   style={{
// // // // //                     fontSize: "28px",
// // // // //                     fontWeight: "700",
// // // // //                     marginBottom: "15px"
// // // // //                   }}
// // // // //                 >
// // // // //                   {project.title}
// // // // //                 </h3>

// // // // //                 <p
// // // // //                   style={{
// // // // //                     color: "#b5b5b5",
// // // // //                     lineHeight: "1.7",
// // // // //                     marginBottom: "20px"
// // // // //                   }}
// // // // //                 >
// // // // //                   {project.desc}
// // // // //                 </p>

// // // // //                 <div
// // // // //                   style={{
// // // // //                     display: "flex",
// // // // //                     flexWrap: "wrap",
// // // // //                     gap: "10px",
// // // // //                     marginBottom: "25px"
// // // // //                   }}
// // // // //                 >
// // // // //                   {project.tech.map((tech, i) => (
// // // // //                     <span
// // // // //                       key={i}
// // // // //                       style={{
// // // // //                         padding: "6px 14px",
// // // // //                         borderRadius: "20px",
// // // // //                         background: "rgba(255,255,255,0.05)",
// // // // //                         border: `1px solid ${primary}`,
// // // // //                         color: primary,
// // // // //                         fontSize: "12px"
// // // // //                       }}
// // // // //                     >
// // // // //                       {tech}
// // // // //                     </span>
// // // // //                   ))}
// // // // //                 </div>

// // // // //                 <a
// // // // //                   href={project.link}
// // // // //                   target="_blank"
// // // // //                   rel="noreferrer"
// // // // //                   style={{
// // // // //                     display: "inline-flex",
// // // // //                     alignItems: "center",
// // // // //                     gap: "8px",
// // // // //                     padding: "14px 30px",
// // // // //                     borderRadius: "40px",
// // // // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // // // //                     color: "#fff",
// // // // //                     fontWeight: "600",
// // // // //                     textDecoration: "none",
// // // // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // // // //                   }}
// // // // //                 >
// // // // //                   Live Preview <GoArrowUpRight />
// // // // //                 </a>

// // // // //               </div>
// // // // //             </motion.div>
// // // // //           ))}
// // // // //         </div>

// // // // //       </div>

// // // // //       <style>
// // // // //         {`
// // // // //         @media (max-width: 768px) {
// // // // //           .project-grid {
// // // // //             grid-template-columns: 1fr !important;
// // // // //           }
// // // // //         }
// // // // //         `}
// // // // //       </style>

// // // // //     </section>
// // // // //   );
// // // // // };

// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
// // // // import { useState, useEffect } from "react";
// // // // import project1 from "../../../src/assets/zamans.png";
// // // // import project2 from "../../../src/assets/Foodessa.png";
// // // // import project3 from "../../../src/assets/outfiro.png";
// // // // import project4 from "../../../src/assets/realstate.png";
// // // // import zamans2 from "../../../src/assets/z2.png";
// // // // import zamans3 from "../../../src/assets/z3.png";
// // // // import zamans4 from "../../../src/assets/z4.png";
// // // // import zamans5 from "../../../src/assets/z5.png";

// // // // const primary = "#8750f7";

// // // // export const Portfolio = () => {
// // // //   // Zaman's Gadget er image list
// // // //   const zamanImages = [project1, zamans2, zamans3, zamans4, zamans5];
// // // //   const [currentIdx, setCurrentIdx] = useState(0);
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   // Auto animation logic (1.2 sec)
// // // //   useEffect(() => {
// // // //     let interval;
// // // //     if (!isHovered) {
// // // //       interval = setInterval(() => {
// // // //         setCurrentIdx((prev) => (prev === zamanImages.length - 1 ? 0 : prev + 1));
// // // //       }, 1200); // 1.2 seconds
// // // //     }
// // // //     return () => clearInterval(interval);
// // // //   }, [isHovered, zamanImages.length]);

// // // //   const nextSlide = (e) => {
// // // //     e.preventDefault();
// // // //     setCurrentIdx((prev) => (prev === zamanImages.length - 1 ? 0 : prev + 1));
// // // //   };

// // // //   const prevSlide = (e) => {
// // // //     e.preventDefault();
// // // //     setCurrentIdx((prev) => (prev === 0 ? zamanImages.length - 1 : prev - 1));
// // // //   };

// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Zaman's Gadget",
// // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // //       image: zamanImages, // Array passed for slider
// // // //       link: "https://zamansgadget.com/"
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Foodessa Food Ordering App",
// // // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // //       image: project2,
// // // //       link: "https://foodessa.netlify.app/"
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Outfiro Fashion Store",
// // // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // //       image: project3,
// // // //       link: "https://outfiro.netlify.app/"
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "eTuitionBd – Tuition Platform",
// // // //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // // //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // // //       image: project4,
// // // //       link: "https://etuitionbd-portal.netlify.app/"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section
// // // //       style={{
// // // //         padding: "120px 0",
// // // //         background: "transparent", // Background transparent rakha hoyeche jeno Home.jsx er sathe match hoy
// // // //         overflowX: "hidden",
// // // //         position: "relative",
// // // //         zIndex: 1
// // // //       }}
// // // //     >
// // // //       <div className="container" style={{ overflow: "hidden" }}>

// // // //         {/* SECTION HEADER */}
// // // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // // //           <motion.h2
// // // //             initial={{ opacity: 0, y: 60 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             style={{
// // // //               fontSize: "48px",
// // // //               fontWeight: "800",
// // // //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// // // //               WebkitBackgroundClip: "text",
// // // //               WebkitTextFillColor: "transparent",
// // // //               marginBottom: "20px",
// // // //               display: "inline-block"
// // // //             }}
// // // //           >
// // // //             My Recent Works
// // // //           </motion.h2>

// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 40 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // //             style={{
// // // //               color: "#aaa",
// // // //               maxWidth: "650px",
// // // //               margin: "0 auto",
// // // //               fontSize: "18px",
// // // //               lineHeight: "1.6"
// // // //             }}
// // // //           >
// // // //             I transform ideas into premium web experiences that inspire users
// // // //             and deliver real-world solutions.
// // // //           </motion.p>
// // // //         </div>

// // // //         {/* PROJECT GRID */}
// // // //         <div
// // // //           className="project-grid"
// // // //           style={{
// // // //             display: "grid",
// // // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // // //             gap: "50px"
// // // //           }}
// // // //         >
// // // //           {projects.map((project) => (
// // // //             <motion.div
// // // //               key={project.id}
// // // //               whileHover={{ y: -12 }}
// // // //               transition={{ duration: 0.4 }}
// // // //               onMouseEnter={() => project.id === 1 && setIsHovered(true)}
// // // //               onMouseLeave={() => project.id === 1 && setIsHovered(false)}
// // // //               style={{
// // // //                 background: "rgba(255,255,255,0.03)",
// // // //                 backdropFilter: "blur(12px)",
// // // //                 borderRadius: "30px",
// // // //                 padding: "35px",
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //                 gap: "25px",
// // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // // //                 transition: "all 0.4s ease",
// // // //                 width: "100%",
// // // //                 boxSizing: "border-box",
// // // //                 position: "relative"
// // // //               }}
// // // //             >

// // // //               {/* IMAGE / SLIDER SECTION */}
// // // //               <div
// // // //                 style={{
// // // //                   borderRadius: "20px",
// // // //                   overflow: "hidden",
// // // //                   position: "relative",
// // // //                   height: "280px" // Fixed height for consistency
// // // //                 }}
// // // //               >
// // // //                 {project.id === 1 ? (
// // // //                   <>
// // // //                     <AnimatePresence mode="wait">
// // // //                       <motion.img
// // // //                         key={currentIdx}
// // // //                         src={zamanImages[currentIdx]}
// // // //                         initial={{ opacity: 0, x: 20 }}
// // // //                         animate={{ opacity: 1, x: 0 }}
// // // //                         exit={{ opacity: 0, x: -20 }}
// // // //                         transition={{ duration: 0.5 }}
// // // //                         style={{
// // // //                           width: "100%",
// // // //                           height: "100%",
// // // //                           borderRadius: "20px",
// // // //                           objectFit: "cover"
// // // //                         }}
// // // //                       />
// // // //                     </AnimatePresence>

// // // //                     {/* ARROWS ON HOVER */}
// // // //                     {isHovered && (
// // // //                       <>
// // // //                         <button
// // // //                           onClick={prevSlide}
// // // //                           className="slider-arrow left"
// // // //                           style={{ left: "10px" }}
// // // //                         >
// // // //                           <GoChevronLeft size={25} />
// // // //                         </button>
// // // //                         <button
// // // //                           onClick={nextSlide}
// // // //                           className="slider-arrow right"
// // // //                           style={{ right: "10px" }}
// // // //                         >
// // // //                           <GoChevronRight size={25} />
// // // //                         </button>
// // // //                       </>
// // // //                     )}
// // // //                   </>
// // // //                 ) : (
// // // //                   <motion.img
// // // //                     whileHover={{ scale: 1.05 }}
// // // //                     transition={{ duration: 0.6 }}
// // // //                     src={project.image}
// // // //                     alt={project.title}
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       height: "100%",
// // // //                       borderRadius: "20px",
// // // //                       objectFit: "cover"
// // // //                     }}
// // // //                   />
// // // //                 )}
// // // //               </div>

// // // //               {/* CONTENT */}
// // // //               <div style={{ color: "#fff" }}>
// // // //                 <div
// // // //                   style={{
// // // //                     display: "inline-block",
// // // //                     padding: "6px 18px",
// // // //                     borderRadius: "30px",
// // // //                     background: `${primary}15`,
// // // //                     color: primary,
// // // //                     fontSize: "12px",
// // // //                     marginBottom: "15px",
// // // //                     letterSpacing: "1px"
// // // //                   }}
// // // //                 >
// // // //                   MERN STACK
// // // //                 </div>

// // // //                 <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
// // // //                   {project.title}
// // // //                 </h3>

// // // //                 <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
// // // //                   {project.desc}
// // // //                 </p>

// // // //                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
// // // //                   {project.tech.map((tech, i) => (
// // // //                     <span
// // // //                       key={i}
// // // //                       style={{
// // // //                         padding: "6px 14px",
// // // //                         borderRadius: "20px",
// // // //                         background: "rgba(255,255,255,0.05)",
// // // //                         border: `1px solid ${primary}`,
// // // //                         color: primary,
// // // //                         fontSize: "12px"
// // // //                       }}
// // // //                     >
// // // //                       {tech}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>

// // // //                 <a
// // // //                   href={project.link}
// // // //                   target="_blank"
// // // //                   rel="noreferrer"
// // // //                   style={{
// // // //                     display: "inline-flex",
// // // //                     alignItems: "center",
// // // //                     gap: "8px",
// // // //                     padding: "14px 30px",
// // // //                     borderRadius: "40px",
// // // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // // //                     color: "#fff",
// // // //                     fontWeight: "600",
// // // //                     textDecoration: "none",
// // // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // // //                   }}
// // // //                 >
// // // //                   Live Preview <GoArrowUpRight />
// // // //                 </a>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <style>
// // // //         {`
// // // //         @media (max-width: 768px) {
// // // //           .project-grid {
// // // //             grid-template-columns: 1fr !important;
// // // //           }
// // // //         }

// // // //         .slider-arrow {
// // // //           position: absolute;
// // // //           top: 50%;
// // // //           transform: translateY(-50%);
// // // //           background: rgba(135, 80, 247, 0.8);
// // // //           color: white;
// // // //           border: none;
// // // //           width: 40px;
// // // //           height: 40px;
// // // //           border-radius: 50%;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           cursor: pointer;
// // // //           z-index: 10;
// // // //           transition: 0.3s;
// // // //           backdrop-filter: blur(5px);
// // // //         }

// // // //         .slider-arrow:hover {
// // // //           background: #8750f7;
// // // //           transform: translateY(-50%) scale(1.1);
// // // //         }
// // // //         `}
// // // //       </style>
// // // //     </section>
// // // //   );
// // // // };


// // // // import { motion, AnimatePresence } from "framer-motion";
// // // // import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
// // // // import { useState, useEffect } from "react";
// // // // import project1 from "../../../src/assets/zamans.png";
// // // // import project2 from "../../../src/assets/Foodessa.png";
// // // // import project3 from "../../../src/assets/outfiro.png";
// // // // import project4 from "../../../src/assets/realstate.png";
// // // // import zamans2 from "../../../src/assets/z2.png";
// // // // import zamans3 from "../../../src/assets/z3.png";
// // // // import zamans4 from "../../../src/assets/z4.png";
// // // // import zamans5 from "../../../src/assets/z5.png";

// // // // const primary = "#8750f7";

// // // // export const Portfolio = () => {
// // // //   // Slider states for Zaman's Gadget
// // // //   const zamanImages = [project1, zamans2, zamans3, zamans4, zamans5];
// // // //   const [currentIdx, setCurrentIdx] = useState(0);
// // // //   const [isHovered, setIsHovered] = useState(false);

// // // //   // Auto animation logic (2.5 seconds)
// // // //   useEffect(() => {
// // // //     let interval;
// // // //     if (!isHovered) {
// // // //       interval = setInterval(() => {
// // // //         setCurrentIdx((prev) => (prev === zamanImages.length - 1 ? 0 : prev + 1));
// // // //       }, 2500); // 2.5 seconds
// // // //     }
// // // //     return () => clearInterval(interval);
// // // //   }, [isHovered, zamanImages.length]);

// // // //   const nextSlide = (e) => {
// // // //     e.preventDefault();
// // // //     e.stopPropagation();
// // // //     setCurrentIdx((prev) => (prev === zamanImages.length - 1 ? 0 : prev + 1));
// // // //   };

// // // //   const prevSlide = (e) => {
// // // //     e.preventDefault();
// // // //     e.stopPropagation();
// // // //     setCurrentIdx((prev) => (prev === 0 ? zamanImages.length - 1 : prev - 1));
// // // //   };

// // // //   const projects = [
// // // //     {
// // // //       id: 1,
// // // //       title: "Zaman's Gadget",
// // // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // //       image: project1,
// // // //       link: "https://zamansgadget.com/"
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       title: "Foodessa Food Ordering App",
// // // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // //       image: project2,
// // // //       link: "https://foodessa.netlify.app/"
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       title: "Outfiro Fashion Store",
// // // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // // //       image: project3,
// // // //       link: "https://outfiro.netlify.app/"
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       title: "eTuitionBd – Tuition Platform",
// // // //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // // //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // // //       image: project4,
// // // //       link: "https://etuitionbd-portal.netlify.app/"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section
// // // //       style={{
// // // //         padding: "120px 0",
// // // //         background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
// // // //         overflowX: "hidden"
// // // //       }}
// // // //     >
// // // //       <div className="container" style={{ overflow: "hidden" }}>

// // // //         {/* SECTION HEADER */}
// // // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // // //           <motion.h2
// // // //             initial={{ opacity: 0, y: 60 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8 }}
// // // //             style={{
// // // //               fontSize: "48px",
// // // //               fontWeight: "800",
// // // //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// // // //               WebkitBackgroundClip: "text",
// // // //               WebkitTextFillColor: "transparent",
// // // //               marginBottom: "20px",
// // // //               display: "inline-block"
// // // //             }}
// // // //           >
// // // //             My Recent Works
// // // //           </motion.h2>

// // // //           <motion.p
// // // //             initial={{ opacity: 0, y: 40 }}
// // // //             whileInView={{ opacity: 1, y: 0 }}
// // // //             transition={{ duration: 0.8, delay: 0.3 }}
// // // //             style={{
// // // //               color: "#aaa",
// // // //               maxWidth: "650px",
// // // //               margin: "0 auto",
// // // //               fontSize: "18px",
// // // //               lineHeight: "1.6"
// // // //             }}
// // // //           >
// // // //             I transform ideas into premium web experiences that inspire users
// // // //             and deliver real-world solutions.
// // // //           </motion.p>
// // // //         </div>

// // // //         {/* PROJECT GRID */}
// // // //         <div
// // // //           className="project-grid"
// // // //           style={{
// // // //             display: "grid",
// // // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // // //             gap: "50px"
// // // //           }}
// // // //         >
// // // //           {projects.map((project) => (
// // // //             <motion.div
// // // //               key={project.id}
// // // //               whileHover={{ y: -12 }}
// // // //               transition={{ duration: 0.4 }}
// // // //               onMouseEnter={() => project.id === 1 && setIsHovered(true)}
// // // //               onMouseLeave={() => project.id === 1 && setIsHovered(false)}
// // // //               style={{
// // // //                 background: "rgba(255,255,255,0.03)",
// // // //                 backdropFilter: "blur(12px)",
// // // //                 borderRadius: "30px",
// // // //                 padding: "35px",
// // // //                 display: "flex",
// // // //                 flexDirection: "column",
// // // //                 gap: "25px",
// // // //                 border: "1px solid rgba(255,255,255,0.08)",
// // // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // // //                 transition: "all 0.4s ease",
// // // //                 width: "100%",
// // // //                 boxSizing: "border-box",
// // // //                 position: "relative"
// // // //               }}
// // // //             >

// // // //               {/* IMAGE SECTION */}
// // // //               <div
// // // //                 style={{
// // // //                   borderRadius: "20px",
// // // //                   overflow: "hidden",
// // // //                   position: "relative"
// // // //                 }}
// // // //               >
// // // //                 {project.id === 1 ? (
// // // //                   <div style={{ position: "relative", width: "100%" }}>
// // // //                     <AnimatePresence mode="wait">
// // // //                       <motion.img
// // // //                         key={currentIdx}
// // // //                         src={zamanImages[currentIdx]}
// // // //                         initial={{ opacity: 0 }}
// // // //                         animate={{ opacity: 1 }}
// // // //                         exit={{ opacity: 0 }}
// // // //                         transition={{ duration: 0.8 }}
// // // //                         style={{
// // // //                           width: "100%",
// // // //                           borderRadius: "20px",
// // // //                           objectFit: "cover",
// // // //                           display: "block"
// // // //                         }}
// // // //                       />
// // // //                     </AnimatePresence>

// // // //                     {/* ARROW CONTROLS */}
// // // //                     {isHovered && (
// // // //                       <>
// // // //                         <button onClick={prevSlide} className="nav-btn left">
// // // //                           <GoChevronLeft size={24} />
// // // //                         </button>
// // // //                         <button onClick={nextSlide} className="nav-btn right">
// // // //                           <GoChevronRight size={24} />
// // // //                         </button>
// // // //                       </>
// // // //                     )}
// // // //                   </div>
// // // //                 ) : (
// // // //                   <motion.img
// // // //                     whileHover={{ scale: 1.05 }}
// // // //                     transition={{ duration: 0.6 }}
// // // //                     src={project.image}
// // // //                     alt={project.title}
// // // //                     style={{
// // // //                       width: "100%",
// // // //                       borderRadius: "20px",
// // // //                       objectFit: "cover",
// // // //                       display: "block"
// // // //                     }}
// // // //                   />
// // // //                 )}
// // // //               </div>

// // // //               {/* CONTENT */}
// // // //               <div style={{ color: "#fff" }}>
// // // //                 <div
// // // //                   style={{
// // // //                     display: "inline-block",
// // // //                     padding: "6px 18px",
// // // //                     borderRadius: "30px",
// // // //                     background: `${primary}15`,
// // // //                     color: primary,
// // // //                     fontSize: "12px",
// // // //                     marginBottom: "15px",
// // // //                     letterSpacing: "1px"
// // // //                   }}
// // // //                 >
// // // //                   MERN STACK
// // // //                 </div>

// // // //                 <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
// // // //                   {project.title}
// // // //                 </h3>

// // // //                 <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
// // // //                   {project.desc}
// // // //                 </p>

// // // //                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
// // // //                   {project.tech.map((tech, i) => (
// // // //                     <span
// // // //                       key={i}
// // // //                       style={{
// // // //                         padding: "6px 14px",
// // // //                         borderRadius: "20px",
// // // //                         background: "rgba(255,255,255,0.05)",
// // // //                         border: `1px solid ${primary}`,
// // // //                         color: primary,
// // // //                         fontSize: "12px"
// // // //                       }}
// // // //                     >
// // // //                       {tech}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>

// // // //                 <a
// // // //                   href={project.link}
// // // //                   target="_blank"
// // // //                   rel="noreferrer"
// // // //                   style={{
// // // //                     display: "inline-flex",
// // // //                     alignItems: "center",
// // // //                     gap: "8px",
// // // //                     padding: "14px 30px",
// // // //                     borderRadius: "40px",
// // // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // // //                     color: "#fff",
// // // //                     fontWeight: "600",
// // // //                     textDecoration: "none",
// // // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // // //                   }}
// // // //                 >
// // // //                   Live Preview <GoArrowUpRight />
// // // //                 </a>
// // // //               </div>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </div>

// // // //       <style>
// // // //         {`
// // // //         @media (max-width: 768px) {
// // // //           .project-grid {
// // // //             grid-template-columns: 1fr !important;
// // // //           }
// // // //         }
        
// // // //         .nav-btn {
// // // //           position: absolute;
// // // //           top: 50%;
// // // //           transform: translateY(-50%);
// // // //           background: rgba(135, 80, 247, 0.7);
// // // //           color: white;
// // // //           border: none;
// // // //           width: 40px;
// // // //           height: 40px;
// // // //           border-radius: 50%;
// // // //           display: flex;
// // // //           align-items: center;
// // // //           justify-content: center;
// // // //           cursor: pointer;
// // // //           z-index: 5;
// // // //           transition: 0.3s;
// // // //         }

// // // //         .nav-btn:hover {
// // // //           background: #8750f7;
// // // //           scale: 1.1;
// // // //         }

// // // //         .nav-btn.left { left: 15px; }
// // // //         .nav-btn.right { right: 15px; }
// // // //         `}
// // // //       </style>
// // // //     </section>
// // // //   );
// // // // };


// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
// // // import { useState, useEffect } from "react";
// // // import project1 from "../../../src/assets/zamans.png";
// // // import project2 from "../../../src/assets/Foodessa.png";
// // // import project3 from "../../../src/assets/outfiro.png";
// // // import project4 from "../../../src/assets/realstate.png";
// // // import zamans2 from "../../../src/assets/z2.png";
// // // import zamans3 from "../../../src/assets/z3.png";
// // // import zamans4 from "../../../src/assets/z4.png";
// // // import zamans5 from "../../../src/assets/z5.png";
// // // // import foodessa2 from "../../../src/assets/F2.png";
// // // // import foodessa3 from "../../../src/assets/f3.png";
// // // // import foodessa4 from "../../../src/assets/f4.png";
// // // // import outfiro2 from "../../../src/assets/o2.png";
// // // // import outfiro3 from "../../../src/assets/o3.png";
// // // // import outfiro4 from "../../../src/assets/o4.png";
// // // // import outfiro5 from "../../../src/assets/o5.png";
// // // // import outfiro6 from "../../../src/assets/o6.png";
// // // // import outfiro7 from "../../../src/assets/o7.png";
// // // // import outfiro8 from "../../../src/assets/o8.png";
// // // // import etuition2 from "../../../src/assets/e2.png";
// // // // import etuition3 from "../../../src/assets/e3.png";
// // // // import etuition4 from "../../../src/assets/e4.png";
// // // // import etuition5 from "../../../src/assets/e5.png";
// // // // import etuition6 from "../../../src/assets/e6.png";
// // // // import etuition7 from "../../../src/assets/e7.png";

// // // const primary = "#8750f7";

// // // export const Portfolio = () => {
// // //   const zamanImages = [project1, zamans2, zamans3, zamans4, zamans5];
// // //   const [currentIdx, setCurrentIdx] = useState(0);
// // //   const [isHovered, setIsHovered] = useState(false);
// // //   const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

// // //   // Best suitable timing: 3.5 seconds (3500ms)
// // //   useEffect(() => {
// // //     let interval;
// // //     if (!isHovered) {
// // //       interval = setInterval(() => {
// // //         setDirection(1);
// // //         setCurrentIdx((prev) => (prev === zamanImages.length - 1 ? 0 : prev + 1));
// // //       }, 3500);
// // //     }
// // //     return () => clearInterval(interval);
// // //   }, [isHovered, zamanImages.length]);

// // //   const nextSlide = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     setDirection(1);
// // //     setCurrentIdx((prev) => (prev === zamanImages.length - 1 ? 0 : prev + 1));
// // //   };

// // //   const prevSlide = (e) => {
// // //     e.preventDefault();
// // //     e.stopPropagation();
// // //     setDirection(-1);
// // //     setCurrentIdx((prev) => (prev === 0 ? zamanImages.length - 1 : prev - 1));
// // //   };

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "Zaman's Gadget",
// // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // //       image: project1,
// // //       link: "https://zamansgadget.com/"
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Foodessa Food Ordering App",
// // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // //       image: project2,
// // //       link: "https://foodessa.netlify.app/"
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Outfiro Fashion Store",
// // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // //       image: project3,
// // //       link: "https://outfiro.netlify.app/"
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "eTuitionBd – Tuition Platform",
// // //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // //       image: project4,
// // //       link: "https://etuitionbd-portal.netlify.app/"
// // //     }
// // //   ];

// // //   // Animation variants for satisfying slide
// // //   const slideVariants = {
// // //     initial: (direction) => ({
// // //       x: direction > 0 ? 100 : -100,
// // //       opacity: 0,
// // //       scale: 0.95
// // //     }),
// // //     animate: {
// // //       x: 0,
// // //       opacity: 1,
// // //       scale: 1,
// // //       transition: { duration: 0.6, ease: "easeOut" }
// // //     },
// // //     exit: (direction) => ({
// // //       x: direction > 0 ? -100 : 100,
// // //       opacity: 0,
// // //       scale: 1.05,
// // //       transition: { duration: 0.4, ease: "easeIn" }
// // //     })
// // //   };

// // //   return (
// // //     <section
// // //       style={{
// // //         padding: "120px 0",
// // //         background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
// // //         overflowX: "hidden"
// // //       }}
// // //     >
// // //       <div className="container" style={{ overflow: "hidden" }}>
        
// // //         {/* SECTION HEADER */}
// // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 60 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             style={{
// // //               fontSize: "48px",
// // //               fontWeight: "800",
// // //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// // //               WebkitBackgroundClip: "text",
// // //               WebkitTextFillColor: "transparent",
// // //               marginBottom: "20px",
// // //               display: "inline-block"
// // //             }}
// // //           >
// // //             My Recent Works
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //             style={{
// // //               color: "#aaa",
// // //               maxWidth: "650px",
// // //               margin: "0 auto",
// // //               fontSize: "18px",
// // //               lineHeight: "1.6"
// // //             }}
// // //           >
// // //             I transform ideas into premium web experiences that inspire users
// // //             and deliver real-world solutions.
// // //           </motion.p>
// // //         </div>

// // //         {/* PROJECT GRID */}
// // //         <div
// // //           className="project-grid"
// // //           style={{
// // //             display: "grid",
// // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // //             gap: "50px"
// // //           }}
// // //         >
// // //           {projects.map((project) => (
// // //             <motion.div
// // //               key={project.id}
// // //               whileHover={{ y: -12 }}
// // //               transition={{ duration: 0.4 }}
// // //               onMouseEnter={() => project.id === 1 && setIsHovered(true)}
// // //               onMouseLeave={() => project.id === 1 && setIsHovered(false)}
// // //               style={{
// // //                 background: "rgba(255,255,255,0.03)",
// // //                 backdropFilter: "blur(12px)",
// // //                 borderRadius: "30px",
// // //                 padding: "35px",
// // //                 display: "flex",
// // //                 flexDirection: "column",
// // //                 gap: "25px",
// // //                 border: "1px solid rgba(255,255,255,0.08)",
// // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // //                 width: "100%",
// // //                 boxSizing: "border-box",
// // //                 position: "relative"
// // //               }}
// // //             >
// // //               {/* IMAGE SECTION */}
// // //               <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative" }}>
// // //                 {project.id === 1 ? (
// // //                   <div style={{ position: "relative", width: "100%", height: "100%" }}>
// // //                     <AnimatePresence mode="wait" custom={direction}>
// // //                       <motion.img
// // //                         key={currentIdx}
// // //                         src={zamanImages[currentIdx]}
// // //                         custom={direction}
// // //                         variants={slideVariants}
// // //                         initial="initial"
// // //                         animate="animate"
// // //                         exit="exit"
// // //                         style={{
// // //                           width: "100%",
// // //                           borderRadius: "20px",
// // //                           objectFit: "cover",
// // //                           display: "block"
// // //                         }}
// // //                       />
// // //                     </AnimatePresence>

// // //                     {isHovered && (
// // //                       <>
// // //                         <button onClick={prevSlide} className="nav-btn left">
// // //                           <GoChevronLeft size={24} />
// // //                         </button>
// // //                         <button onClick={nextSlide} className="nav-btn right">
// // //                           <GoChevronRight size={24} />
// // //                         </button>
// // //                       </>
// // //                     )}
// // //                   </div>
// // //                 ) : (
// // //                   <motion.img
// // //                     whileHover={{ scale: 1.05 }}
// // //                     transition={{ duration: 0.6 }}
// // //                     src={project.image}
// // //                     alt={project.title}
// // //                     style={{
// // //                       width: "100%",
// // //                       borderRadius: "20px",
// // //                       objectFit: "cover",
// // //                       display: "block"
// // //                     }}
// // //                   />
// // //                 )}
// // //               </div>

// // //               {/* CONTENT */}
// // //               <div style={{ color: "#fff" }}>
// // //                 <div style={{
// // //                   display: "inline-block",
// // //                   padding: "6px 18px",
// // //                   borderRadius: "30px",
// // //                   background: `${primary}15`,
// // //                   color: primary,
// // //                   fontSize: "12px",
// // //                   marginBottom: "15px",
// // //                   letterSpacing: "1px"
// // //                 }}>
// // //                   MERN STACK
// // //                 </div>

// // //                 <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
// // //                   {project.title}
// // //                 </h3>

// // //                 <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
// // //                   {project.desc}
// // //                 </p>

// // //                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
// // //                   {project.tech.map((tech, i) => (
// // //                     <span key={i} style={{
// // //                       padding: "6px 14px",
// // //                       borderRadius: "20px",
// // //                       background: "rgba(255,255,255,0.05)",
// // //                       border: `1px solid ${primary}`,
// // //                       color: primary,
// // //                       fontSize: "12px"
// // //                     }}>
// // //                       {tech}
// // //                     </span>
// // //                   ))}
// // //                 </div>

// // //                 <a
// // //                   href={project.link}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   style={{
// // //                     display: "inline-flex",
// // //                     alignItems: "center",
// // //                     gap: "8px",
// // //                     padding: "14px 30px",
// // //                     borderRadius: "40px",
// // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // //                     color: "#fff",
// // //                     fontWeight: "600",
// // //                     textDecoration: "none",
// // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // //                   }}
// // //                 >
// // //                   Live Preview <GoArrowUpRight />
// // //                 </a>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <style>
// // //         {`
// // //         @media (max-width: 768px) {
// // //           .project-grid {
// // //             grid-template-columns: 1fr !important;
// // //           }
// // //         }
        
// // //         .nav-btn {
// // //           position: absolute;
// // //           top: 50%;
// // //           transform: translateY(-50%);
// // //           background: rgba(135, 80, 247, 0.85);
// // //           color: white;
// // //           border: none;
// // //           width: 44px;
// // //           height: 44px;
// // //           border-radius: 50%;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           cursor: pointer;
// // //           z-index: 10;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           box-shadow: 0 4px 15px rgba(0,0,0,0.3);
// // //         }

// // //         .nav-btn:hover {
// // //           background: #8750f7;
// // //           transform: translateY(-50%) scale(1.1);
// // //           box-shadow: 0 0 20px rgba(135, 80, 247, 0.5);
// // //         }

// // //         .nav-btn.left { left: 15px; }
// // //         .nav-btn.right { right: 15px; }
// // //         `}
// // //       </style>
// // //     </section>
// // //   );
// // // };


// // // import { motion, AnimatePresence } from "framer-motion";
// // // import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
// // // import { useState, useEffect } from "react";

// // // // Imports
// // // import project1 from "../../../src/assets/zamans.png";
// // // import project2 from "../../../src/assets/Foodessa.png";
// // // import project3 from "../../../src/assets/outfiro.png";
// // // import project4 from "../../../src/assets/realstate.png";
// // // import zamans2 from "../../../src/assets/z2.png";
// // // import zamans3 from "../../../src/assets/z3.png";
// // // import zamans4 from "../../../src/assets/z4.png";
// // // import zamans5 from "../../../src/assets/z5.png";
// // // import foodessa2 from "../../../src/assets/F2.png";
// // // import foodessa3 from "../../../src/assets/f3.png";
// // // import foodessa4 from "../../../src/assets/f4.png";
// // // import outfiro2 from "../../../src/assets/o2.png";
// // // import outfiro3 from "../../../src/assets/o3.png";
// // // import outfiro4 from "../../../src/assets/o4.png";
// // // import outfiro5 from "../../../src/assets/o5.png";
// // // import outfiro6 from "../../../src/assets/o6.png";
// // // import outfiro7 from "../../../src/assets/o7.png";
// // // import outfiro8 from "../../../src/assets/o8.png";
// // // import etuition2 from "../../../src/assets/e2.png";
// // // import etuition3 from "../../../src/assets/e3.png";
// // // import etuition4 from "../../../src/assets/e4.png";
// // // import etuition5 from "../../../src/assets/e5.png";
// // // import etuition6 from "../../../src/assets/e6.png";
// // // import etuition7 from "../../../src/assets/e7.png";

// // // const primary = "#8750f7";

// // // export const Portfolio = () => {
// // //   // State for tracking current image index for each project
// // //   const [indices, setIndices] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
// // //   const [hoveredId, setHoveredId] = useState(null);
// // //   const [direction, setDirection] = useState(1);

// // //   const projects = [
// // //     {
// // //       id: 1,
// // //       title: "Zaman's Gadget",
// // //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // //       images: [project1, zamans2, zamans3, zamans4, zamans5],
// // //       link: "https://zamansgadget.com/"
// // //     },
// // //     {
// // //       id: 2,
// // //       title: "Foodessa Food Ordering App",
// // //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // //       images: [project2, foodessa2, foodessa3, foodessa4],
// // //       link: "https://foodessa.netlify.app/"
// // //     },
// // //     {
// // //       id: 3,
// // //       title: "Outfiro Fashion Store",
// // //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// // //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// // //       images: [project3, outfiro2, outfiro3, outfiro4, outfiro5, outfiro6, outfiro7, outfiro8],
// // //       link: "https://outfiro.netlify.app/"
// // //     },
// // //     {
// // //       id: 4,
// // //       title: "eTuitionBd – Tuition Platform",
// // //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// // //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// // //       images: [project4, etuition2, etuition3, etuition4, etuition5, etuition6, etuition7],
// // //       link: "https://etuitionbd-portal.netlify.app/"
// // //     }
// // //   ];

// // //   // Timing: 3.5 seconds (3500ms) - Exact same as your requirement
// // //   useEffect(() => {
// // //     const interval = setInterval(() => {
// // //       setDirection(1);
// // //       setIndices((prev) => {
// // //         const newIndices = { ...prev };
// // //         projects.forEach((p) => {
// // //           if (hoveredId !== p.id) {
// // //             newIndices[p.id] = (prev[p.id] + 1) % p.images.length;
// // //           }
// // //         });
// // //         return newIndices;
// // //       });
// // //     }, 3500);
// // //     return () => clearInterval(interval);
// // //   }, [hoveredId]);

// // //   const slideVariants = {
// // //     initial: (direction) => ({
// // //       x: direction > 0 ? 100 : -100,
// // //       opacity: 0,
// // //       scale: 0.95
// // //     }),
// // //     animate: {
// // //       x: 0,
// // //       opacity: 1,
// // //       scale: 1,
// // //       transition: { duration: 0.6, ease: "easeOut" }
// // //     },
// // //     exit: (direction) => ({
// // //       x: direction > 0 ? -100 : 100,
// // //       opacity: 0,
// // //       scale: 1.05,
// // //       transition: { duration: 0.4, ease: "easeIn" }
// // //     })
// // //   };

// // //   return (
// // //     <section
// // //       style={{
// // //         padding: "120px 0",
// // //         background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
// // //         overflowX: "hidden"
// // //       }}
// // //     >
// // //       <div className="container" style={{ overflow: "hidden" }}>
        
// // //         {/* SECTION HEADER */}
// // //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 60 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8 }}
// // //             style={{
// // //               fontSize: "48px",
// // //               fontWeight: "800",
// // //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// // //               WebkitBackgroundClip: "text",
// // //               WebkitTextFillColor: "transparent",
// // //               marginBottom: "20px",
// // //               display: "inline-block"
// // //             }}
// // //           >
// // //             My Recent Works
// // //           </motion.h2>

// // //           <motion.p
// // //             initial={{ opacity: 0, y: 40 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             transition={{ duration: 0.8, delay: 0.3 }}
// // //             style={{
// // //               color: "#aaa",
// // //               maxWidth: "650px",
// // //               margin: "0 auto",
// // //               fontSize: "18px",
// // //               lineHeight: "1.6"
// // //             }}
// // //           >
// // //             I transform ideas into premium web experiences that inspire users
// // //             and deliver real-world solutions.
// // //           </motion.p>
// // //         </div>

// // //         {/* PROJECT GRID */}
// // //         <div
// // //           className="project-grid"
// // //           style={{
// // //             display: "grid",
// // //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // //             gap: "50px"
// // //           }}
// // //         >
// // //           {projects.map((project) => (
// // //             <motion.div
// // //               key={project.id}
// // //               whileHover={{ y: -12 }}
// // //               transition={{ duration: 0.4 }}
// // //               onMouseEnter={() => setHoveredId(project.id)}
// // //               onMouseLeave={() => setHoveredId(null)}
// // //               style={{
// // //                 background: "rgba(255,255,255,0.03)",
// // //                 backdropFilter: "blur(12px)",
// // //                 borderRadius: "30px",
// // //                 padding: "35px",
// // //                 display: "flex",
// // //                 flexDirection: "column",
// // //                 gap: "25px",
// // //                 border: "1px solid rgba(255,255,255,0.08)",
// // //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// // //                 width: "100%",
// // //                 boxSizing: "border-box",
// // //                 position: "relative"
// // //               }}
// // //             >
// // //               {/* IMAGE SECTION - ALL SAME TO SAME */}
// // //               <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative" }}>
// // //                 <div style={{ position: "relative", width: "100%", height: "100%" }}>
// // //                   <AnimatePresence mode="wait" custom={direction}>
// // //                     <motion.img
// // //                       key={indices[project.id]}
// // //                       src={project.images[indices[project.id]]}
// // //                       custom={direction}
// // //                       variants={slideVariants}
// // //                       initial="initial"
// // //                       animate="animate"
// // //                       exit="exit"
// // //                       style={{
// // //                         width: "100%",
// // //                         borderRadius: "20px",
// // //                         objectFit: "cover",
// // //                         display: "block"
// // //                       }}
// // //                     />
// // //                   </AnimatePresence>

// // //                   {hoveredId === project.id && (
// // //                     <>
// // //                       <button 
// // //                         onClick={(e) => {
// // //                           e.preventDefault(); e.stopPropagation();
// // //                           setDirection(-1);
// // //                           setIndices(prev => ({...prev, [project.id]: (prev[project.id] - 1 + project.images.length) % project.images.length}));
// // //                         }} 
// // //                         className="nav-btn left"
// // //                       >
// // //                         <GoChevronLeft size={24} />
// // //                       </button>
// // //                       <button 
// // //                         onClick={(e) => {
// // //                           e.preventDefault(); e.stopPropagation();
// // //                           setDirection(1);
// // //                           setIndices(prev => ({...prev, [project.id]: (prev[project.id] + 1) % project.images.length}));
// // //                         }} 
// // //                         className="nav-btn right"
// // //                       >
// // //                         <GoChevronRight size={24} />
// // //                       </button>
// // //                     </>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //               {/* CONTENT */}
// // //               <div style={{ color: "#fff" }}>
// // //                 <div style={{
// // //                   display: "inline-block",
// // //                   padding: "6px 18px",
// // //                   borderRadius: "30px",
// // //                   background: `${primary}15`,
// // //                   color: primary,
// // //                   fontSize: "12px",
// // //                   marginBottom: "15px",
// // //                   letterSpacing: "1px"
// // //                 }}>
// // //                   MERN STACK
// // //                 </div>

// // //                 <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
// // //                   {project.title}
// // //                 </h3>

// // //                 <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
// // //                   {project.desc}
// // //                 </p>

// // //                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
// // //                   {project.tech.map((tech, i) => (
// // //                     <span key={i} style={{
// // //                       padding: "6px 14px",
// // //                       borderRadius: "20px",
// // //                       background: "rgba(255,255,255,0.05)",
// // //                       border: `1px solid ${primary}`,
// // //                       color: primary,
// // //                       fontSize: "12px"
// // //                     }}>
// // //                       {tech}
// // //                     </span>
// // //                   ))}
// // //                 </div>

// // //                 <a
// // //                   href={project.link}
// // //                   target="_blank"
// // //                   rel="noreferrer"
// // //                   style={{
// // //                     display: "inline-flex",
// // //                     alignItems: "center",
// // //                     gap: "8px",
// // //                     padding: "14px 30px",
// // //                     borderRadius: "40px",
// // //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// // //                     color: "#fff",
// // //                     fontWeight: "600",
// // //                     textDecoration: "none",
// // //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// // //                   }}
// // //                 >
// // //                   Live Preview <GoArrowUpRight />
// // //                 </a>
// // //               </div>
// // //             </motion.div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       <style>
// // //         {`
// // //         @media (max-width: 768px) {
// // //           .project-grid {
// // //             grid-template-columns: 1fr !important;
// // //           }
// // //         }
        
// // //         .nav-btn {
// // //           position: absolute;
// // //           top: 50%;
// // //           transform: translateY(-50%);
// // //           background: rgba(135, 80, 247, 0.85);
// // //           color: white;
// // //           border: none;
// // //           width: 44px;
// // //           height: 44px;
// // //           border-radius: 50%;
// // //           display: flex;
// // //           align-items: center;
// // //           justify-content: center;
// // //           cursor: pointer;
// // //           z-index: 10;
// // //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// // //           box-shadow: 0 4px 15px rgba(0,0,0,0.3);
// // //         }

// // //         .nav-btn:hover {
// // //           background: #8750f7;
// // //           transform: translateY(-50%) scale(1.1);
// // //           box-shadow: 0 0 20px rgba(135, 80, 247, 0.5);
// // //         }

// // //         .nav-btn.left { left: 15px; }
// // //         .nav-btn.right { right: 15px; }
// // //         `}
// // //       </style>
// // //     </section>
// // //   );
// // // };

// // import { motion, AnimatePresence } from "framer-motion";
// // import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
// // import { useState, useEffect } from "react";

// // // Imports
// // import project1 from "../../../src/assets/zamans.png";
// // import project2 from "../../../src/assets/Foodessa.png";
// // import project3 from "../../../src/assets/outfiro.png";
// // import project4 from "../../../src/assets/realstate.png";
// // import zamans2 from "../../../src/assets/z2.png";
// // import zamans3 from "../../../src/assets/z3.png";
// // import zamans4 from "../../../src/assets/z4.png";
// // import zamans5 from "../../../src/assets/z5.png";
// // import foodessa2 from "../../../src/assets/F2.png";
// // import foodessa3 from "../../../src/assets/f3.png";
// // import foodessa4 from "../../../src/assets/f4.png";
// // import outfiro2 from "../../../src/assets/o2.png";
// // import outfiro3 from "../../../src/assets/o3.png";
// // import outfiro4 from "../../../src/assets/o4.png";
// // import outfiro5 from "../../../src/assets/o5.png";
// // import outfiro6 from "../../../src/assets/o6.png";
// // import outfiro7 from "../../../src/assets/o7.png";
// // import outfiro8 from "../../../src/assets/o8.png";
// // import etuition2 from "../../../src/assets/e2.png";
// // import etuition3 from "../../../src/assets/e3.png";
// // import etuition4 from "../../../src/assets/e4.png";
// // import etuition5 from "../../../src/assets/e5.png";
// // import etuition6 from "../../../src/assets/e6.png";
// // import etuition7 from "../../../src/assets/e7.png";

// // const primary = "#8750f7";

// // export const Portfolio = () => {
// //   const [indices, setIndices] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
// //   const [hoveredId, setHoveredId] = useState(null);
// //   const [direction, setDirection] = useState(1);

// //   const projects = [
// //     {
// //       id: 1,
// //       title: "Zaman's Gadget",
// //       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
// //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// //       images: [project1, zamans2, zamans3, zamans4, zamans5],
// //       link: "https://zamansgadget.com/"
// //     },
// //     {
// //       id: 2,
// //       title: "Foodessa Food Ordering App",
// //       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
// //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// //       images: [project2, foodessa2, foodessa3, foodessa4],
// //       link: "https://foodessa.netlify.app/"
// //     },
// //     {
// //       id: 3,
// //       title: "Outfiro Fashion Store",
// //       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
// //       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
// //       images: [project3, outfiro2, outfiro3, outfiro4, outfiro5, outfiro6, outfiro7, outfiro8],
// //       link: "https://outfiro.netlify.app/"
// //     },
// //     {
// //       id: 4,
// //       title: "eTuitionBd – Tuition Platform",
// //       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
// //       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
// //       images: [project4, etuition2, etuition3, etuition4, etuition5, etuition6, etuition7],
// //       link: "https://etuitionbd-portal.netlify.app/"
// //     }
// //   ];

// //   // Auto change logic with 3.5s interval like the video
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       if (hoveredId === null) {
// //         setDirection(1);
// //         setIndices((prev) => {
// //           const newIndices = { ...prev };
// //           projects.forEach((p) => {
// //             newIndices[p.id] = (prev[p.id] + 1) % p.images.length;
// //           });
// //           return newIndices;
// //         });
// //       }
// //     }, 3500);
// //     return () => clearInterval(interval);
// //   }, [hoveredId]);

// //   // Smooth slide variants based on video's movement
// //   const slideVariants = {
// //     initial: (direction) => ({
// //       x: direction > 0 ? "100%" : "-100%",
// //       opacity: 0
// //     }),
// //     animate: {
// //       x: 0,
// //       opacity: 1,
// //       transition: {
// //         x: { type: "spring", stiffness: 300, damping: 30 },
// //         opacity: { duration: 0.4 }
// //       }
// //     },
// //     exit: (direction) => ({
// //       x: direction > 0 ? "-100%" : "100%",
// //       opacity: 0,
// //       transition: {
// //         x: { type: "spring", stiffness: 300, damping: 30 },
// //         opacity: { duration: 0.4 }
// //       }
// //     })
// //   };

// //   return (
// //     <section
// //       style={{
// //         padding: "120px 0",
// //         background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
// //         overflowX: "hidden"
// //       }}
// //     >
// //       <div className="container" style={{ overflow: "hidden" }}>
        
// //         <div style={{ textAlign: "center", marginBottom: "80px" }}>
// //           <motion.h2
// //             initial={{ opacity: 0, y: 60 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             style={{
// //               fontSize: "48px",
// //               fontWeight: "800",
// //               background: "linear-gradient(90deg, #ffffff, #8750f7)",
// //               WebkitBackgroundClip: "text",
// //               WebkitTextFillColor: "transparent",
// //               marginBottom: "20px",
// //               display: "inline-block"
// //             }}
// //           >
// //             My Recent Works
// //           </motion.h2>

// //           <motion.p
// //             initial={{ opacity: 0, y: 40 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //             style={{
// //               color: "#aaa",
// //               maxWidth: "650px",
// //               margin: "0 auto",
// //               fontSize: "18px",
// //               lineHeight: "1.6"
// //             }}
// //           >
// //             I transform ideas into premium web experiences that inspire users
// //             and deliver real-world solutions.
// //           </motion.p>
// //         </div>

// //         <div
// //           className="project-grid"
// //           style={{
// //             display: "grid",
// //             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// //             gap: "50px"
// //           }}
// //         >
// //           {projects.map((project) => (
// //             <motion.div
// //               key={project.id}
// //               whileHover={{ y: -12 }}
// //               transition={{ duration: 0.4 }}
// //               onMouseEnter={() => setHoveredId(project.id)}
// //               onMouseLeave={() => setHoveredId(null)}
// //               style={{
// //                 background: "rgba(255,255,255,0.03)",
// //                 backdropFilter: "blur(12px)",
// //                 borderRadius: "30px",
// //                 padding: "35px",
// //                 display: "flex",
// //                 flexDirection: "column",
// //                 gap: "25px",
// //                 border: "1px solid rgba(255,255,255,0.08)",
// //                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
// //                 width: "100%",
// //                 boxSizing: "border-box",
// //                 position: "relative"
// //               }}
// //             >
// //               <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative" }}>
// //                 <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
// //                   <AnimatePresence mode="popLayout" custom={direction} initial={false}>
// //                     <motion.img
// //                       key={indices[project.id]}
// //                       src={project.images[indices[project.id]]}
// //                       custom={direction}
// //                       variants={slideVariants}
// //                       initial="initial"
// //                       animate="animate"
// //                       exit="exit"
// //                       style={{
// //                         width: "100%",
// //                         borderRadius: "20px",
// //                         objectFit: "cover",
// //                         display: "block"
// //                       }}
// //                     />
// //                   </AnimatePresence>

// //                   {hoveredId === project.id && (
// //                     <>
// //                       <button 
// //                         onClick={(e) => {
// //                           e.preventDefault(); e.stopPropagation();
// //                           setDirection(-1);
// //                           setIndices(prev => ({...prev, [project.id]: (prev[project.id] - 1 + project.images.length) % project.images.length}));
// //                         }} 
// //                         className="nav-btn left"
// //                       >
// //                         <GoChevronLeft size={24} />
// //                       </button>
// //                       <button 
// //                         onClick={(e) => {
// //                           e.preventDefault(); e.stopPropagation();
// //                           setDirection(1);
// //                           setIndices(prev => ({...prev, [project.id]: (prev[project.id] + 1) % project.images.length}));
// //                         }} 
// //                         className="nav-btn right"
// //                       >
// //                         <GoChevronRight size={24} />
// //                       </button>
// //                     </>
// //                   )}
// //                 </div>
// //               </div>

// //               <div style={{ color: "#fff" }}>
// //                 <div style={{
// //                   display: "inline-block",
// //                   padding: "6px 18px",
// //                   borderRadius: "30px",
// //                   background: `${primary}15`,
// //                   color: primary,
// //                   fontSize: "12px",
// //                   marginBottom: "15px",
// //                   letterSpacing: "1px"
// //                 }}>
// //                   MERN STACK
// //                 </div>

// //                 <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
// //                   {project.title}
// //                 </h3>

// //                 <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
// //                   {project.desc}
// //                 </p>

// //                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
// //                   {project.tech.map((tech, i) => (
// //                     <span key={i} style={{
// //                       padding: "6px 14px",
// //                       borderRadius: "20px",
// //                       background: "rgba(255,255,255,0.05)",
// //                       border: `1px solid ${primary}`,
// //                       color: primary,
// //                       fontSize: "12px"
// //                     }}>
// //                       {tech}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 <a
// //                   href={project.link}
// //                   target="_blank"
// //                   rel="noreferrer"
// //                   style={{
// //                     display: "inline-flex",
// //                     alignItems: "center",
// //                     gap: "8px",
// //                     padding: "14px 30px",
// //                     borderRadius: "40px",
// //                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
// //                     color: "#fff",
// //                     fontWeight: "600",
// //                     textDecoration: "none",
// //                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
// //                   }}
// //                 >
// //                   Live Preview <GoArrowUpRight />
// //                 </a>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>

// //       <style>
// //         {`
// //         @media (max-width: 768px) {
// //           .project-grid {
// //             grid-template-columns: 1fr !important;
// //           }
// //         }
        
// //         .nav-btn {
// //           position: absolute;
// //           top: 50%;
// //           transform: translateY(-50%);
// //           background: rgba(135, 80, 247, 0.85);
// //           color: white;
// //           border: none;
// //           width: 44px;
// //           height: 44px;
// //           border-radius: 50%;
// //           display: flex;
// //           align-items: center;
// //           justify-content: center;
// //           cursor: pointer;
// //           z-index: 10;
// //           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
// //           box-shadow: 0 4px 15px rgba(0,0,0,0.3);
// //         }

// //         .nav-btn:hover {
// //           background: #8750f7;
// //           transform: translateY(-50%) scale(1.1);
// //           box-shadow: 0 0 20px rgba(135, 80, 247, 0.5);
// //         }

// //         .nav-btn.left { left: 15px; }
// //         .nav-btn.right { right: 15px; }
// //         `}
// //       </style>
// //     </section>
// //   );
// // };


// import { motion, AnimatePresence } from "framer-motion";
// import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
// import { useState, useEffect } from "react";

// // Imports
// import project1 from "../../../src/assets/zamans.png";
// import project2 from "../../../src/assets/Foodessa.png";
// import project3 from "../../../src/assets/outfiro.png";
// import project4 from "../../../src/assets/realstate.png";
// import zamans2 from "../../../src/assets/z2.png";
// import zamans3 from "../../../src/assets/z3.png";
// import zamans4 from "../../../src/assets/z4.png";
// import zamans5 from "../../../src/assets/z5.png";
// import foodessa2 from "../../../src/assets/F2.png";
// import foodessa3 from "../../../src/assets/f3.png";
// import foodessa4 from "../../../src/assets/f4.png";
// import outfiro2 from "../../../src/assets/o2.png";
// import outfiro3 from "../../../src/assets/o3.png";
// import outfiro4 from "../../../src/assets/o4.png";
// import outfiro5 from "../../../src/assets/o5.png";
// import outfiro6 from "../../../src/assets/o6.png";
// import outfiro7 from "../../../src/assets/o7.png";
// import outfiro8 from "../../../src/assets/o8.png";
// import etuition2 from "../../../src/assets/e2.png";
// import etuition3 from "../../../src/assets/e3.png";
// import etuition4 from "../../../src/assets/e4.png";
// import etuition5 from "../../../src/assets/e5.png";
// import etuition6 from "../../../src/assets/e6.png";
// import etuition7 from "../../../src/assets/e7.png";

// const primary = "#8750f7";

// export const Portfolio = () => {
//   const [indices, setIndices] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
//   const [hoveredId, setHoveredId] = useState(null);
//   const [direction, setDirection] = useState(1);

//   const projects = [
//     {
//       id: 1,
//       title: "Zaman's Gadget",
//       desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
//       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
//       images: [project1, zamans2, zamans3, zamans4, zamans5],
//       link: "https://zamansgadget.com/"
//     },
//     {
//       id: 2,
//       title: "Foodessa Food Ordering App",
//       desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
//       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
//       images: [project2, foodessa2, foodessa3, foodessa4],
//       link: "https://foodessa.netlify.app/"
//     },
//     {
//       id: 3,
//       title: "Outfiro Fashion Store",
//       desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
//       tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
//       images: [project3, outfiro2, outfiro3, outfiro4, outfiro5, outfiro6, outfiro7, outfiro8],
//       link: "https://outfiro.netlify.app/"
//     },
//     {
//       id: 4,
//       title: "eTuitionBd – Tuition Platform",
//       desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
//       tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
//       images: [project4, etuition2, etuition3, etuition4, etuition5, etuition6, etuition7],
//       link: "https://etuitionbd-portal.netlify.app/"
//     }
//   ];

//   // 3.5s interval auto-slider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (hoveredId === null) {
//         setDirection(1);
//         setIndices((prev) => {
//           const newIndices = { ...prev };
//           projects.forEach((p) => {
//             newIndices[p.id] = (prev[p.id] + 1) % p.images.length;
//           });
//           return newIndices;
//         });
//       }
//     }, 3500);
//     return () => clearInterval(interval);
//   }, [hoveredId]);

//   // UPDATED: Smooth Fade + Slide Variants
//   const slideVariants = {
//     initial: (direction) => ({
//       x: direction > 0 ? 50 : -50, // Reduced distance for smoother feel
//       opacity: 0,
//       filter: "blur(4px)" // Slight blur for cinematic effect
//     }),
//     animate: {
//       x: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//       transition: {
//         x: { type: "spring", stiffness: 100, damping: 20 },
//         opacity: { duration: 0.8, ease: "easeInOut" }, // Slower fade in
//         filter: { duration: 0.6 }
//       }
//     },
//     exit: (direction) => ({
//       x: direction > 0 ? -50 : 50,
//       opacity: 0,
//       filter: "blur(4px)",
//       transition: {
//         x: { type: "spring", stiffness: 100, damping: 20 },
//         opacity: { duration: 0.6, ease: "easeInOut" } // Slower fade out
//       }
//     })
//   };

//   return (
//     <section
//       style={{
//         padding: "120px 0",
//         background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
//         overflowX: "hidden"
//       }}
//     >
//       <div className="container" style={{ overflow: "hidden" }}>
        
//         <div style={{ textAlign: "center", marginBottom: "80px" }}>
//           <motion.h2
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             style={{
//               fontSize: "48px",
//               fontWeight: "800",
//               background: "linear-gradient(90deg, #ffffff, #8750f7)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               marginBottom: "20px",
//               display: "inline-block"
//             }}
//           >
//             My Recent Works
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             style={{
//               color: "#aaa",
//               maxWidth: "650px",
//               margin: "0 auto",
//               fontSize: "18px",
//               lineHeight: "1.6"
//             }}
//           >
//             I transform ideas into premium web experiences that inspire users
//             and deliver real-world solutions.
//           </motion.p>
//         </div>

//         <div
//           className="project-grid"
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
//             gap: "50px"
//           }}
//         >
//           {projects.map((project) => (
//             <motion.div
//               key={project.id}
//               whileHover={{ y: -12 }}
//               transition={{ duration: 0.4 }}
//               onMouseEnter={() => setHoveredId(project.id)}
//               onMouseLeave={() => setHoveredId(null)}
//               style={{
//                 background: "rgba(255,255,255,0.03)",
//                 backdropFilter: "blur(12px)",
//                 borderRadius: "30px",
//                 padding: "35px",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "25px",
//                 border: "1px solid rgba(255,255,255,0.08)",
//                 boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
//                 width: "100%",
//                 boxSizing: "border-box",
//                 position: "relative"
//               }}
//             >
//               <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative", minHeight: "280px" }}>
//                 <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
//                   <AnimatePresence mode="wait" custom={direction} initial={false}>
//                     <motion.img
//                       key={indices[project.id]}
//                       src={project.images[indices[project.id]]}
//                       custom={direction}
//                       variants={slideVariants}
//                       initial="initial"
//                       animate="animate"
//                       exit="exit"
//                       style={{
//                         width: "100%",
//                         borderRadius: "20px",
//                         objectFit: "cover",
//                         display: "block"
//                       }}
//                     />
//                   </AnimatePresence>

//                   {hoveredId === project.id && (
//                     <>
//                       <button 
//                         onClick={(e) => {
//                           e.preventDefault(); e.stopPropagation();
//                           setDirection(-1);
//                           setIndices(prev => ({...prev, [project.id]: (prev[project.id] - 1 + project.images.length) % project.images.length}));
//                         }} 
//                         className="nav-btn left"
//                       >
//                         <GoChevronLeft size={24} />
//                       </button>
//                       <button 
//                         onClick={(e) => {
//                           e.preventDefault(); e.stopPropagation();
//                           setDirection(1);
//                           setIndices(prev => ({...prev, [project.id]: (prev[project.id] + 1) % project.images.length}));
//                         }} 
//                         className="nav-btn right"
//                       >
//                         <GoChevronRight size={24} />
//                       </button>
//                     </>
//                   )}
//                 </div>
//               </div>

//               <div style={{ color: "#fff" }}>
//                 <div style={{
//                   display: "inline-block",
//                   padding: "6px 18px",
//                   borderRadius: "30px",
//                   background: `${primary}15`,
//                   color: primary,
//                   fontSize: "12px",
//                   marginBottom: "15px",
//                   letterSpacing: "1px"
//                 }}>
//                   MERN STACK
//                 </div>

//                 <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
//                   {project.title}
//                 </h3>

//                 <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
//                   {project.desc}
//                 </p>

//                 <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
//                   {project.tech.map((tech, i) => (
//                     <span key={i} style={{
//                       padding: "6px 14px",
//                       borderRadius: "20px",
//                       background: "rgba(255,255,255,0.05)",
//                       border: `1px solid ${primary}`,
//                       color: primary,
//                       fontSize: "12px"
//                     }}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   style={{
//                     display: "inline-flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     padding: "14px 30px",
//                     borderRadius: "40px",
//                     background: `linear-gradient(90deg,#8750f7,#c084fc)`,
//                     color: "#fff",
//                     fontWeight: "600",
//                     textDecoration: "none",
//                     boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
//                   }}
//                 >
//                   Live Preview <GoArrowUpRight />
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//         @media (max-width: 768px) {
//           .project-grid {
//             grid-template-columns: 1fr !important;
//           }
//         }
        
//         .nav-btn {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           background: rgba(135, 80, 247, 0.85);
//           color: white;
//           border: none;
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           z-index: 10;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: 0 4px 15px rgba(0,0,0,0.3);
//         }

//         .nav-btn:hover {
//           background: #8750f7;
//           transform: translateY(-50%) scale(1.1);
//           box-shadow: 0 0 20px rgba(135, 80, 247, 0.5);
//         }

//         .nav-btn.left { left: 15px; }
//         .nav-btn.right { right: 15px; }
//         `}
//       </style>
//     </section>
//   );
// };



import { motion, AnimatePresence } from "framer-motion";
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
import { useState, useEffect } from "react";

// Imports
import project1 from "../../../src/assets/zamans.png";
import project2 from "../../../src/assets/Foodessa.png";
import project3 from "../../../src/assets/outfiro.png";
import project4 from "../../../src/assets/realstate.png";
import zamans2 from "../../../src/assets/z2.png";
import zamans3 from "../../../src/assets/z3.png";
import zamans4 from "../../../src/assets/z4.png";
import zamans5 from "../../../src/assets/z5.png";
import foodessa2 from "../../../src/assets/F2.png";
import foodessa3 from "../../../src/assets/f3.png";
import foodessa4 from "../../../src/assets/f4.png";
import outfiro2 from "../../../src/assets/o2.png";
import outfiro3 from "../../../src/assets/o3.png";
import outfiro4 from "../../../src/assets/o4.png";
import outfiro5 from "../../../src/assets/o5.png";
import outfiro6 from "../../../src/assets/o6.png";
import outfiro7 from "../../../src/assets/o7.png";
import outfiro8 from "../../../src/assets/o8.png";
import etuition2 from "../../../src/assets/e2.png";
import etuition3 from "../../../src/assets/e3.png";
import etuition4 from "../../../src/assets/e4.png";
import etuition5 from "../../../src/assets/e5.png";
import etuition6 from "../../../src/assets/e6.png";
import etuition7 from "../../../src/assets/e7.png";

const primary = "#8750f7";

export const Portfolio = () => {
  const [indices, setIndices] = useState({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const [hoveredId, setHoveredId] = useState(null);
  const [direction, setDirection] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Zaman's Gadget",
      desc: "A complete MERN Stack e-commerce platform for browsing and purchasing gadgets online with secure authentication and modern UI experience.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      images: [project1, zamans2, zamans3, zamans4, zamans5],
      link: "https://zamansgadget.com/"
    },
    {
      id: 2,
      title: "Foodessa Food Ordering App",
      desc: "A complete MERN stack food ordering platform with authentication, category filtering, cart system, and a powerful admin dashboard.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      images: [project2, foodessa2, foodessa3, foodessa4],
      link: "https://foodessa.netlify.app/"
    },
    {
      id: 3,
      title: "Outfiro Fashion Store",
      desc: "Modern fullstack dress selling platform featuring dynamic product listings, cart management, and secure payment gateway.",
      tech: ["React", "Tailwind", "Node.js", "Express", "MongoDB", "JWT"],
      images: [project3, outfiro2, outfiro3, outfiro4, outfiro5, outfiro6, outfiro7, outfiro8],
      link: "https://outfiro.netlify.app/"
    },
    {
      id: 4,
      title: "eTuitionBd – Tuition Platform",
      desc: "A complete tuition management platform connecting students, tutors, and admins with secure authentication, dynamic dashboards.",
      tech: ["React", "Tailwind", "Node.js", "MongoDB", "Stripe"],
      images: [project4, etuition2, etuition3, etuition4, etuition5, etuition6, etuition7],
      link: "https://etuitionbd-portal.netlify.app/"
    }
  ];

  // Auto change logic with 3.5s interval like the video
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredId === null) {
        setDirection(1);
        setIndices((prev) => {
          const newIndices = { ...prev };
          projects.forEach((p) => {
            newIndices[p.id] = (prev[p.id] + 1) % p.images.length;
          });
          return newIndices;
        });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, [hoveredId]);

  // Smooth slide variants based on video's movement
  const slideVariants = {
    initial: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  return (
    <section
      style={{
        padding: "120px 0",
        background: "linear-gradient(135deg, #030712 0%, #020617 40%, #030712 100%)",
        overflowX: "hidden"
      }}
    >
      <div className="container" style={{ overflow: "hidden" }}>
        
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              fontSize: "48px",
              fontWeight: "800",
              background: "linear-gradient(90deg, #ffffff, #8750f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "20px",
              display: "inline-block"
            }}
          >
            My Recent Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              color: "#aaa",
              maxWidth: "650px",
              margin: "0 auto",
              fontSize: "18px",
              lineHeight: "1.6"
            }}
          >
            I transform ideas into premium web experiences that inspire users
            and deliver real-world solutions.
          </motion.p>
        </div>

        <div
          className="project-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
            gap: "50px"
          }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                borderRadius: "30px",
                padding: "35px",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
                width: "100%",
                boxSizing: "border-box",
                position: "relative"
              }}
            >
              <div style={{ borderRadius: "20px", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                  <AnimatePresence mode="popLayout" custom={direction} initial={false}>
                    <motion.img
                      key={indices[project.id]}
                      src={project.images[indices[project.id]]}
                      custom={direction}
                      variants={slideVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      style={{
                        width: "100%",
                        borderRadius: "20px",
                        objectFit: "cover",
                        display: "block"
                      }}
                    />
                  </AnimatePresence>

                  {hoveredId === project.id && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.preventDefault(); e.stopPropagation();
                          setDirection(-1);
                          setIndices(prev => ({...prev, [project.id]: (prev[project.id] - 1 + project.images.length) % project.images.length}));
                        }} 
                        className="nav-btn left"
                      >
                        <GoChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.preventDefault(); e.stopPropagation();
                          setDirection(1);
                          setIndices(prev => ({...prev, [project.id]: (prev[project.id] + 1) % project.images.length}));
                        }} 
                        className="nav-btn right"
                      >
                        <GoChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              <div style={{ color: "#fff" }}>
                <div style={{
                  display: "inline-block",
                  padding: "6px 18px",
                  borderRadius: "30px",
                  background: `${primary}15`,
                  color: primary,
                  fontSize: "12px",
                  marginBottom: "15px",
                  letterSpacing: "1px"
                }}>
                  MERN STACK
                </div>

                <h3 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "15px" }}>
                  {project.title}
                </h3>

                <p style={{ color: "#b5b5b5", lineHeight: "1.7", marginBottom: "20px" }}>
                  {project.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "25px" }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{
                      padding: "6px 14px",
                      borderRadius: "20px",
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${primary}`,
                      color: primary,
                      fontSize: "12px"
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 30px",
                    borderRadius: "40px",
                    background: `linear-gradient(90deg,#8750f7,#c084fc)`,
                    color: "#fff",
                    fontWeight: "600",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(135,80,247,0.4)"
                  }}
                >
                  Live Preview <GoArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>
        {`
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(135, 80, 247, 0.85);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

        .nav-btn:hover {
          background: #8750f7;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 0 20px rgba(135, 80, 247, 0.5);
        }

        .nav-btn.left { left: 15px; }
        .nav-btn.right { right: 15px; }
        `}
      </style>
    </section>
  );
};