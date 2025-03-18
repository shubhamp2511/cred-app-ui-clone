import { motion } from "framer-motion";

export default function CardModal({ card, onClose }) {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white text-black p-6 rounded-lg w-full max-w-sm shadow-xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-2xl font-bold">{card.title}</h2>
        <p className="mt-2">{card.benefits}</p>
        <button 
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
          onClick={onClose}
        >Close</button>
      </motion.div>
    </motion.div>
  );
}
