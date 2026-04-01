// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPaperPlane } from "react-icons/fa";
// import ContactModal from "./ContactModal";

// const FloatingContact = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <motion.div
//         onClick={() => setIsOpen(true)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         style={{
//           position: "fixed", bottom: "30px", right: "30px",
//           width: "60px", height: "60px", backgroundColor: "#8750f7",
//           borderRadius: "50%", display: "flex", justifyContent: "center",
//           alignItems: "center", color: "#fff", cursor: "pointer",
//           zIndex: 1000, boxShadow: "0 0 20px rgba(135, 80, 247, 0.6)",
//         }}
//       >
//         <FaPaperPlane size={24} />
        
//         {/* Pulsing Aura Effect */}
//         <motion.div
//           animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           style={{
//             position: "absolute", width: "100%", height: "100%",
//             borderRadius: "50%", border: "2px solid #8750f7"
//           }}
//         />
//       </motion.div>

//       <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
//     </>
//   );
// };

// export default FloatingContact;


import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import ContactModal from "./ContactModal";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        // Desktop click ebong Mobile touch duto-i handle korbe
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          position: "fixed", bottom: "30px", right: "30px",
          width: "60px", height: "60px", backgroundColor: "#8750f7",
          borderRadius: "50%", display: "flex", justifyContent: "center",
          alignItems: "center", color: "#fff", cursor: "pointer",
          zIndex: 9998, // Jate trail cursor upore thake
          boxShadow: "0 0 30px rgba(135, 80, 247, 0.6)",
        }}
      >
        <FaPaperPlane size={22} />
        
        {/* Pulsing Aura */}
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            position: "absolute", width: "100%", height: "100%",
            borderRadius: "50%", border: "2px solid #8750f7"
          }}
        />
      </motion.div>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default FloatingContact;