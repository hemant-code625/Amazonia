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

import decor from "../assets/categories/186x116_Home_decor_1._SY116_CB555624324_.jpg";
import bedsheet from "../assets/categories/186x116_Home_furnishings_2._SY116_CB555624324_.jpg";
import lightings from "../assets/categories/186x116_Home_lighting_2._SY116_CB555624324_.jpg";
import furniture from "../assets/categories/186x116_Home_storage_1._SY116_CB555624324_.jpg";
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
    title: "Upgrade Your Wardrobe",
    categories: [
      {
        id: 5,
        title: "Men's Clothing",
        image: "path/to/mens.jpg",
        category: "mens",
      },
      {
        id: 6,
        title: "Women's Clothing",
        image: "path/to/womens.jpg",
        category: "womens",
      },
      {
        id: 7,
        title: "Kids' Fashion",
        image: "path/to/kids.jpg",
        category: "kids",
      },
      {
        id: 8,
        title: "Accessories",
        image: "path/to/accessories.jpg",
        category: "accessories",
      },
    ],
  },
  {
    id: 3,
    title: "Tech & Gadgets",
    categories: [
      {
        id: 9,
        title: "Smartphones",
        image: "path/to/smartphones.jpg",
        category: "smartphones",
      },
      {
        id: 10,
        title: "Laptops",
        image: "path/to/laptops.jpg",
        category: "laptops",
      },
      {
        id: 11,
        title: "Headphones",
        image: "path/to/headphones.jpg",
        category: "headphones",
      },
      {
        id: 12,
        title: "Smartwatches",
        image: "path/to/smartwatches.jpg",
        category: "smartwatches",
      },
    ],
  },
];
