"use client"
import React, { useState } from "react";

// Import the heart icon (replace with your custom icon if required)
import { FaHeart } from "react-icons/fa";

const Counter: React.FC = () => {
  const [quantity, setQuantity] = useState(2);
  const [liked, setLiked] = useState(false);

  const handleIncrement = () => setQuantity(quantity + 1);
  const handleDecrement = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  const toggleLike = () => setLiked(!liked);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {/* Counter Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <button
          onClick={handleDecrement}
          disabled={quantity === 0}
          style={{
            padding: "10px 15px",
            backgroundColor: "#fff",
            border: "none",
            borderRight: "1px solid #ddd",
            cursor: quantity > 0 ? "pointer" : "not-allowed",
          }}
        >
          ➖
        </button>
        <div
          style={{
            width: "40px",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          {quantity}
        </div>
        <button
          onClick={handleIncrement}
          style={{
            padding: "10px 15px",
            backgroundColor: "#f44336",
            color: "#fff",
            border: "none",
            borderLeft: "1px solid #ddd",
            cursor: "pointer",
          }}
        >
          ➕
        </button>
      </div>

      {/* Buy Now Button */}
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#f44336",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Buy Now
      </button>

      {/* Heart Icon */}
      <button
        onClick={toggleLike}
        style={{
          width: "40px",
          height: "40px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: liked ? "#f44336" : "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        aria-label="Like Button"
      >
        <FaHeart
          color={liked ? "#fff" : "#f44336"}
          size={18}
          style={{
            transition: "color 0.3s ease",
          }}
        />
      </button>
    </div>
  );
};

export default Counter;