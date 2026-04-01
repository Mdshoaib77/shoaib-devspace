// // import { motion, AnimatePresence } from "framer-motion";
// // import { FaWhatsapp, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

// // const ContactModal = ({ isOpen, onClose }) => {
// //   const socialLinks = [
// //     { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/yournumber", color: "#25D366" },
// //     { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/yourusername", color: "#0077B5" },
// //     { name: "Email", icon: <FaEnvelope />, link: "mailto:your@email.com", color: "#EA4335" },
// //   ];

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <>
// //           {/* Backdrop */}
// //           <motion.div 
// //             initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
// //             onClick={onClose}
// //             style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100001, backdropFilter: 'blur(10px)' }}
// //           />
          
// //           {/* Modal Content */}
// //           <motion.div 
// //             initial={{ scale: 0.8, opacity: 0, y: 50 }}
// //             animate={{ scale: 1, opacity: 1, y: 0 }}
// //             exit={{ scale: 0.8, opacity: 0, y: 50 }}
// //             style={{
// //               position: 'fixed', top: '50%', left: '50%', x: '-50%', y: '-50%',
// //               width: '90%', maxWidth: '400px', background: '#121212',
// //               padding: '30px', borderRadius: '24px', zIndex: 100002,
// //               border: '1px solid #8750f7', boxShadow: '0 0 40px rgba(135, 80, 247, 0.3)'
// //             }}
// //           >
// //             <button onClick={onClose} style={{ position: 'absolute', right: '20px', top: '20px', color: '#fff', fontSize: '20px' }}>
// //               <FaTimes />
// //             </button>
            
// //             <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '25px' }}>Let's Connect!</h3>
            
// //             <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
// //               {socialLinks.map((item, i) => (
// //                 <motion.a
// //                   key={i} href={item.link} target="_blank"
// //                   whileHover={{ scale: 1.05, backgroundColor: item.color }}
// //                   style={{
// //                     display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px',
// //                     borderRadius: '15px', background: '#1a1a1a', color: '#fff', textDecoration: 'none',
// //                     border: '1px solid #333', transition: '0.3s'
// //                   }}
// //                 >
// //                   <span style={{ fontSize: '24px' }}>{item.icon}</span>
// //                   <span style={{ fontWeight: '600' }}>{item.name}</span>
// //                 </motion.a>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // export default ContactModal;

// import { motion, AnimatePresence } from "framer-motion";
// import { FaWhatsapp, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

// const ContactModal = ({ isOpen, onClose }) => {
//   const socialLinks = [
//     { 
//       name: "WhatsApp", 
//       icon: <FaWhatsapp />, 
//       link: "https://wa.me/8801724519674", 
//       color: "#25D366" 
//     },
//     { 
//       name: "LinkedIn", 
//       icon: <FaLinkedin />, 
//       link: "https://www.linkedin.com/in/mdshoaibfullstack/", 
//       color: "#0077B5" 
//     },
//     { 
//       name: "Email", 
//       icon: <FaEnvelope />, 
//       link: "mailto:mdshoaibfullstack@gmail.com", 
//       color: "#EA4335" 
//     },
//   ];

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <>
//           {/* Backdrop */}
//           <motion.div 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             style={{ 
//               position: 'fixed', 
//               inset: 0, 
//               background: 'rgba(0,0,0,0.85)', 
//               zIndex: 9999, // Cursor er niche thakbe
//               backdropFilter: 'blur(8px)',
//               cursor: 'auto' 
//             }}
//           />
          
//           {/* Modal Content */}
//           <motion.div 
//             initial={{ scale: 0.8, opacity: 0, y: 50 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.8, opacity: 0, y: 50 }}
//             style={{
//               position: 'fixed', top: '50%', left: '50%', x: '-50%', y: '-50%',
//               width: '90%', maxWidth: '380px', background: '#0a0a0a',
//               padding: '40px 25px', borderRadius: '30px', zIndex: 10000,
//               border: '1px solid #8750f7', 
//               boxShadow: '0 0 50px rgba(135, 80, 247, 0.4)',
//               textAlign: 'center'
//             }}
//           >
//             {/* Close Button */}
//             <button 
//               onClick={onClose} 
//               style={{ 
//                 position: 'absolute', right: '20px', top: '20px', 
//                 color: '#fff', fontSize: '24px', background: 'none', 
//                 border: 'none', cursor: 'pointer', zIndex: 10001
//               }}
//             >
//               <FaTimes />
//             </button>
            
