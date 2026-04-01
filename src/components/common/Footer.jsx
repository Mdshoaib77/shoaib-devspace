// // // import { linklist } from "../../assets/data/data";
// // // import { motion } from "framer-motion";
// // // import { useState, useEffect } from "react";
// // // import { IoIosArrowUp } from "react-icons/io";

// // // export const Footer = () => {
// // //   const [showScrollUp, setShowScrollUp] = useState(false);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (window.scrollY > 300) {
// // //         setShowScrollUp(true);
// // //       } else {
// // //         setShowScrollUp(false);
// // //       }
// // //     };

// // //     window.addEventListener("scroll", handleScroll);
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, []);

// // //   const scrollToTop = () => {
// // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // //   };

// // //   return (
// // //     <motion.footer
// // //       className="tj-footer-area"
// // //       initial={{ opacity: 0 }}
// // //       animate={{ opacity: 1 }}
// // //       transition={{ duration: 0.8 }}
// // //     >
// // //       <div className="container text-center">
// // //         {/* Logo Box */}
// // //         <motion.div
// // //           className="logo-box"
// // //           initial={{ y: -30, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ duration: 0.6 }}
// // //         >
// // //           {/* <a href="/" className="footer-logo">
// // //             Portfolio
// // //           </a> */}
// // //               <motion.span
// // //                 whileHover={{ scale: 1.05 }}
// // //                 transition={{
// // //                   type: "spring",
// // //                   stiffness: 200,
// // //                 }}
// // //                 style={{
// // //                   fontSize: "30px",
// // //                   fontWeight: "600",
// // //                   fontFamily: "'Brush Script MT', cursive",
// // //                   background:
// // //                     "linear-gradient(90deg, #ffffff, #c084fc, #a855f7)",
// // //                   WebkitBackgroundClip: "text",
// // //                   WebkitTextFillColor: "transparent",
// // //                   textShadow:
// // //                     "0 0 10px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.4)",
// // //                   position: "relative",
// // //                 }}
// // //               >
// // //                 Md Shoaib
// // //               </motion.span>
// // //         </motion.div>

// // //         {/* Footer Menu */}
// // //         <motion.div
// // //           className="footer-menu"
// // //           initial={{ y: 30, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ duration: 0.7, delay: 0.2 }}
// // //         >
// // //           <nav>
// // //             <ul>
// // //               {linklist.map((link) => (
// // //                 <motion.li
// // //                   key={link.id}
// // //                   initial={{ x: -20, opacity: 0 }}
// // //                   animate={{ x: 0, opacity: 1 }}
// // //                   transition={{ duration: 0.5, delay: 0.2 }}
// // //                 >
// // //                   <a href={link.link}>{link.text}</a>
// // //                 </motion.li>
// // //               ))}
// // //             </ul>
// // //           </nav>
// // //         </motion.div>

// // //         {/* Copyright Text */}
// // //         <motion.div
// // //           className="copy-text"
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           transition={{ duration: 0.6, delay: 0.4 }}
// // //         >
// // //           <p>
// // //             &copy; 2025 All rights reserved by
// // //             <a href="#" target="_blank"> Md Shoaib </a>
// // //           </p>
// // //         </motion.div>
// // //       </div>

// // //       {/* Scroll Up Button */}
// // //       {showScrollUp && (
// // //         <div className="scroll-up" onClick={scrollToTop}>
// // //           <IoIosArrowUp size={30} />
// // //         </div>
// // //       )}
// // //     </motion.footer>
// // //   );
// // // };


// // import { linklist } from "../../assets/data/data";
// // import { motion } from "framer-motion";
// // import { useState, useEffect } from "react";
// // import { IoIosArrowUp } from "react-icons/io";

