// import React, { useState, useEffect } from "react";
// import { getAllAffiliateProducts } from "../utils/api";
// import { FaArrowRight } from "react-icons/fa"; // React Icon for More button
// import { useNavigate } from "react-router-dom"; // For navigation
// import "./styles/emergencyShop.css";

// const EmergencyShop = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const navigate = useNavigate(); // React Router navigation

//     useEffect(() => {
//         const fetchProducts = async () => {
//             setLoading(true);
//             setError(null);
//             try {
//                 const fetchedProducts = await getAllAffiliateProducts();
//                 console.log("Fetched Products:", fetchedProducts); // Debugging
//                 if (!Array.isArray(fetchedProducts)) {
//                     throw new Error("API did not return an array");
//                 }
//                 setProducts(fetchedProducts);
//             } catch (err) {
//                 console.error("Failed to fetch products:", err);
//                 setError("Failed to load products.");
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchProducts();
//     }, []);

//     if (loading) return <div className="loading">Loading emergency products...</div>;
//     if (error) return <div className="error">{error}</div>;

//     return (
//         <section className="emergency-shop">
//             <div className="container-emergency-shop">
//                 <h2>🛒 Emergency Shop</h2>
//                 <p className="shop-description">
//                     Stay prepared! Get essential emergency items from trusted sellers.
//                 </p>

//                 {products.length === 0 ? (
//                     <div className="no-products">No emergency products available.</div>
//                 ) : (
//                     <div className="product-grid">
//                         {products.slice(0, 3).map((product) => (
//                             <div key={product.ProductID || product._id} className="product-card">
//                                 <img
//                                     src={product.ImageUrl || product.image}
//                                     alt={product.ProductName || product.name}
//                                     className="product-image"
//                                 />
//                                 <div className="product-details">
//                                     <h3>{product.ProductName || product.name}</h3>
//                                     <p>{(product.Description || product.description)?.substring(0, 60)}...</p>
//                                     <a
//                                         href={product.AffiliateLink || product.affiliateLink}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="buy-button"
//                                     >
//                                         Buy Now
//                                     </a>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}

//                 {/* More Button */}
//                 <div className="more-button-container">
//                     <button className="more-button" onClick={() => navigate("/shop")}>
//                         More Products <FaArrowRight />
//                     </button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default EmergencyShop;

import React, { useState, useEffect } from "react";
import { getAllAffiliateProducts } from "../utils/api";
import { FaArrowRight } from "react-icons/fa"; // React Icon for More button
import { useNavigate } from "react-router-dom"; // For navigation
import "./styles/emergencyShop.css";

const EmergencyShop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // React Router navigation

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const fetchedProducts = await getAllAffiliateProducts();
                console.log("Fetched Products:", fetchedProducts); // Debugging
                if (!Array.isArray(fetchedProducts)) {
                    throw new Error("API did not return an array");
                }
                setProducts(fetchedProducts);
            } catch (err) {
                console.error("Failed to fetch products:", err);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) return <div className="loading">Loading emergency products...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <section className="emergency-shop">
            <div className="container-emergency-shop">
                <h2>🛒 Emergency Shop</h2>
                <p className="shop-description">
                    Stay prepared! Get essential emergency items from trusted sellers.
                </p>

                {products.length === 0 ? (
                    <div className="no-products">No emergency products available.</div>
                ) : (
                    <div className="product-grid">
                        {products.slice(0, 3).map((product) => (
                            <div key={product.ProductID || product._id} className="product-card">
                                <img
                                    src={product.ImageUrl || product.image}
                                    alt={product.ProductName || product.name}
                                    className="product-image"
                                />
                                <div className="product-details">
                                    <h3>{product.ProductName || product.name}</h3>
                                    <p>{(product.Description || product.description)?.substring(0, 60)}...</p>
                                    <a
                                        href={product.AliExpressLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="buy-button"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* More Button */}
                <div className="more-button-container">
                    <button className="more-button" onClick={() => navigate("/shop")}>
                        More Products <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EmergencyShop;