//             <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '10px' }}>Get in Touch</h3>
//             <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '14px' }}>I'm available for remote work and collaborations.</p>
            
//             <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//               {socialLinks.map((item, i) => (
//                 <motion.a
//                   key={i} href={item.link} target="_blank" rel="noreferrer"
//                   whileHover={{ scale: 1.03, backgroundColor: 'rgba(135, 80, 247, 0.1)' }}
//                   style={{
//                     display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px',
//                     borderRadius: '18px', background: '#151515', color: '#fff', 
//                     textDecoration: 'none', border: '1px solid #222', transition: '0.3s'
//                   }}
//                 >
//                   <span style={{ fontSize: '22px', color: item.color }}>{item.icon}</span>
//                   <span style={{ fontWeight: '500' }}>{item.name}</span>
//                 </motion.a>
//               ))}
//             </div>
//           </motion.div>
//         </>
//       )}
//     </AnimatePresence>
//   );
// };

// export default ContactModal;

import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaTimes } from "react-icons/fa";

const ContactModal = ({ isOpen, onClose }) => {
  const socialLinks = [
    { 
      name: "WhatsApp", 
      icon: <FaWhatsapp />, 
      link: "https://wa.me/8801724519674", 
      color: "#25D366" 
    },
    { 
      name: "LinkedIn", 
      icon: <FaLinkedin />, 
      link: "https://www.linkedin.com/in/mdshoaibfullstack/", 
      color: "#0077B5" 
    },
    { 
      name: "Email", 
      icon: <FaEnvelope />, 
      link: "mailto:mdshoaibfullstack@gmail.com", 
      color: "#EA4335" 
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ 
              position: 'fixed', 
              inset: 0, 
              background: 'rgba(0,0,0,0.85)', 
              zIndex: 9999,
              backdropFilter: 'blur(8px)',
              cursor: 'auto' 
            }}
          />
          
          {/* Modal Content - Position Adjusted */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: "-40%" }} // Niche theke upore ashar animation
            animate={{ scale: 1, opacity: 1, y: "-50%" }}
            exit={{ scale: 0.8, opacity: 0, y: "-40%" }}
            style={{
              position: 'fixed', 
              top: '65%', // 50% theke bariye 45% kora hoyeche jate upore thake
              left: '50%', 
              x: '-50%', 
              y: '-50%',
              width: '90%', 
              maxWidth: '380px', 
              background: '#0a0a0a',
              padding: '40px 25px', 
              borderRadius: '30px', 
              zIndex: 10000,
              border: '1px solid #8750f7', 
              boxShadow: '0 0 50px rgba(135, 80, 247, 0.4)',
              textAlign: 'center'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={onClose} 
              style={{ 
                position: 'absolute', right: '20px', top: '20px', 
                color: '#fff', fontSize: '24px', background: 'none', 
                border: 'none', cursor: 'pointer', zIndex: 10001
              }}
            >
              <FaTimes />
            </button>
            
            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '10px' }}>Get in Touch</h3>
            <p style={{ color: '#aaa', marginBottom: '30px', fontSize: '14px' }}>
              I'm available for remote work and collaborations.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {socialLinks.map((item, i) => (
                <motion.a
                  key={i} href={item.link} target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.03, backgroundColor: 'rgba(135, 80, 247, 0.1)' }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '15px', padding: '15px 20px',
                    borderRadius: '18px', background: '#151515', color: '#fff', 
                    textDecoration: 'none', border: '1px solid #222', transition: '0.3s'
                  }}
                >
                  <span style={{ fontSize: '22px', color: item.color }}>{item.icon}</span>
                  <span style={{ fontWeight: '500' }}>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;