// // export const Footer = () => {
// //   const [showScrollUp, setShowScrollUp] = useState(false);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 300) {
// //         setShowScrollUp(true);
// //       } else {
// //         setShowScrollUp(false);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   return (
// //     <motion.footer
// //       className="tj-footer-area"
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.8 }}
// //     >
// //       <div className="container text-center">
// //         {/* Logo Box */}
// //         <motion.div
// //           className="logo-box"
// //           initial={{ y: -30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //               <motion.span
// //                 whileHover={{ scale: 1.05 }}
// //                 transition={{
// //                   type: "spring",
// //                   stiffness: 200,
// //                 }}
// //                 style={{
// //                   fontSize: "30px",
// //                   fontWeight: "600",
// //                   fontFamily: "'Brush Script MT', cursive",
// //                   background:
// //                     "linear-gradient(90deg, #ffffff, #c084fc, #a855f7)",
// //                   WebkitBackgroundClip: "text",
// //                   WebkitTextFillColor: "transparent",
// //                   textShadow:
// //                     "0 0 10px rgba(168,85,247,0.6), 0 0 20px rgba(168,85,247,0.4)",
// //                   position: "relative",
// //                 }}
// //               >
// //                 Md Shoaib
// //               </motion.span>
// //         </motion.div>

// //         {/* Footer Menu */}
// //         <motion.div
// //           className="footer-menu"
// //           initial={{ y: 30, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ duration: 0.7, delay: 0.2 }}
// //         >
// //           <nav>
// //             <ul>
// //               {linklist.map((link) => (
// //                 <motion.li
// //                   key={link.id}
// //                   initial={{ x: -20, opacity: 0 }}
// //                   animate={{ x: 0, opacity: 1 }}
// //                   transition={{ duration: 0.5, delay: 0.2 }}
// //                 >
// //                   <a href={link.link}>{link.text}</a>
// //                 </motion.li>
// //               ))}
// //             </ul>
// //           </nav>
// //         </motion.div>

// //         {/* Copyright Text */}
// //         <motion.div
// //           className="copy-text"
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ duration: 0.6, delay: 0.4 }}
// //         >
// //           <p>
// //             &copy; 2025 All rights reserved by
// //             <a href="#" target="_blank"> Md Shoaib </a>
// //           </p>
// //         </motion.div>
// //       </div>

// //       {/* Scroll Up Button */}
// //       {showScrollUp && (
// //         <div className="scroll-up" onClick={scrollToTop}>
// //           <IoIosArrowUp size={30} />
// //         </div>
// //       )}
// //     </motion.footer>
// //   );
// // };


// // With up down arrow button


// import { linklist } from "../../assets/data/data";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";
// import { IoIosArrowUp } from "react-icons/io";

// export const Footer = () => {
//   const [showScrollUp, setShowScrollUp] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowScrollUp(true);
//       } else {
//         setShowScrollUp(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <motion.footer
//       className="tj-footer-area"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container text-center">

//         {/* Logo Box */}
//         <motion.div
//           className="logo-box"
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span
//             style={{
//               fontSize: "30px",
//               fontWeight: "600",
//               fontFamily: "'Brush Script MT', cursive",
//               background:
//                 "linear-gradient(90deg, #ffffff, #8750f7)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Md Shoaib
//           </span>
//         </motion.div>

//         {/* Footer Menu */}
//         <motion.div
//           className="footer-menu"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <nav>
//             <ul>
//               {linklist.map((link) => (
//                 <motion.li
//                   key={link.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <a href={link.link}>{link.text}</a>
//                 </motion.li>
//               ))}
//             </ul>
//           </nav>
//         </motion.div>

//         {/* Copyright */}
//         <motion.div
//           className="copy-text"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <p>
//             &copy; 2026 All rights reserved by{" "}
//             <a href="#" target="_blank" rel="noreferrer">
//               Md Shoaib
//             </a>
//           </p>
//         </motion.div>

//       </div>

//       {/* Scroll Up Button */}
//       {showScrollUp && (
//         <div className="scroll-up" onClick={scrollToTop}>
//           <IoIosArrowUp size={30} />
//         </div>
//       )}
//     </motion.footer>
//   );
// };



// import { linklist } from "../../assets/data/data";
// import { motion } from "framer-motion";

// export const Footer = () => {
//   return (
//     <motion.footer
//       className="tj-footer-area"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="container text-center">
//         {/* Logo Box */}
//         <motion.div
//           className="logo-box"
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span
//             style={{
//               fontSize: "30px",
//               fontWeight: "600",
//               fontFamily: "'Brush Script MT', cursive",
//               background: "linear-gradient(90deg, #ffffff, #8750f7)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }}
//           >
//             Md Shoaib
//           </span>
//         </motion.div>

