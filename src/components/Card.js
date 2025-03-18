import { motion } from "framer-motion";

export default function Card({ card, onClick }) {
  return (
    <motion.div
      className={`p-6 rounded-2xl shadow-lg cursor-pointer ${card.color} transform hover:scale-105 transition duration-300`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-semibold">{card.title}</h2>
      <p className="mt-2 text-sm">{card.benefits}</p>
    </motion.div>
  );
}
