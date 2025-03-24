

import React, { useState, useEffect } from "react";
import { getAllAffiliateProducts } from "../utils/api";
import "./styles/emergencyShop.css";

const EmergencyShop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getAllAffiliateProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <section className="emergency-shop">
            <div className="container-emergency-shop">
                <h2>🛒 Emergency Shop</h2>
                <p className="shop-description">
                    Stay prepared! Get essential emergency items from trusted sellers.
                </p>
                <div className="product-grid">
                    {products.slice(0, 6).map((product) => ( // Show 6 products
                        <div key={product._id} className="product-card">
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.description.substring(0, 60)}...</p>
                                <a href={product.affiliateLink} target="_blank" rel="noopener noreferrer" className="buy-button">
                                    Buy on AliExpress
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmergencyShop;
