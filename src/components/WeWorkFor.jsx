import React from 'react';

const bankNames = [
  'ABU DHABI COMMERCIAL BANK',
  'ALLAHABAD BANK',
  'ALLAHABAD UP GRAMIN BANK',
  'ANDHRA BANK',
  'ANDHRA PRAGATHI GRAMEENA BANK',
  'AU SMALL FINANCE BANK LIMITED',
  'AXIS BANK',
  'BANK OF BAHRAIN AND KUWAIT',
  'BANK OF BARODA',
  'BANK OF INDIA',
  'BANK OF MAHARASHTRA',
  'BASSEIN CATHOLIC CO-OP.BANK LTD.',
  'BOMBAY MERCANTILE CO-OP.BANK LTD.',
  'CANARA BANK',
  'CENTRAL BANK OF INDIA',
  'CITIBANK',
  'CITY UNION BANK LTD',
  'CORPORATION BANK',
  'CSB BANK LIMITED',
  'DCB BANK LIMITED',
  'DENA BANK',
  'DEUTSCHE BANK',
  'DHANLAXMI BANK LTD',
  'HARYANA GRAMIN BANK',
  'HDFC BANK LTD',
  'HSBC',
  'ICICI BANK LTD',
  'IDBI BANK LTD',
  'IDFC FIRST BANK LTD',
  'INDIAN BANK',
  'INDIAN OVERSEAS BANK',
  'INDUSIND BANK LIMITED',
  'JHARKHAND GRAMIN BANK',
  'KARNATAKA BANK',
  'KARUR VYSYA BANK',
  'KOTAK MAHINDRA BANK',
  'MADHYA BIHAR GRAMIN BANK',
  'MAHARASHTRA GRAMIN BANK',
  'MANIPUR STATE CO-OP.BANK LTD.',
  'NEW INDIA CO-OPERATIVE BANK LTD',
  'NKGSB CO-OP BANK LTD',
  'ORIENTAL BANK OF COMMERCE',
  'PUNJAB AND SIND BANK',
  'PUNJAB NATIONAL BANK',
  'RBL BANK',
  'SARVA U.P. GRAMIN BANK',
  'SHRI MAHILA SEWA SAHAKARI BANK LTD.,AHMEDABAD',
  'SOUTH INDIAN BANK',
  'STANDARD CHARTERED BANK',
  'STATE BANK OF INDIA',
  'SVC CO-OPERATIVE BANK LTD.',
  'SYNDICATE BANK',
  'TAMILNAD MERCANTILE BANK LTD',
  'THE COSMOS CO-OPERATIVE BANK LTD.',
  'THE FEDERAL BANK LTD',
  'THE JAMMU AND KASHMIR BANK LTD',
  'THE KALUPUR COMMERCIAL CO. OP. BANK LTD.',
  'THE LAKSHMI VILAS BANK LTD',
  'THE SARASWAT CO-OPERATIVE BANK LTD',
  'THE THANE JANATA SAHAKARI BANK LTD',
  'UCO BANK',
  'UNION BANK OF INDIA',
  'UNITED BANK OF INDIA',
  'VIJAYA BANK',
  'YES BANK LTD'
];

const SLIDE_DURATION = 40; // seconds

const WeWorkFor = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">We Work For</h2>
      <div className="overflow-hidden whitespace-nowrap relative w-full border rounded bg-gray-50 py-4">
        <div
          className="inline-block animate-slide-text"
          style={{
            animation: `slide-text ${SLIDE_DURATION}s linear infinite`,
            minWidth: '100%'
          }}
        >
          {bankNames.concat(bankNames).map((name, idx) => (
            <span
              key={idx}
              className="inline-block mx-8 text-lg font-semibold text-blue-700"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes slide-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  </section>
);

export default WeWorkFor;
