import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from '../firebase/firebaseConfig'; 
import './EcommercePage.css';

function EcommercePage() {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('all'); 

    useEffect(() => {
        async function getProducts() {
            let q;
            if (filter === 'all') {
                q = query(collection(db, "products"));
            } else {
                q = query(collection(db, "products"), where("category", "==", filter));
            }

            const querySnapshot = await getDocs(q);
            setProducts(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }

        getProducts();
    }, [filter]); 
    return (
        <div className="ecommerce-container">
            <div className="content-wrapper">
                <h1>Shop Page</h1>

                <div className="filter-container">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('cups')}>Cups</button>
                    <button onClick={() => setFilter('posters')}>Posters</button>
                    <button onClick={() => setFilter('tshirts')}>T-Shirts</button>
                </div>

                <div className="shop-container">
  {products.map(product => (
    <Link to={`/shop/${product.id}`} key={product.id} state={{ product }}>
      <div className="product">
        <img src={product.image} alt={product.name} className="product-image"/>
        <p className="product-name">{product.name}</p>
        <p className="product-price">{product.price}</p>
      </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EcommercePage;
