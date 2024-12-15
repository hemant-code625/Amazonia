export const FEATURED_PRODUCTS = [
  {
    id: 1,
    title: "Apple iPhone 13",
    price: 799.99,
    rating: 4.5,
    image: "https://placehold.co/300x300?text=iPhone",
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    price: 699.99,
    rating: 4.3,
    image: "https://placehold.co/300x300?text=Galaxy",
  },
];

export const BEST_OFFERS = [
  {
    id: 3,
    title: "Sony WH-1000XM4",
    price: 299.99,
    rating: 4.8,
    image: "https://placehold.co/300x300?text=Headphones",
    discount: 30,
  },
  {
    id: 4,
    title: "iPad Air",
    price: 499.99,
    rating: 4.7,
    image: "https://placehold.co/300x300?text=iPad",
    discount: 20,
  },
  {
    id: 5,
    title: "Nintendo Switch OLED",
    price: 349.99,
    rating: 4.9,
    image: "https://placehold.co/300x300?text=Switch",
    discount: 10,
  },
  {
    id: 6,
    title: "MacBook Air M2",
    price: 1199.99,
    rating: 4.8,
    image: "https://placehold.co/300x300?text=MacBook",
    discount: 15,
  },
  {
    id: 7,
    title: "Sony A7 III",
    price: 1799.99,
    rating: 4.9,
    image: "https://placehold.co/300x300?text=Camera",
    discount: 25,
  },
  {
    id: 8,
    title: "DJI Mavic Air 2",
    price: 799.99,
    rating: 4.7,
    image: "https://placehold.co/300x300?text=Drone",
    discount: 20,
  },
  {
    id: 9,
    title: "Apple Watch Series 7",
    price: 399.99,
    rating: 4.8,
    image: "https://placehold.co/300x300?text=Watch",
    discount: 15,
  },
  {
    id: 10,
    title: "Samsung Odyssey G9",
    price: 1399.99,
    rating: 4.9,
    image: "https://placehold.co/300x300?text=Monitor",
    discount: 10,
  },
  {
    id: 11,
    title: "Sony PS5",
    price: 499.99,
    rating: 4.9,
    image: "https://placehold.co/300x300?text=PS5",
    discount: 5,
  },
  {
    id: 12,
    title: "Xbox Series X",
    price: 499.99,
    rating: 4.9,
    image: "https://placehold.co/300x300?text=Xbox",
    discount: 5,
  },
];

export const TRENDING_PRODUCTS = [
  {
    id: 5,
    title: "Nintendo Switch OLED",
    price: 349.99,
    rating: 4.9,
    image: "https://placehold.co/300x300?text=Switch",
  },
  {
    id: 6,
    title: "MacBook Air M2",
    price: 1199.99,
    rating: 4.8,
    image: "https://placehold.co/300x300?text=MacBook",
  },
];

import decor from "../assets/categories/home-decor/186x116_Home_decor_1._SY116_CB555624324_.jpg";
import bedsheet from "../assets/categories/home-decor/186x116_Home_furnishings_2._SY116_CB555624324_.jpg";
import lightings from "../assets/categories/home-decor/186x116_Home_lighting_2._SY116_CB555624324_.jpg";
import furniture from "../assets/categories/home-decor/186x116_Home_storage_1._SY116_CB555624324_.jpg";
import ac from "../assets/categories/appliances/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg";
import refrigerators from "../assets/categories/appliances/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg";
import microwaves from "../assets/categories/appliances/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg";
import washingMachines from "../assets/categories/appliances/186x116---wm._SY116_CB667322346_.jpg";
import duck from "../assets/categories/toys/duck.jpg";
import chess from "../assets/categories/toys/chess.jpg";
import animal_ride from "../assets/categories/toys/animal_ride.jpg";
import park from "../assets/categories/toys/park.jpg";
import cleaner from "../assets/categories/automotive-essentials/Glasscare1X._SY116_CB410830553_.jpg";
import tyreRim from "../assets/categories/automotive-essentials/Rim_tyrecare1x._SY116_CB410830552_.jpg";
import vaccumCleaner from "../assets/categories/automotive-essentials/Vaccum1x._SY116_CB410830552_.jpg";
import helmets from "../assets/categories/automotive-essentials/Vega_helmet_186x116._SY116_CB405090404_.jpg";

export const CATEGORY_GROUPS = [
  {
    id: 1,
    title: "Revamp Your Home in Style",
    categories: [
      {
        id: 1,
        title: "Furniture",
        image: furniture,
        category: "furniture",
      },
      {
        id: 2,
        title: "Lighting",
        image: lightings,
        category: "lighting",
      },
      { id: 3, title: "Decor", image: decor, category: "decor" },
      {
        id: 4,
        title: "Cushion covers, bedsheets & more",
        image: bedsheet,
        category: "bedsheets",
      },
    ],
  },
  {
    id: 2,
    title: "Appliances for your home | Up to 55% off",
    categories: [
      {
        id: 5,
        title: "Air Conditioners",
        image: ac,
        category: "airConditioners",
      },
      {
        id: 6,
        title: "Refrigerators",
        image: refrigerators,
        category: "womens",
      },
      {
        id: 7,
        title: "Microvaves",
        image: microwaves,
        category: "microwaves",
      },
      {
        id: 8,
        title: "Washing machines",
        image: washingMachines,
        category: "washingMachines",
      },
    ],
  },
  {
    id: 3,
    title: "Min. 40% off | Toys for your little ones | Amazon brands",
    categories: [
      {
        id: 9,
        title: "Min 40% off | Soft toys",
        image: duck,
        category: "softToys",
      },
      {
        id: 10,
        title: "Min 40% off | Indoor games",
        image: chess,
        category: "laptops",
      },
      {
        id: 11,
        title: "Min 40% off | Ride ons",
        image: animal_ride,
        category: "headphones",
      },
      {
        id: 12,
        title: "Min 40% off | Outdoor toys",
        image: park,
        category: "smartwatches",
      },
    ],
  },
  {
    id: 4,
    title: "Automotive essentials | Up to 60% off",
    categories: [
      {
        id: 13,
        title: "Cleaning Accessories",
        image: cleaner,
        category: "cleaningAccessories",
      },
      {
        id: 14,
        title: "Tyre & rim care",
        image: tyreRim,
        category: "tyreRimCare",
      },
      {
        id: 15,
        title: "Helmets",
        image: helmets,
        category: "helmets",
      },
      {
        id: 16,
        title: "Vaccum Cleaners",
        image: vaccumCleaner,
        category: "vaccumCleaners",
      },
    ],
  },
];
