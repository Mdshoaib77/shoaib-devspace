// import { service } from "../../assets/data/data";
// import { GoArrowUpRight } from "react-icons/go";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "framer-motion";

// export const Service = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true }); // Animate once on scroll into view

//   return (
//     <motion.section
//       ref={ref}
//       className="services-section"
//       id="services-section"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container">
//         <div className="section-header text-center">
//           <motion.h2
//             className="section-title"
//             initial={{ y: -30, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             My Quality Services
//           </motion.h2>
//           <motion.p
//             initial={{ y: 30, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
//           </motion.p>
//         </div>

//         <div className="services-widget position-relative">
//           {service.map((item, index) => (
//             <motion.div
//               className="service-item flexSB"
//               key={item.id}
//               initial={{ x: -50, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 * index }}
//             >
//               <div className="left-box">
//                 <motion.span
//                   className="number"
//                   initial={{ scale: 0 }}
//                   animate={isInView ? { scale: 1 } : {}}
//                   transition={{ duration: 0.3, delay: 0.2 * index }}
//                 >
//                   0{item.id}
//                 </motion.span>
//                 <h3 className="service-title">{item.title}</h3>
//               </div>
//               <div className="right-box">
//                 <p>{item.text}</p>
//               </div>
//               <motion.i
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.3, delay: 0.3 + 0.2 * index }}
//               >
//                 <GoArrowUpRight size={40} />
//               </motion.i>
//               <button className="service-link modal-popup"></button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// };


// import { service } from "../../assets/data/data";
// import { GoArrowUpRight } from "react-icons/go";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useInView } from "framer-motion";

// export const Service = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true }); // Animate once on scroll into view

//   return (
//     <motion.section
//       ref={ref}
//       className="services-section premium-service-style"
//       id="services-section"
//       initial={{ opacity: 0, y: 50 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8 }}
//     >
//       {/* Background Decorative Blobs to match Hero */}
//       <div className="blob blob-1"></div>
//       <div className="blob blob-2"></div>

//       <div className="container">
//         <div className="section-header text-center">
//           <motion.h2
//             className="section-title text-gradient"
//             initial={{ y: -30, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.6 }}
//           >
//             My Quality Services
//           </motion.h2>
//           <motion.p
//             className="service-description"
//             initial={{ y: 30, opacity: 0 }}
//             animate={isInView ? { y: 0, opacity: 1 } : {}}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
//           </motion.p>
//         </div>

//         <div className="services-widget position-relative">
//           {service.map((item, index) => (
//             <motion.div
//               className="service-item flexSB"
//               key={item.id}
//               initial={{ x: -50, opacity: 0 }}
//               animate={isInView ? { x: 0, opacity: 1 } : {}}
//               transition={{ duration: 0.5, delay: 0.2 * index }}
//               whileHover={{ backgroundColor: "rgba(192, 132, 252, 0.05)" }}
//             >
//               <div className="left-box">
//                 <motion.span
//                   className="number"
//                   initial={{ scale: 0 }}
//                   animate={isInView ? { scale: 1 } : {}}
//                   transition={{ duration: 0.3, delay: 0.2 * index }}
//                 >
//                   0{item.id}
//                 </motion.span>
//                 <h3 className="service-title">{item.title}</h3>
//               </div>
//               <div className="right-box">
//                 <p>{item.text}</p>
//               </div>
//               <motion.i
//                 className="arrow-icon"
//                 initial={{ opacity: 0, x: 10 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.3, delay: 0.3 + 0.2 * index }}
//               >
//                 <GoArrowUpRight size={40} />
//               </motion.i>
//               <button className="service-link modal-popup"></button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .premium-service-style {
//           background: #030712; /* Match Hero BG */
//           position: relative;
//           overflow: hidden;
//           padding: 100px 0;
//         }

//         /* Hero matching Blobs */
//         .premium-service-style .blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//           z-index: 0;
//           opacity: 0.12;
//         }
//         .premium-service-style .blob-1 { width: 400px; height: 400px; background: #c084fc; top: -100px; right: -100px; }
//         .premium-service-style .blob-2 { width: 300px; height: 300px; background: #6366f1; bottom: -50px; left: -50px; }

//         .container { position: relative; z-index: 2; }

//         .text-gradient { 
//           background: linear-gradient(to right, #c084fc, #a855f7); 
//           -webkit-background-clip: text; 
//           -webkit-text-fill-color: transparent; 
//           font-size: clamp(30px, 5vw, 45px);
//           font-weight: 800;
//         }

