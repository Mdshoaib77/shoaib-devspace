// // // // // // import { useEffect, useState } from "react";
// // // // // // import {
// // // // // //   Home,
// // // // // //   Layout,
// // // // // //   Portfolio,         // Add Portfolio here
// // // // // //   PortfolioDetails,
// // // // // //   Service,
// // // // // //   Resume,
// // // // // //   Skill,
// // // // // //   Testimonial,
// // // // // //   Blog,
// // // // // //   Contact,
// // // // // // } from "./utils/Router";
// // // // // // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // // // // function App() {
// // // // // //   const [showLoader, setShowLoader] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     const timer = setTimeout(() => {
// // // // // //       setShowLoader(false);
// // // // // //     }, 5000);

// // // // // //     return () => clearTimeout(timer);
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <>
// // // // // //       {showLoader && (
// // // // // //         <div className="preloader">
// // // // // //           <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
// // // // // //             <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
// // // // // //           </svg>

// // // // // //           <div className="preloader-heading">
// // // // // //             <div className="load-text">
// // // // // //               <span>M</span>
// // // // // //               <span>D</span>
// // // // // //               <span>S</span>
// // // // // //               <span>H</span>
// // // // // //               <span>O</span>
// // // // // //               <span>A</span>
// // // // // //               <span>I</span>
// // // // // //               <span>B</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {!showLoader && (
// // // // // //         <BrowserRouter>
// // // // // //           <Routes>
// // // // // //             <Route
// // // // // //               path="/"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Home />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/details"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <PortfolioDetails />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/service"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Service />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/portfolio"  // Correct route for Portfolio (Works)
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Portfolio />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/resume"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Resume />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/skill"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Skill />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/testimonials"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Testimonial />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/blog"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Blog />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //             <Route
// // // // // //               path="/contact"
// // // // // //               element={
// // // // // //                 <Layout>
// // // // // //                   <Contact />
// // // // // //                 </Layout>
// // // // // //               }
// // // // // //             />
// // // // // //           </Routes>
// // // // // //         </BrowserRouter>
// // // // // //       )}
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // // export default App;


// // // // // import { useEffect, useState } from "react";
// // // // // import {
// // // // //   Home,
// // // // //   Layout,
// // // // //   Portfolio,
// // // // //   PortfolioDetails,
// // // // //   Service,
// // // // //   Resume,
// // // // //   Skill,
// // // // //   Testimonial,
// // // // //   Blog,
// // // // //   Contact,
// // // // // } from "./utils/Router";
// // // // // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // // // function App() {
// // // // //   const [showLoader, setShowLoader] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const timer = setTimeout(() => {
// // // // //       setShowLoader(false);
// // // // //     }, 4000); // 4 seconds premium loader

// // // // //     return () => clearTimeout(timer);
// // // // //   }, []);

// // // // //   return (
// // // // //     <>
// // // // //       {showLoader && (
// // // // //         <div className="preloader">

// // // // //           {/* Background Glow */}
// // // // //           <div className="loader-wrapper">

// // // // //             <div className="loader-ring">
// // // // //               <div className="loader-inner-ring"></div>
// // // // //             </div>

// // // // //             <h2 className="loader-name">Md Shoaib</h2>
// // // // //             <p className="loader-role">Full Stack Developer</p>

// // // // //           </div>
// // // // //         </div>
// // // // //       )}

// // // // //       {!showLoader && (
// // // // //         <BrowserRouter>
// // // // //           <Routes>
// // // // //             <Route
// // // // //               path="/"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Home />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/details"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <PortfolioDetails />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/service"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Service />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/portfolio"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Portfolio />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/resume"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Resume />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/skill"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Skill />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/testimonials"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Testimonial />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/blog"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Blog />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //             <Route
// // // // //               path="/contact"
// // // // //               element={
// // // // //                 <Layout>
// // // // //                   <Contact />
// // // // //                 </Layout>
// // // // //               }
// // // // //             />
// // // // //           </Routes>
// // // // //         </BrowserRouter>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // // export default App;

// // // // import { useEffect, useState } from "react";
// // // // import {
// // // //   Home,
// // // //   Layout,
// // // //   Portfolio,
// // // //   PortfolioDetails,
// // // //   Service,
// // // //   Resume,
// // // //   Skill,
// // // //   Testimonial,
// // // //   Blog,
// // // //   Contact,
// // // // } from "./utils/Router";
// // // // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // // function App() {
// // // //   const [showLoader, setShowLoader] = useState(true);

// // // //   const fullName = "MD SHOAIB";
// // // //   const [displayName, setDisplayName] = useState("");
// // // //   const [index, setIndex] = useState(0);

// // // //   useEffect(() => {
// // // //     // Typing effect
// // // //     if (index < fullName.length) {
// // // //       const timeout = setTimeout(() => {
// // // //         setDisplayName((prev) => prev + fullName[index]);
// // // //         setIndex((prev) => prev + 1);
// // // //       }, 120);
// // // //       return () => clearTimeout(timeout);
// // // //     }
// // // //   }, [index]);

// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => {
// // // //       setShowLoader(false);
// // // //     }, 2200);
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {showLoader && (
// // // //         <div className="preloader">

// // // //           <div className="loader-wrapper">

// // // //             <div className="loader-ring">
// // // //               <div className="loader-inner-ring"></div>
// // // //             </div>

// // // //             <h3 className="loader-iam">I AM</h3>

// // // //             <h2 className="loader-name">
// // // //               {displayName}
// // // //               <span className="cursor">|</span>
// // // //             </h2>

// // // //             <p className="loader-role">Full Stack Developer</p>

// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {!showLoader && (
// // // //         <BrowserRouter>
// // // //           <Routes>
// // // //             <Route path="/" element={<Layout><Home /></Layout>} />
// // // //             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
// // // //             <Route path="/service" element={<Layout><Service /></Layout>} />
// // // //             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
// // // //             <Route path="/resume" element={<Layout><Resume /></Layout>} />
// // // //             <Route path="/skill" element={<Layout><Skill /></Layout>} />
// // // //             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
// // // //             <Route path="/blog" element={<Layout><Blog /></Layout>} />
// // // //             <Route path="/contact" element={<Layout><Contact /></Layout>} />
// // // //           </Routes>
// // // //         </BrowserRouter>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;


// // // // import { useEffect, useState, useRef } from "react";
// // // // import { motion, useSpring, useMotionValue } from "framer-motion";
// // // // import {
// // // //   Home,
// // // //   Layout,
// // // //   Portfolio,
// // // //   PortfolioDetails,
// // // //   Service,
// // // //   Resume,
// // // //   Skill,
// // // //   Testimonial,
// // // //   Blog,
// // // //   Contact,
// // // // } from "./utils/Router";
// // // // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // // // --- ELITE CUSTOM CURSOR ---
// // // // const CustomCursor = () => {
// // // //   const [isHovered, setIsHovered] = useState(false);
// // // //   const cursorX = useMotionValue(-100);
// // // //   const cursorY = useMotionValue(-100);

// // // //   // Smooth Spring Settings for that "Premium Liquid" feel
// // // //   const springConfig = { damping: 25, stiffness: 250 };
// // // //   const mainX = useSpring(cursorX, springConfig);
// // // //   const mainY = useSpring(cursorY, springConfig);

// // // //   const dotX = useSpring(cursorX, { damping: 40, stiffness: 800 });
// // // //   const dotY = useSpring(cursorY, { damping: 40, stiffness: 800 });

// // // //   useEffect(() => {
// // // //     const moveCursor = (e) => {
// // // //       cursorX.set(e.clientX);
// // // //       cursorY.set(e.clientY);
// // // //     };

// // // //     const handleHover = () => setIsHovered(true);
// // // //     const handleUnhover = () => setIsHovered(false);

// // // //     window.addEventListener("mousemove", moveCursor);

// // // //     // Auto-detect interactive elements for scaling effect
// // // //     const interactiveElements = document.querySelectorAll("button, a, .project-card");
// // // //     interactiveElements.forEach((el) => {
// // // //       el.addEventListener("mouseenter", handleHover);
// // // //       el.addEventListener("mouseleave", handleUnhover);
// // // //     });

// // // //     return () => {
// // // //       window.removeEventListener("mousemove", moveCursor);
// // // //     };
// // // //   }, [cursorX, cursorY]);

// // // //   return (
// // // //     <>
// // // //       {/* 1. Main Outer Liquid Ring */}
// // // //       <motion.div
// // // //         style={{
// // // //           position: "fixed",
// // // //           left: 0,
// // // //           top: 0,
// // // //           width: isHovered ? 80 : 40,
// // // //           height: isHovered ? 80 : 40,
// // // //           borderRadius: "50%",
// // // //           border: `1.5px solid #8750f7`,
// // // //           pointerEvents: "none",
// // // //           zIndex: 99999,
// // // //           x: mainX,
// // // //           y: mainY,
// // // //           translateX: "-50%",
// // // //           translateY: "-50%",
// // // //           opacity: 0.5,
// // // //           boxShadow: isHovered ? "0 0 30px rgba(135, 80, 247, 0.4)" : "none",
// // // //         }}
// // // //         transition={{ type: "spring", duration: 0.1 }}
// // // //       />

// // // //       {/* 2. Central Focus Dot */}
// // // //       <motion.div
// // // //         style={{
// // // //           position: "fixed",
// // // //           left: 0,
// // // //           top: 0,
// // // //           width: 8,
// // // //           height: 8,
// // // //           backgroundColor: "#8750f7",
// // // //           borderRadius: "50%",
// // // //           pointerEvents: "none",
// // // //           zIndex: 100000,
// // // //           x: dotX,
// // // //           y: dotY,
// // // //           translateX: "-50%",
// // // //           translateY: "-50%",
// // // //           mixBlendMode: "difference", // This makes it look "Techy"
// // // //         }}
// // // //       />
// // // //     </>
// // // //   );
// // // // };

// // // // function App() {
// // // //   const [showLoader, setShowLoader] = useState(true);
// // // //   const fullName = "MD SHOAIB";
// // // //   const [displayName, setDisplayName] = useState("");
// // // //   const [index, setIndex] = useState(0);

// // // //   useEffect(() => {
// // // //     if (index < fullName.length) {
// // // //       const timeout = setTimeout(() => {
// // // //         setDisplayName((prev) => prev + fullName[index]);
// // // //         setIndex((prev) => prev + 1);
// // // //       }, 120);
// // // //       return () => clearTimeout(timeout);
// // // //     }
// // // //   }, [index, fullName]);

// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => {
// // // //       setShowLoader(false);
// // // //     }, 2200);
// // // //     return () => clearTimeout(timer);
// // // //   }, []);

// // // //   return (
// // // //     <>
// // // //       {!showLoader && <CustomCursor />}

// // // //       {showLoader && (
// // // //         <div className="preloader">
// // // //           <div className="loader-wrapper">
// // // //             <div className="loader-ring">
// // // //               <div className="loader-inner-ring"></div>
// // // //             </div>
// // // //             <h3 className="loader-iam">I AM</h3>
// // // //             <h2 className="loader-name">
// // // //               {displayName}
// // // //               <span className="cursor">|</span>
// // // //             </h2>
// // // //             <p className="loader-role">Full Stack Developer</p>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {!showLoader && (
// // // //         <BrowserRouter>
// // // //           <Routes>
// // // //             <Route path="/" element={<Layout><Home /></Layout>} />
// // // //             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
// // // //             <Route path="/service" element={<Layout><Service /></Layout>} />
// // // //             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
// // // //             <Route path="/resume" element={<Layout><Resume /></Layout>} />
// // // //             <Route path="/skill" element={<Layout><Skill /></Layout>} />
// // // //             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
// // // //             <Route path="/blog" element={<Layout><Blog /></Layout>} />
// // // //             <Route path="/contact" element={<Layout><Contact /></Layout>} />
// // // //           </Routes>
// // // //         </BrowserRouter>
// // // //       )}

// // // //       {/* Global CSS for Hide Default Cursor */}
// // // //       <style>{`
// // // //         @media (min-width: 992px) {
// // // //           body, a, button {
// // // //             cursor: none !important;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // }

// // // // export default App;


// // // import { useEffect, useState } from "react";
// // // import { motion, useSpring, useMotionValue } from "framer-motion";
// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import {
// // //   Home, Layout, Portfolio, PortfolioDetails,
// // //   Service, Resume, Skill, Testimonial, Blog, Contact
// // // } from "./utils/Router";

// // // // --- PREMIUM INTERACTIVE CURSOR ---
// // // const CustomCursor = () => {
// // //   const [isHovered, setIsHovered] = useState(false);
// // //   const cursorX = useMotionValue(-100);
// // //   const cursorY = useMotionValue(-100);

// // //   const mainX = useSpring(cursorX, { damping: 25, stiffness: 250 });
// // //   const mainY = useSpring(cursorY, { damping: 25, stiffness: 250 });

// // //   const dotX = useSpring(cursorX, { damping: 40, stiffness: 800 });
// // //   const dotY = useSpring(cursorY, { damping: 40, stiffness: 800 });

// // //   useEffect(() => {
// // //     const moveCursor = (e) => {
// // //       cursorX.set(e.clientX);
// // //       cursorY.set(e.clientY);
// // //     };

// // //     const handleHover = () => setIsHovered(true);
// // //     const handleUnhover = () => setIsHovered(false);

// // //     window.addEventListener("mousemove", moveCursor);

// // //     // Interactive elements
// // //     const interactiveEls = document.querySelectorAll("button, a, .project-card");
// // //     interactiveEls.forEach(el => {
// // //       el.addEventListener("mouseenter", handleHover);
// // //       el.addEventListener("mouseleave", handleUnhover);
// // //     });

// // //     return () => {
// // //       window.removeEventListener("mousemove", moveCursor);
// // //       interactiveEls.forEach(el => {
// // //         el.removeEventListener("mouseenter", handleHover);
// // //         el.removeEventListener("mouseleave", handleUnhover);
// // //       });
// // //     };
// // //   }, [cursorX, cursorY]);

// // //   return (
// // //     <>
// // //       {/* Outer liquid ring */}
// // //       <motion.div
// // //         style={{
// // //           position: "fixed",
// // //           left: 0, top: 0,
// // //           width: isHovered ? 80 : 40,
// // //           height: isHovered ? 80 : 40,
// // //           borderRadius: "50%",
// // //           border: `2px solid #8750f7`,
// // //           boxShadow: isHovered
// // //             ? "0 0 30px rgba(135,80,247,0.5), 0 0 60px rgba(135,80,247,0.3)"
// // //             : "0 0 5px rgba(0,0,0,0.1)",
// // //           pointerEvents: "none",
// // //           zIndex: 99999,
// // //           x: mainX,
// // //           y: mainY,
// // //           translateX: "-50%",
// // //           translateY: "-50%",
// // //           transition: "all 0.15s ease-out",
// // //         }}
// // //       />

// // //       {/* Central dot */}
// // //       <motion.div
// // //         style={{
// // //           position: "fixed",
// // //           left: 0, top: 0,
// // //           width: 8,
// // //           height: 8,
// // //           borderRadius: "50%",
// // //           background: "#8750f7",
// // //           pointerEvents: "none",
// // //           zIndex: 100000,
// // //           x: dotX,
// // //           y: dotY,
// // //           translateX: "-50%",
// // //           translateY: "-50%",
// // //           mixBlendMode: "difference",
// // //         }}
// // //       />

// // //       {/* Particle effect */}
// // //       <motion.div
// // //         className="pointer-events-none fixed w-2 h-2 bg-purple-400 rounded-full z-50"
// // //         style={{
// // //           x: useSpring(cursorX, { damping: 50, stiffness: 300 }),
// // //           y: useSpring(cursorY, { damping: 50, stiffness: 300 }),
// // //           opacity: isHovered ? 1 : 0.3,
// // //           scale: isHovered ? 1.5 : 1,
// // //         }}
// // //       />
// // //     </>
// // //   );
// // // };

// // // function App() {
// // //   const [showLoader, setShowLoader] = useState(true);
// // //   const fullName = "MD SHOAIB";
// // //   const [displayName, setDisplayName] = useState("");
// // //   const [index, setIndex] = useState(0);

// // //   useEffect(() => {
// // //     if (index < fullName.length) {
// // //       const timeout = setTimeout(() => {
// // //         setDisplayName(prev => prev + fullName[index]);
// // //         setIndex(prev => prev + 1);
// // //       }, 120);
// // //       return () => clearTimeout(timeout);
// // //     }
// // //   }, [index, fullName]);

// // //   useEffect(() => {
// // //     const timer = setTimeout(() => setShowLoader(false), 2200);
// // //     return () => clearTimeout(timer);
// // //   }, []);

// // //   return (
// // //     <>
// // //       {!showLoader && <CustomCursor />}

// // //       {showLoader && (
// // //         <div className="preloader">
// // //           <div className="loader-wrapper">
// // //             <div className="loader-ring">
// // //               <div className="loader-inner-ring"></div>
// // //             </div>
// // //             <h3 className="loader-iam">I AM</h3>
// // //             <h2 className="loader-name">
// // //               {displayName}<span className="cursor">|</span>
// // //             </h2>
// // //             <p className="loader-role">Full Stack Developer</p>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {!showLoader && (
// // //         <BrowserRouter>
// // //           <Routes>
// // //             <Route path="/" element={<Layout><Home /></Layout>} />
// // //             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
// // //             <Route path="/service" element={<Layout><Service /></Layout>} />
// // //             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
// // //             <Route path="/resume" element={<Layout><Resume /></Layout>} />
// // //             <Route path="/skill" element={<Layout><Skill /></Layout>} />
// // //             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
// // //             <Route path="/blog" element={<Layout><Blog /></Layout>} />
// // //             <Route path="/contact" element={<Layout><Contact /></Layout>} />
// // //           </Routes>
// // //         </BrowserRouter>
// // //       )}

// // //       {/* Hide default cursor on desktop */}
// // //       <style>{`
// // //         @media (min-width: 992px) {
// // //           body, a, button { cursor: none !important; }
// // //         }
// // //       `}</style>
// // //     </>
// // //   );
// // // }

// // // export default App;


// // import { useEffect, useState } from "react";
// // import { motion, useSpring, useMotionValue } from "framer-motion";
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import {
// //   Home, Layout, Portfolio, PortfolioDetails,
// //   Service, Resume, Skill, Testimonial, Blog, Contact
// // } from "./utils/Router";

// // // --- PREMIUM GORGEOUS CIRCLE CURSOR ---
// // const CustomCursor = () => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const cursorX = useMotionValue(-100);
// //   const cursorY = useMotionValue(-100);

// //   const mainX = useSpring(cursorX, { damping: 25, stiffness: 250 });
// //   const mainY = useSpring(cursorY, { damping: 25, stiffness: 250 });
// //   const dotX = useSpring(cursorX, { damping: 40, stiffness: 800 });
// //   const dotY = useSpring(cursorY, { damping: 40, stiffness: 800 });

// //   useEffect(() => {
// //     const moveCursor = (e) => {
// //       cursorX.set(e.clientX);
// //       cursorY.set(e.clientY);
// //     };

// //     const handleHover = () => setIsHovered(true);
// //     const handleUnhover = () => setIsHovered(false);

// //     window.addEventListener("mousemove", moveCursor);

// //     const interactiveEls = document.querySelectorAll("button, a, .project-card");
// //     interactiveEls.forEach(el => {
// //       el.addEventListener("mouseenter", handleHover);
// //       el.addEventListener("mouseleave", handleUnhover);
// //     });

// //     return () => {
// //       window.removeEventListener("mousemove", moveCursor);
// //       interactiveEls.forEach(el => {
// //         el.removeEventListener("mouseenter", handleHover);
// //         el.removeEventListener("mouseleave", handleUnhover);
// //       });
// //     };
// //   }, [cursorX, cursorY]);

// //   return (
// //     <>
// //       {/* Outer gorgeous circle */}
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0, top: 0,
// //           width: isHovered ? 100 : 50,
// //           height: isHovered ? 100 : 50,
// //           borderRadius: "50%",
// //           border: `2px solid transparent`,
// //           background: "radial-gradient(circle at center, rgba(135,80,247,0.3), rgba(135,80,247,0.05))",
// //           pointerEvents: "none",
// //           zIndex: 99999,
// //           x: mainX,
// //           y: mainY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //           boxShadow: isHovered
// //             ? "0 0 40px rgba(135,80,247,0.5), 0 0 80px rgba(135,80,247,0.3)"
// //             : "0 0 10px rgba(135,80,247,0.1)",
// //           transition: "all 0.15s ease-out",
// //         }}
// //       />

// //       {/* Central glowing dot */}
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0, top: 0,
// //           width: 12,
// //           height: 12,
// //           borderRadius: "50%",
// //           background: "linear-gradient(45deg, #ff00ff, #8000ff)",
// //           pointerEvents: "none",
// //           zIndex: 100000,
// //           x: dotX,
// //           y: dotY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //           mixBlendMode: "difference",
// //           boxShadow: "0 0 10px #ff00ff, 0 0 20px #8000ff",
// //         }}
// //       />

// //       {/* Particle trail */}
// //       <motion.div
// //         className="pointer-events-none fixed w-3 h-3 rounded-full z-50"
// //         style={{
// //           x: useSpring(cursorX, { damping: 50, stiffness: 300 }),
// //           y: useSpring(cursorY, { damping: 50, stiffness: 300 }),
// //           background: "linear-gradient(135deg, #8750f7, #ff00ff)",
// //           opacity: isHovered ? 1 : 0.3,
// //           scale: isHovered ? 1.8 : 1,
// //         }}
// //       />
// //     </>
// //   );
// // };

// // function App() {
// //   const [showLoader, setShowLoader] = useState(true);
// //   const fullName = "MD SHOAIB";
// //   const [displayName, setDisplayName] = useState("");
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (index < fullName.length) {
// //       const timeout = setTimeout(() => {
// //         setDisplayName(prev => prev + fullName[index]);
// //         setIndex(prev => prev + 1);
// //       }, 120);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [index, fullName]);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setShowLoader(false), 2200);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <>
// //       {!showLoader && <CustomCursor />}

// //       {showLoader && (
// //         <div className="preloader">
// //           <div className="loader-wrapper">
// //             <div className="loader-ring">
// //               <div className="loader-inner-ring"></div>
// //             </div>
// //             <h3 className="loader-iam">I AM</h3>
// //             <h2 className="loader-name">
// //               {displayName}<span className="cursor">|</span>
// //             </h2>
// //             <p className="loader-role">Full Stack Developer</p>
// //           </div>
// //         </div>
// //       )}

// //       {!showLoader && (
// //         <BrowserRouter>
// //           <Routes>
// //             <Route path="/" element={<Layout><Home /></Layout>} />
// //             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
// //             <Route path="/service" element={<Layout><Service /></Layout>} />
// //             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
// //             <Route path="/resume" element={<Layout><Resume /></Layout>} />
// //             <Route path="/skill" element={<Layout><Skill /></Layout>} />
// //             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
// //             <Route path="/blog" element={<Layout><Blog /></Layout>} />
// //             <Route path="/contact" element={<Layout><Contact /></Layout>} />
// //           </Routes>
// //         </BrowserRouter>
// //       )}

// //       {/* Hide default cursor */}
// //       <style>{`
// //         @media (min-width: 992px) {
// //           body, a, button { cursor: none !important; }
// //         }
// //       `}</style>
// //     </>
// //   );
// // }

// // export default App;


// // import { useEffect, useState } from "react";
// // import { motion, useSpring, useMotionValue } from "framer-motion";
// // import {
// //   Home,
// //   Layout,
// //   Portfolio,
// //   PortfolioDetails,
// //   Service,
// //   Resume,
// //   Skill,
// //   Testimonial,
// //   Blog,
// //   Contact,
// // } from "./utils/Router";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // --- THE NEON DIAMOND LIQUID CURSOR ---
// // const CustomCursor = () => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const cursorX = useMotionValue(-100);
// //   const cursorY = useMotionValue(-100);

// //   const springConfig = { damping: 20, stiffness: 200, mass: 0.6 };
// //   const mainX = useSpring(cursorX, springConfig);
// //   const mainY = useSpring(cursorY, springConfig);

// //   const dotX = useSpring(cursorX, { damping: 40, stiffness: 900 });
// //   const dotY = useSpring(cursorY, { damping: 40, stiffness: 900 });

// //   useEffect(() => {
// //     const moveCursor = (e) => {
// //       cursorX.set(e.clientX);
// //       cursorY.set(e.clientY);
// //     };

// //     const handleHover = () => setIsHovered(true);
// //     const handleUnhover = () => setIsHovered(false);

// //     window.addEventListener("mousemove", moveCursor);

// //     const targets = document.querySelectorAll("button, a, .project-card, .btn-small");
// //     targets.forEach((el) => {
// //       el.addEventListener("mouseenter", handleHover);
// //       el.addEventListener("mouseleave", handleUnhover);
// //     });

// //     return () => window.removeEventListener("mousemove", moveCursor);
// //   }, [cursorX, cursorY]);

// //   return (
// //     <>
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0,
// //           top: 0,
// //           width: isHovered ? 60 : 35,
// //           height: isHovered ? 60 : 35,
// //           border: `2px solid #8750f7`,
// //           pointerEvents: "none",
// //           zIndex: 99999,
// //           x: mainX,
// //           y: mainY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //           rotate: 45,
// //           backgroundColor: isHovered ? "rgba(135, 80, 247, 0.1)" : "transparent",
// //           boxShadow: isHovered ? "0 0 25px #8750f7" : "0 0 10px rgba(135, 80, 247, 0.3)",
// //         }}
// //       />
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0,
// //           top: 0,
// //           width: 6,
// //           height: 6,
// //           backgroundColor: "#fff",
// //           boxShadow: "0 0 15px #fff, 0 0 30px #8750f7",
// //           borderRadius: "50%",
// //           pointerEvents: "none",
// //           zIndex: 100000,
// //           x: dotX,
// //           y: dotY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //           mixBlendMode: "difference",
// //         }}
// //       />
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0,
// //           top: 0,
// //           width: 400,
// //           height: 400,
// //           background: "radial-gradient(circle, rgba(135, 80, 247, 0.12) 0%, rgba(135, 80, 247, 0) 70%)",
// //           borderRadius: "50%",
// //           pointerEvents: "none",
// //           zIndex: 1,
// //           x: mainX,
// //           y: mainY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //         }}
// //       />
// //     </>
// //   );
// // };

// // function App() {
// //   const [showLoader, setShowLoader] = useState(true);
// //   const fullName = "MD SHOAIB";
// //   const [displayName, setDisplayName] = useState("");
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (index < fullName.length) {
// //       const timeout = setTimeout(() => {
// //         setDisplayName((prev) => prev + fullName[index]);
// //         setIndex((prev) => prev + 1);
// //       }, 120);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [index, fullName]);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowLoader(false);
// //     }, 2200);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <>
// //       {!showLoader && <CustomCursor />}

// //       {showLoader && (
// //         <div className="preloader">
// //           <div className="loader-wrapper">
// //             <div className="loader-ring">
// //               <div className="loader-inner-ring"></div>
// //             </div>
// //             <h3 className="loader-iam">I AM</h3>
// //             <h2 className="loader-name">
// //               {displayName}
// //               <span className="cursor">|</span>
// //             </h2>
// //             <p className="loader-role">Full Stack Developer</p>
// //           </div>
// //         </div>
// //       )}

// //       {!showLoader && (
// //         <BrowserRouter>
// //           <Routes>
// //             <Route path="/" element={<Layout><Home /></Layout>} />
// //             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
// //             {/* Fix Below: changed </Route> to </Layout> */}
// //             <Route path="/service" element={<Layout><Service /></Layout>} />
// //             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
// //             <Route path="/resume" element={<Layout><Resume /></Layout>} />
// //             <Route path="/skill" element={<Layout><Skill /></Layout>} />
// //             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
// //             <Route path="/blog" element={<Layout><Blog /></Layout>} />
// //             <Route path="/contact" element={<Layout><Contact /></Layout>} />
// //           </Routes>
// //         </BrowserRouter>
// //       )}

// //       <style>{`
// //         * { cursor: none !important; }
// //         @media (max-width: 991px) { * { cursor: auto !important; } }
// //         body { background-color: #050709; overflow-x: hidden; }
// //       `}</style>
// //     </>
// //   );
// // }

// // export default App;


// // import { useEffect, useState } from "react";
// // import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
// // import {
// //   Home,
// //   Layout,
// //   Portfolio,
// //   PortfolioDetails,
// //   Service,
// //   Resume,
// //   Skill,
// //   Testimonial,
// //   Blog,
// //   Contact,
// // } from "./utils/Router";
// // import { BrowserRouter, Route, Routes } from "react-router-dom";

// // // Theme Color
// // const primary = "#8750f7";

// // const CustomCursor = () => {
// //   const [isHovered, setIsHovered] = useState(false);
// //   const [trail, setTrail] = useState([]); // Trail particles state
  
// //   const cursorX = useMotionValue(-100);
// //   const cursorY = useMotionValue(-100);

// //   // Smooth springs for main cursor
// //   const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
// //   const mainX = useSpring(cursorX, springConfig);
// //   const mainY = useSpring(cursorY, springConfig);

// //   useEffect(() => {
// //     const moveCursor = (e) => {
// //       cursorX.set(e.clientX);
// //       cursorY.set(e.clientY);

// //       // Create new particle on move
// //       const newParticle = {
// //         id: Math.random(),
// //         x: e.clientX,
// //         y: e.clientY,
// //       };

// //       setTrail((prev) => [...prev.slice(-15), newParticle]); // Keep last 15 particles
// //     };

// //     const handleHover = () => setIsHovered(true);
// //     const handleUnhover = () => setIsHovered(false);

// //     window.addEventListener("mousemove", moveCursor);

// //     const targets = document.querySelectorAll("button, a, .project-card, .btn-small");
// //     targets.forEach((el) => {
// //       el.addEventListener("mouseenter", handleHover);
// //       el.addEventListener("mouseleave", handleUnhover);
// //     });

// //     return () => window.removeEventListener("mousemove", moveCursor);
// //   }, [cursorX, cursorY]);

// //   return (
// //     <>
// //       {/* 1. DYNAMIC TRAIL PARTICLES (Video-r moto effect) */}
// //       <AnimatePresence>
// //         {trail.map((dot) => (
// //           <motion.div
// //             key={dot.id}
// //             initial={{ opacity: 0.5, scale: 1 }}
// //             animate={{ opacity: 0, scale: 0 }}
// //             exit={{ opacity: 0 }}
// //             transition={{ duration: 0.6, ease: "easeOut" }}
// //             style={{
// //               position: "fixed",
// //               left: dot.x,
// //               top: dot.y,
// //               width: 12,
// //               height: 12,
// //               backgroundColor: primary,
// //               borderRadius: "50%",
// //               pointerEvents: "none",
// //               zIndex: 99998,
// //               translateX: "-50%",
// //               translateY: "-50%",
// //               filter: "blur(4px)",
// //               boxShadow: `0 0 15px ${primary}`,
// //             }}
// //           />
// //         ))}
// //       </AnimatePresence>

// //       {/* 2. MAIN GLOWING CORE */}
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0,
// //           top: 0,
// //           width: isHovered ? 15 : 10,
// //           height: isHovered ? 15 : 10,
// //           backgroundColor: "#fff",
// //           boxShadow: `0 0 15px #fff, 0 0 30px ${primary}`,
// //           borderRadius: "50%",
// //           pointerEvents: "none",
// //           zIndex: 100000,
// //           x: mainX,
// //           y: mainY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //           mixBlendMode: "difference",
// //         }}
// //       />

// //       {/* 3. LARGE AMBIENT SPOTLIGHT (Background effect) */}
// //       <motion.div
// //         style={{
// //           position: "fixed",
// //           left: 0,
// //           top: 0,
// //           width: 500,
// //           height: 500,
// //           background: `radial-gradient(circle, ${primary}1A 0%, transparent 70%)`,
// //           borderRadius: "50%",
// //           pointerEvents: "none",
// //           zIndex: 1,
// //           x: mainX,
// //           y: mainY,
// //           translateX: "-50%",
// //           translateY: "-50%",
// //         }}
// //       />
// //     </>
// //   );
// // };

// // function App() {
// //   const [showLoader, setShowLoader] = useState(true);
// //   const fullName = "MD SHOAIB";
// //   const [displayName, setDisplayName] = useState("");
// //   const [index, setIndex] = useState(0);

// //   useEffect(() => {
// //     if (index < fullName.length) {
// //       const timeout = setTimeout(() => {
// //         setDisplayName((prev) => prev + fullName[index]);
// //         setIndex((prev) => prev + 1);
// //       }, 120);
// //       return () => clearTimeout(timeout);
// //     }
// //   }, [index, fullName]);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowLoader(false);
// //     }, 2200);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <>
// //       {!showLoader && <CustomCursor />}

// //       {showLoader && (
// //         <div className="preloader">
// //           <div className="loader-wrapper">
// //             <div className="loader-ring">
// //               <div className="loader-inner-ring"></div>
// //             </div>
// //             <h3 className="loader-iam">I AM</h3>
// //             <h2 className="loader-name">
// //               {displayName}
// //               <span className="cursor">|</span>
// //             </h2>
// //             <p className="loader-role">Full Stack Developer</p>
// //           </div>
// //         </div>
// //       )}

// //       {!showLoader && (
// //         <BrowserRouter>
// //           <Routes>
// //             <Route path="/" element={<Layout><Home /></Layout>} />
// //             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
// //             <Route path="/service" element={<Layout><Service /></Layout>} />
// //             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
// //             <Route path="/resume" element={<Layout><Resume /></Layout>} />
// //             <Route path="/skill" element={<Layout><Skill /></Layout>} />
// //             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
// //             <Route path="/blog" element={<Layout><Blog /></Layout>} />
// //             <Route path="/contact" element={<Layout><Contact /></Layout>} />
// //           </Routes>
// //         </BrowserRouter>
// //       )}

// //       <style>{`
// //         * { cursor: none !important; }
// //         @media (max-width: 991px) { * { cursor: auto !important; } }
// //         body { background-color: #050709; overflow-x: hidden; }
// //       `}</style>
// //     </>
// //   );
// // }

// // export default App;


// import { useEffect, useState } from "react";
// import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
// import {
//   Home,
//   Layout,
//   Portfolio,
//   PortfolioDetails,
//   Service,
//   Resume,
//   Skill,
//   Testimonial,
//   Blog,
//   Contact,
// } from "./utils/Router";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// // Apnar notun banano component import kora holo
// import FloatingContact from "./components/Conatct/FloatingContact";

// // Theme Color
// const primary = "#8750f7";

// const CustomCursor = () => {
//   const [isHovered, setIsHovered] = useState(false);
//   const [trail, setTrail] = useState([]); 
  
//   const cursorX = useMotionValue(-100);
//   const cursorY = useMotionValue(-100);

//   const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
//   const mainX = useSpring(cursorX, springConfig);
//   const mainY = useSpring(cursorY, springConfig);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       cursorX.set(e.clientX);
//       cursorY.set(e.clientY);

//       const newParticle = {
//         id: Math.random(),
//         x: e.clientX,
//         y: e.clientY,
//       };

//       setTrail((prev) => [...prev.slice(-15), newParticle]);
//     };

//     const handleHover = () => setIsHovered(true);
//     const handleUnhover = () => setIsHovered(false);

//     window.addEventListener("mousemove", moveCursor);

//     const targets = document.querySelectorAll("button, a, .project-card, .btn-small");
//     targets.forEach((el) => {
//       el.addEventListener("mouseenter", handleHover);
//       el.addEventListener("mouseleave", handleUnhover);
//     });

//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, [cursorX, cursorY]);

//   return (
//     <>
//       <AnimatePresence>
//         {trail.map((dot) => (
//           <motion.div
//             key={dot.id}
//             initial={{ opacity: 0.5, scale: 1 }}
//             animate={{ opacity: 0, scale: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             style={{
//               position: "fixed",
//               left: dot.x,
//               top: dot.y,
//               width: 12,
//               height: 12,
//               backgroundColor: primary,
//               borderRadius: "50%",
//               pointerEvents: "none",
//               zIndex: 99998,
//               translateX: "-50%",
//               translateY: "-50%",
//               filter: "blur(4px)",
//               boxShadow: `0 0 15px ${primary}`,
//             }}
//           />
//         ))}
//       </AnimatePresence>

//       <motion.div
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: isHovered ? 15 : 10,
//           height: isHovered ? 15 : 10,
//           backgroundColor: "#fff",
//           boxShadow: `0 0 15px #fff, 0 0 30px ${primary}`,
//           borderRadius: "50%",
//           pointerEvents: "none",
//           zIndex: 100000,
//           x: mainX,
//           y: mainY,
//           translateX: "-50%",
//           translateY: "-50%",
//           mixBlendMode: "difference",
//         }}
//       />

//       <motion.div
//         style={{
//           position: "fixed",
//           left: 0,
//           top: 0,
//           width: 500,
//           height: 500,
//           background: `radial-gradient(circle, ${primary}1A 0%, transparent 70%)`,
//           borderRadius: "50%",
//           pointerEvents: "none",
//           zIndex: 1,
//           x: mainX,
//           y: mainY,
//           translateX: "-50%",
//           translateY: "-50%",
//         }}
//       />
//     </>
//   );
// };

// function App() {
//   const [showLoader, setShowLoader] = useState(true);
//   const fullName = "MD SHOAIB";
//   const [displayName, setDisplayName] = useState("");
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < fullName.length) {
//       const timeout = setTimeout(() => {
//         setDisplayName((prev) => prev + fullName[index]);
//         setIndex((prev) => prev + 1);
//       }, 120);
//       return () => clearTimeout(timeout);
//     }
//   }, [index, fullName]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowLoader(false);
//     }, 2200);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {!showLoader && <CustomCursor />}

//       {showLoader && (
//         <div className="preloader">
//           <div className="loader-wrapper">
//             <div className="loader-ring">
//               <div className="loader-inner-ring"></div>
//             </div>
//             <h3 className="loader-iam">I AM</h3>
//             <h2 className="loader-name">
//               {displayName}
//               <span className="cursor">|</span>
//             </h2>
//             <p className="loader-role">Full Stack Developer</p>
//           </div>
//         </div>
//       )}

//       {!showLoader && (
//         <BrowserRouter>
//           {/* Contact Button sob page-e active rakhar jonno BrowserRouter-er bhitore rakha holo */}
//           <FloatingContact />
          
//           <Routes>
//             <Route path="/" element={<Layout><Home /></Layout>} />
//             <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
//             <Route path="/service" element={<Layout><Service /></Layout>} />
//             <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
//             <Route path="/resume" element={<Layout><Resume /></Layout>} />
//             <Route path="/skill" element={<Layout><Skill /></Layout>} />
//             <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
//             <Route path="/blog" element={<Layout><Blog /></Layout>} />
//             <Route path="/contact" element={<Layout><Contact /></Layout>} />
//           </Routes>
//         </BrowserRouter>
//       )}

//       <style>{`
//         * { cursor: none !important; }
//         @media (max-width: 991px) { * { cursor: auto !important; } }
//         body { background-color: #050709; overflow-x: hidden; }
//       `}</style>
//     </>
//   );
// }

// export default App;



import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import {
  Home,
  Layout,
  Portfolio,
  PortfolioDetails,
  Service,
  Resume,
  Skill,
  Testimonial,
  Blog,
  Contact,
} from "./utils/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Apnar path onujayi import kora holo
import FloatingContact from "./components/Conatct/FloatingContact";

// Theme Color
const primary = "#8750f7";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [trail, setTrail] = useState([]); 
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const mainX = useSpring(cursorX, springConfig);
  const mainY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only run cursor logic on non-touch devices
    const isMobile = window.matchMedia("(max-width: 991px)").matches;
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const newParticle = {
        id: Math.random(),
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prev) => [...prev.slice(-15), newParticle]);
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const targets = document.querySelectorAll("button, a, .project-card, .btn-small");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* 1. DYNAMIC TRAIL PARTICLES */}
      <AnimatePresence>
        {trail.map((dot) => (
          <motion.div
            key={dot.id}
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              position: "fixed",
              left: dot.x,
              top: dot.y,
              width: 12,
              height: 12,
              backgroundColor: primary,
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 100001, // Modal-er upore thakbe
              translateX: "-50%",
              translateY: "-50%",
              filter: "blur(4px)",
              boxShadow: `0 0 15px ${primary}`,
            }}
          />
        ))}
      </AnimatePresence>

      {/* 2. MAIN GLOWING CORE */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: isHovered ? 15 : 10,
          height: isHovered ? 15 : 10,
          backgroundColor: "#fff",
          boxShadow: `0 0 15px #fff, 0 0 30px ${primary}`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 100002, // Sobar upore thakbe
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
      />

      {/* 3. LARGE AMBIENT SPOTLIGHT */}
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 500,
          height: 500,
          background: `radial-gradient(circle, ${primary}1A 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 1,
          x: mainX,
          y: mainY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const fullName = "MD SHOAIB";
  const [displayName, setDisplayName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayName((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!showLoader && <CustomCursor />}

      {showLoader && (
        <div className="preloader">
          <div className="loader-wrapper">
            <div className="loader-ring">
              <div className="loader-inner-ring"></div>
            </div>
            <h3 className="loader-iam">I AM</h3>
            <h2 className="loader-name">
              {displayName}
              <span className="cursor">|</span>
            </h2>
            <p className="loader-role">Full Stack Developer</p>
          </div>
        </div>
      )}

      {!showLoader && (
        <BrowserRouter>
          <FloatingContact />
          
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/details" element={<Layout><PortfolioDetails /></Layout>} />
            <Route path="/service" element={<Layout><Service /></Layout>} />
            <Route path="/portfolio" element={<Layout><Portfolio /></Layout>} />
            <Route path="/resume" element={<Layout><Resume /></Layout>} />
            <Route path="/skill" element={<Layout><Skill /></Layout>} />
            <Route path="/testimonials" element={<Layout><Testimonial /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/contact" element={<Layout><Contact /></Layout>} />
          </Routes>
        </BrowserRouter>
      )}

      <style>{`
        * { cursor: none !important; }
        @media (max-width: 991px) { 
          * { cursor: auto !important; } 
        }
        body { 
          background-color: #050709; 
          overflow-x: hidden; 
        }
      `}</style>
    </>
  );
}

export default App;