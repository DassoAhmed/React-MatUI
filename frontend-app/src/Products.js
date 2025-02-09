import React from 'react';
import Product from './Product';
import './Products.css';
// import axios from 'axios';
import { useEffect, useState } from 'react';


const DUMMY_PRODUCTS = [
    {
    name:'Mobile Phone',
    Image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro/Blue-Titanium/Apple-iPhone-15-Pro-Blue-Titanium-thumbnail.png',
    price: 150,
    description:'Iphone 12 pro max',
    quantity: 20,
    },
    {
    name:'Mobile Phone',
    Image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro/Blue-Titanium/Apple-iPhone-15-Pro-Blue-Titanium-thumbnail.png',
    price: 150,
    description:'Iphone 12 pro max',
    quantity: 20,
    },
    {
    name:'Mobile Phone',
    Image: 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Pro/Blue-Titanium/Apple-iPhone-15-Pro-Blue-Titanium-thumbnail.png',
    price: 150,
    description:'Iphone 12 pro max',
    quantity: 20,
    }
]
const Products = () => {

    const [products,setProducts] = useState([]);

    useEffect(() => {
        const fetchHandler = async () => {
            await fetch('http://127.0.0.1:27017/shop') 
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch(err => console.log(err))
        };
        fetchHandler();
    },[]);
    console.log(products);
  return (
    <div className="main">
        <ul>
            {DUMMY_PRODUCTS.map((product,key)=>(
                <li key={key}>
                    <Product 
                    id={key} 
                    name={product.name} 
                    image={product.Image} 
                    price={product.price}
                    description={product.description} />
                </li>
            ))}
        </ul>
      
    </div>
  );
}

export default Products;
