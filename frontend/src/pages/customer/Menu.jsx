import React, { useState } from "react";
import MenuImage from "../../assets/Menu.png";
import CroissantImage from "../../assets/Croissant.png";
import DanishImage from "../../assets/Danish.png";
import PastryImage from "../../assets/Pastry.png";
import CheeseCakeImage from "../../assets/CheeseCake.png";
import TiramisuImage from "../../assets/Tiramisu.png";
import MuffinImage from "../../assets/Muffin.png";
import BagelImage from "../../assets/Bagel.png";
import DoughnutImage from "../../assets/Doughnut.png";
import MenuCard from "../../components/MenuCard";

export default function Menu() {
  const [cart, setCart] = useState([]);

  const menuItems = [
    {
      id: 1,
      name: "Croissant",
      description: "Strawberry & Oreo Croissant",
      price: "Rs200",
      image: CroissantImage,
    },
    {
      id: 2,
      name: "Danish",
      description: "Creamy and Flavourful Danish.",
      price: "Rs250",
      image: DanishImage,
    },
    {
      id: 3,
      name: "Pastry",
      description: "filled with sweet indulgence.",
      price: "Rs250",
      image: PastryImage,
    },
    {
      id: 4,
      name: "Cheese Cake",
      description: "Velvety texture and sweet",
      price: "Rs500",
      image: CheeseCakeImage,
    },
    {
      id: 5,
      name: "Tiramisu Cake",
      description: "Deliciously creamy dessert.",
      price: "Rs200",
      image: TiramisuImage,
    },
    {
      id: 6,
      name: "Muffin",
      description: "Freshly baked muffin with berries.",
      price: "Rs150",
      image: MuffinImage,
    },
    {
      id: 7,
      name: "Bagel",
      description: "Classic bagel with cream cheese.",
      price: "Rs300",
      image: BagelImage,
    },
    {
      id: 8,
      name: "Doughnut",
      description: "Delicious doughnut with jam and cream.",
      price: "Rs100",
      image: DoughnutImage,
    },
  ];

  // Handle adding items to cart with quantity
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );

      if (existingItem) {
        // Update the quantity if item exists
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add new item to cart
        return [...prevCart, item];
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Menu Banner */}
      <div
        className="relative w-full h-72 bg-cover bg-center rounded-lg overflow-hidden mb-8 flex-col"
        style={{ backgroundImage: `url(${MenuImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl font-serif italic">
            Try our Desserts, Sweetness in every bite
          </h1>
        </div>
      </div>

      <div className="text-center mb-6">
        <h1 className="text-4xl font-semibold animate-bounce mt-2 text-amber-950">
          Our Menu
        </h1>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} {...item} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-6 text-center">
        <h2 className="text-xl font-semibold">Shopping Cart</h2>
        <p className="text-lg">
          Total Items: {cart.reduce((total, item) => total + item.quantity, 0)}
        </p>
      </div>
    </div>
  );
}
