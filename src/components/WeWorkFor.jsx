import React from 'react';

const bankLogos = [
  { src: '/images/banks/bob.png', alt: 'Bank of Baroda' },
  { src: '/images/banks/federal.png', alt: 'Federal Bank' },
  { src: '/images/banks/hdfc.png', alt: 'HDFC Bank' },
  { src: '/images/banks/hsbc.png', alt: 'HSBC Bank' },
  { src: '/images/banks/icici.png', alt: 'ICICI Bank' },
  { src: '/images/banks/uco.png', alt: 'UCO Bank' },
  { src: '/images/banks/yesbank.png', alt: 'Yes Bank' },
];

const WeWorkFor = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">We Work For</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {bankLogos.map((logo, idx) => (
          <div key={idx} className="flex items-center justify-center w-32 h-20 bg-gray-100 rounded shadow-sm">
            <img
              src={logo.src}
              alt={logo.alt}
              className="object-contain w-24 h-12"
              style={{ width: '96px', height: '48px' }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WeWorkFor;