//         {/* Footer Menu */}
//         <motion.div
//           className="footer-menu"
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//         >
//           <nav>
//             <ul>
//               {linklist.map((link) => (
//                 <motion.li
//                   key={link.id}
//                   initial={{ x: -20, opacity: 0 }}
//                   animate={{ x: 0, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                 >
//                   <a href={link.link}>{link.text}</a>
//                 </motion.li>
//               ))}
//             </ul>
//           </nav>
//         </motion.div>

//         {/* Copyright */}
//         <motion.div
//           className="copy-text"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <p>
//             &copy; 2026 All rights reserved by{" "}
//             <a href="#" target="_blank" rel="noreferrer">
//               Md Shoaib
//             </a>
//           </p>
//         </motion.div>
//       </div>
//     </motion.footer>
//   );
// };


import { linklist } from "../../assets/data/data";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaFacebookF } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const primaryColor = "#8750f7";

  const socialLinks = [
    { id: 1, icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/md-shoaib-07b32a314" },
    { id: 2, icon: <FaGithub />, url: "https://github.com/Mdshoaib77" },
    { id: 3, icon: <FaWhatsapp />, url: "https://wa.me/8801724519674" },
    { id: 4, icon: <FaFacebookF />, url: "https://www.facebook.com/md.shoaib.959839/" },
  ];

  return (
    <motion.footer
      className="tj-footer-area"
      style={{
        background: "#050709", 
        padding: "80px 0 30px",
        position: "relative",
        borderTop: "1px solid rgba(135, 80, 247, 0.1)",
        overflow: "hidden"
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {/* Decorative Background Glow */}
      <div 
        style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "500px",
            height: "200px",
            background: `radial-gradient(circle, ${primaryColor}1A 0%, transparent 70%)`,
            filter: "blur(60px)",
            zIndex: 0
        }}
      ></div>

      <div className="container text-center" style={{ position: "relative", zIndex: 1 }}>
        
        {/* 1. Brand Logo Section */}
        <motion.div
          className="logo-box"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: "35px" }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: "40px",
                fontWeight: "700",
                fontFamily: "'Brush Script MT', cursive",
                background: `linear-gradient(135deg, #ffffff 30%, ${primaryColor} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "1px"
              }}
            >
              Md Shoaib
            </span>
          </NavLink>
        </motion.div>

        {/* 2. Navigation Links */}
        <motion.nav
          style={{ marginBottom: "45px" }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "40px",
              listStyle: "none",
              padding: 0,
              flexWrap: "wrap",
            }}
          >
            {linklist.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.link}
                  style={({ isActive }) => ({
                    color: isActive ? primaryColor : "#94a3b8",
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    transition: "0.4s",
                  })}
                  onMouseEnter={(e) => (e.target.style.color = primaryColor)}
                  onMouseLeave={(e) => (e.target.style.color = "#94a3b8")}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* 3. Social Media Pills */}
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "50px",
          }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -8 }}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(135, 80, 247, 0.15)",
                borderRadius: "14px", // Modern Rounded Square
                color: "#fff",
                fontSize: "20px",
                transition: "0.3s all cubic-bezier(0.4, 0, 0.2, 1)",
                backdropFilter: "blur(10px)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = primaryColor;
                e.currentTarget.style.borderColor = primaryColor;
                e.currentTarget.style.boxShadow = `0 15px 30px ${primaryColor}4D`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                e.currentTarget.style.borderColor = "rgba(135, 80, 247, 0.15)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* 4. Copyright Footer Bar */}
        <motion.div
          style={{
            paddingTop: "35px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p style={{ color: "#64748b", fontSize: "14px", margin: 0, letterSpacing: "0.5px" }}>
            &copy; {new Date().getFullYear()} Crafted with ❤️ by{" "}
            <span style={{ 
                color: "#fff", 
                fontWeight: "600",
                background: `linear-gradient(to right, #fff, ${primaryColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}>Md Shoaib</span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};