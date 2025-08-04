export const vehicles = [
  {
    id: 1,
    name: "Electra Elysium",
    subtitle: "Luxury Sedan",
    description:
      "The pinnacle of automotive luxury, where uncompromising comfort meets sophisticated engineering. Every journey becomes an experience of refined elegance and technological excellence.",
    price: "$185,000",
    emoji: "🚗",
    image: null,
    category: "sedan",
    features: [
      "Handcrafted Nappa Leather Interior",
      "Advanced Driver Assistance Systems",
      "Premium 24-Speaker Audio System",
      "Intelligent Navigation & Connectivity",
      "Adaptive Air Suspension",
      "Executive Rear Seating Package",
    ],
    specifications: {
      engine: "3.0L Twin-Turbo V6",
      power: "450 HP / 550 Nm",
      acceleration: "0-60 mph in 4.2s",
      topSpeed: "180 mph",
    },
  },
  {
    id: 2,
    name: "Electra Velocity",
    subtitle: "Performance Coupe",
    description:
      "Pure automotive passion unleashed. A symphony of power and precision that delivers an exhilarating driving experience while maintaining the highest standards of luxury and craftsmanship.",
    price: "$245,000",
    emoji: "🏎️",
    image: null,
    category: "sports",
    features: [
      "Carbon Fiber Monocoque Chassis",
      "Active Aerodynamics System",
      "Racing-Inspired Interior",
      "Track Performance Mode",
      "Ceramic Brake System",
      "Launch Control Technology",
    ],
    specifications: {
      engine: "4.0L Twin-Turbo V8",
      power: "650 HP / 700 Nm",
      acceleration: "0-60 mph in 2.8s",
      topSpeed: "210 mph",
    },
  },
  {
    id: 3,
    name: "Electra Atlas",
    subtitle: "Luxury SUV",
    description:
      "Versatility redefined through the lens of luxury. A commanding presence that combines uncompromising capability with sophisticated comfort for the modern adventurer.",
    price: "$195,000",
    emoji: "🚙",
    image: null,
    category: "suv",
    features: [
      "Intelligent All-Wheel Drive System",
      "Adaptive Terrain Management",
      "Spacious 7-Seat Configuration",
      "Advanced Safety Technology Suite",
      "Premium Cargo Management",
      "Off-Road Capability Package",
    ],
    specifications: {
      engine: "3.5L Twin-Turbo V6 Hybrid",
      power: "520 HP / 650 Nm",
      acceleration: "0-60 mph in 4.8s",
      topSpeed: "165 mph",
    },
  },
  {
    id: 4,
    name: "Electra Nova",
    subtitle: "Electric Luxury",
    description:
      "The future of automotive excellence, where sustainable innovation meets uncompromising luxury. Experience the perfect harmony of environmental responsibility and driving pleasure.",
    price: "$225,000",
    emoji: "⚡",
    image: null,
    category: "electric",
    features: [
      "Dual Motor All-Wheel Drive",
      "Advanced Battery Management System",
      "Ultra-Fast Charging Technology",
      "Intelligent Range Optimization",
      "Sustainable Materials Throughout",
      "Connected Services Platform",
    ],
    specifications: {
      battery: "120 kWh Lithium-Ion",
      power: "580 HP / 800 Nm",
      acceleration: "0-60 mph in 3.2s",
      range: "450 miles",
    },
  },
  {
    id: 5,
    name: "Electra Aurora",
    subtitle: "Luxury Convertible",
    description:
      "Open-air motoring elevated to an art form. Experience the perfect blend of wind-in-your-hair freedom and sophisticated luxury, crafted for those who appreciate life's finest moments.",
    price: "$265,000",
    emoji: "🌅",
    image: null,
    category: "convertible",
    features: [
      "Electro-Hydraulic Retractable Roof",
      "Wind Management System",
      "Premium Interior Protection",
      "Sport-Tuned Suspension",
      "Exclusive Convertible Package",
      "Climate-Controlled Seating",
    ],
    specifications: {
      engine: "4.0L Twin-Turbo V8",
      power: "580 HP / 650 Nm",
      acceleration: "0-60 mph in 3.5s",
      topSpeed: "200 mph",
    },
  },
  {
    id: 6,
    name: "Electra Voyager",
    subtitle: "Luxury Estate",
    description:
      "Practicality meets sophistication in perfect harmony. A versatile companion for life's journeys, offering uncompromising luxury without sacrificing the functionality modern families demand.",
    price: "$175,000",
    emoji: "🚐",
    image: null,
    category: "wagon",
    features: [
      "Expansive Cargo Configuration",
      "Adaptive Load Management",
      "Premium Family Comfort Package",
      "Advanced Safety Systems",
      "Versatile Seating Arrangements",
      "Intelligent Storage Solutions",
    ],
    specifications: {
      engine: "3.0L Twin-Turbo V6",
      power: "420 HP / 550 Nm",
      acceleration: "0-60 mph in 4.5s",
      topSpeed: "170 mph",
    },
  },
];

export const getVehiclesByCategory = (category) => {
  return vehicles.filter((vehicle) => vehicle.category === category);
};

export const getFeaturedVehicles = () => {
  return vehicles.slice(0, 3); // Return first 3 vehicles as featured
};
