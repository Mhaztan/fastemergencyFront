// import React, { useState, useEffect } from 'react';
// import { fetchAffiliateProducts } from '../utils/api'; // Ensure API is set up
// import { FaShoppingCart } from "react-icons/fa";
// import './styles/shop.css'; // Updated CSS

// const Shop = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getProducts = async () => {
//       setLoading(true);
//       setError(null);
//       try {
//         const data = await fetchAffiliateProducts();
//         setProducts(data);
//       } catch (err) {
//         console.error('Error fetching products:', err);
//         setError('Failed to load products.');
//       } finally {
//         setLoading(false);
//       }
//     };
//     getProducts();
//   }, []);

//   const handleBuyNowClick = (productId) => {
//     window.location.href = `/api/affiliates/click/${productId}`;
//   };

//   return (
//     <div className="shopContainer">
//       <nav className="shopHeader">
//         <h1><FaShoppingCart /> Online Store</h1>
//         <p>Discover the best tech gadgets and accessories at great prices.</p>
//       </nav>

//       {loading ? (
//         <div className="loadingMessage">Loading products...</div>
//       ) : error ? (
//         <div className="errorMessage">{error}</div>
//       ) : products.length === 0 ? (
//         <div className="noProductsMessage">No products available.</div>
//       ) : (
//         <div className="productGrid">
//           {products.map((product) => (
//             <div key={product.ProductID} className="productCard">
//               <img src={product.ImageUrl} alt={product.ProductName} className="productImage" />
//               <div className="productInfo">
//                 <h2 className="productTitle">{product.ProductName}</h2>
//                 <p className="productDescription">{product.Description}</p>
//                 <div className="productBottom">
//                   <span className="productPrice">₦{product.Price}</span>
//                   <button className="buyNowButton" onClick={() => handleBuyNowClick(product.ProductID)}>
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Shop;

import React, { useState, useEffect } from 'react';
import { fetchAffiliateProducts } from '../utils/api'; // Ensure API is set up
import { FaShoppingCart } from "react-icons/fa";
import './styles/shop.css'; // Updated CSS

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchAffiliateProducts();
        setProducts(data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);


  return (
    <div className="shopContainer">
      <nav className="shopHeader">
        <h1><FaShoppingCart /> Online Store</h1>
        <p>Discover the best tech gadgets and accessories at great prices.</p>
      </nav>

      {loading ? (
        <div className="loadingMessage">Loading products...</div>
      ) : error ? (
        <div className="errorMessage">{error}</div>
      ) : products.length === 0 ? (
        <div className="noProductsMessage">No products available.</div>
      ) : (
        <div className="productGrid">
          {products.map((product) => (
            <div key={product.ProductID} className="productCard">
              <img src={product.ImageUrl} alt={product.ProductName} className="productImage" />
              <div className="productInfo">
                <h2 className="productTitle">{product.ProductName}</h2>
                <p className="productDescription">{product.Description}</p>
                <div className="productBottom">
                  <span className="productPrice">₦{product.Price}</span>
                  <a
                    href={product.AliExpressLink}   // Display the actual AliExpressLink
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buyNowButton"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;