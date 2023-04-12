import React, { useState, useEffect } from "react";
import "./Header.css";
const Header = () => {
  const data = [
    "Get 10% Off - Use Coupon Code HAPPY123",
    "Free Shipping Over $50",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="header-container">
      <span className="header-text">{data[index]}</span>
    </div>
  );
};

export default Header;
