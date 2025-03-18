import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "../components/Card";
import CardModal from "../components/CardModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cards = [
  { id: 1, title: "Elite Card", benefits: "5% cashback, Airport Lounge Access", color: "bg-gradient-to-r from-purple-500 to-indigo-500" },
  { id: 2, title: "Gold Card", benefits: "3% cashback, No Forex Markup", color: "bg-gradient-to-r from-yellow-500 to-orange-500" },
  { id: 3, title: "Platinum Card", benefits: "Unlimited Rewards, Premium Support", color: "bg-gradient-to-r from-gray-700 to-black" },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />
      <main className="flex flex-col items-center justify-center p-6 flex-grow">
        <h1 className="text-4xl font-bold mb-10">Exclusive Credit Cards</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Card key={card.id} card={card} onClick={() => setSelected(card)} />
          ))}
        </div>
      </main>
      <Footer />
      <AnimatePresence>
        {selected && <CardModal card={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
