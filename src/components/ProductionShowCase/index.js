import React, { useEffect, useRef, useState } from "react";
import "./productShowCase.css";

const ProductShowCase = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(false);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
       
      if (ref.current) {      
        // eslint-disable-next-line 
        observer.unobserve(ref.current);  
      }
    };
  });

  return (
    <div
      className={`product-showcase  ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="showCase-wrapper">
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
            alt="product-1"
            className="showcase-ui showcase-mockup-1"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
            alt="product-1"
            className="showcase-ui showcase-mockup-2"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
            alt="product-1"
            className="showcase-ui showcase-mockup-3"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
            alt="product-1"
            className="showcase-ui showcase-mockup-4"
          />
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
            alt="product-1"
            className="showcase-ui showcase-mockup-5"
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowCase;
