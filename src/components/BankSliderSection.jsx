import React from "react";
import { motion } from "framer-motion";

const bankLogos = [
  { src: "/images/banks/icici.png", alt: "ICICI Bank" },
  { src: "/images/banks/bob.png", alt: "Bank of Baroda" },
  { src: "/images/banks/yesbank.png", alt: "Yes Bank" },
  { src: "/images/banks/hdfc.png", alt: "HDFC Bank" },
  { src: "/images/banks/uco.png", alt: "UCO Bank" },
  { src: "/images/banks/federal.png", alt: "Federal Bank" },
  { src: "/images/banks/hsbc.png", alt: "HSBC Bank" },
];

const BankSliderSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">We Work For</h2>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-8 animate-slide"
            initial={{ x: 0 }}
            animate={{ x: [0, -1000, 0] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {bankLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center justify-center" style={{ width: 180, height: 80 }}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="object-contain"
                  style={{ width: 160, height: 60 }}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default BankSliderSection;