//         .service-description {
//           color: #64748b;
//           max-width: 600px;
//           margin: 20px auto 50px;
//           font-size: 17px;
//           line-height: 1.7;
//         }

//         .service-item {
//           border-bottom: 1px solid rgba(255, 255, 255, 0.05);
//           padding: 40px 20px;
//           transition: 0.4s ease;
//           position: relative;
//         }

//         .service-item:hover {
//           border-bottom-color: #c084fc;
//         }

//         .number {
//           color: #c084fc;
//           font-weight: 700;
//           font-size: 20px;
//           display: block;
//           margin-bottom: 10px;
//         }

//         .service-title {
//           color: #fff;
//           font-size: 26px;
//           font-weight: 600;
//         }

//         .right-box p {
//           color: #94a3b8;
//           font-size: 16px;
//           max-width: 450px;
//         }

//         .arrow-icon {
//           color: #c084fc;
//           transition: 0.3s ease;
//         }

//         .service-item:hover .arrow-icon {
//           transform: rotate(45deg);
//           color: #fff;
//         }

//         .service-link {
//           position: absolute;
//           top: 0; left: 0; width: 100%; height: 100%;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//         }

//         @media (max-width: 768px) {
//           .service-item { flex-direction: column; text-align: center; gap: 20px; }
//           .right-box p { margin: 0 auto; }
//         }
//       `}</style>
//     </motion.section>
//   );
// };


import { service } from "../../assets/data/data";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Animate once on scroll

  return (
    <motion.section
      ref={ref}
      className="services-section premium-service-style"
      id="services-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Hero-style Decorative Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container">
        <div className="section-header text-center">
          <motion.h2
            className="section-title text-gradient"
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            My Quality Services
          </motion.h2>
          <motion.p
            className="service-description"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </motion.p>
        </div>

        <div className="services-widget position-relative">
          {service.map((item, index) => (
            <motion.div
              className="service-item flexSB"
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              whileHover={{ backgroundColor: "rgba(192, 132, 252, 0.05)" }}
            >
              <div className="left-box">
                <motion.span
                  className="number"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 * index }}
                >
                  0{item.id}
                </motion.span>
                <h3 className="service-title">{item.title}</h3>
              </div>
              <div className="right-box">
                <p>{item.text}</p>
              </div>
              <motion.i
                className="arrow-icon"
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + 0.2 * index }}
              >
                <GoArrowUpRight size={40} />
              </motion.i>
              <button className="service-link modal-popup"></button>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .premium-service-style {
          background: #030712; /* Hero-like BG */
          position: relative;
          overflow: hidden;
          padding: 100px 0;
        }

        /* Hero Matching Blobs */
        .premium-service-style .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 0;
          opacity: 0.12;
        }
        .premium-service-style .blob-1 { width: 400px; height: 400px; background: #c084fc; top: -100px; right: -100px; }
        .premium-service-style .blob-2 { width: 300px; height: 300px; background: #6366f1; bottom: -50px; left: -50px; }

        .container { position: relative; z-index: 2; }

        .text-gradient { 
          background: linear-gradient(to right, #c084fc, #a855f7); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          font-size: clamp(30px, 5vw, 45px);
          font-weight: 800;
        }

        .service-description {
          color: #64748b;
          max-width: 600px;
          margin: 20px auto 50px;
          font-size: 17px;
          line-height: 1.7;
        }

        .service-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 40px 20px;
          transition: 0.4s ease;
          position: relative;
        }

        .service-item:hover {
          border-bottom-color: #c084fc;
        }

        .number {
          color: #c084fc;
          font-weight: 700;
          font-size: 20px;
          display: block;
          margin-bottom: 10px;
        }

        .service-title {
          color: #fff;
          font-size: 26px;
          font-weight: 600;
        }

        .right-box p {
          color: #94a3b8;
          font-size: 16px;
          max-width: 450px;
        }

        .arrow-icon {
          color: #c084fc;
          transition: 0.3s ease;
        }

        .service-item:hover .arrow-icon {
          transform: rotate(45deg);
          color: #fff;
        }

        .service-link {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .service-item { flex-direction: column; text-align: center; gap: 20px; }
          .right-box p { margin: 0 auto; }
        }
      `}</style>
    </motion.section>
  );
};