import React from "react";
import "./Menuspage.css";
import pizza from '../assets/pizza.jpg';
import pasthaimg from '../assets/pastha.jpg';
import burd from '../assets/brud.png';
import frenchfries from '../assets/French-fries.jpg';

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic delight with 100% real mozzarella cheese",
    price: "$10.99",
    image: pizza,
  },
  {
    id: 2,
    name: "Cheese Burger",
    description: "Juicy grilled beef patty with melted cheese and fresh veggies",
    price: "$8.49",
    image: burd,
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    description: "Creamy alfredo pasta with parmesan and herbs",
    price: "$9.25",
    image: pasthaimg,
  },
  {
    id: 4,
    name: "French Fries",
    description: "Crispy golden fries with a side of ketchup",
    price: "$4.50",
    image: frenchfries,
  },
];

const Menuspage = () => {
  return (
    <section className="menu-section">
      <h2 className="menu-title">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-img" />
            <h3>{item.name}</h3>
            <p className="menu-desc">{item.description}</p>
            <div className="menu-footer">
              <span className="menu-price">{item.price}</span>
              <button className="menu-btn">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menuspage;
