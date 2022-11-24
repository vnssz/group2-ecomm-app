// eslint-disable-next-line
import { useState } from "react"; 
import { Link } from 'react-router-dom';
import data from "./data";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

const textSty01={
  fontFamily: 'Be Vietnam',
  fontSize: 16,
  fontWeight: 'bold'
}

function Home() {
  return (
    <div className="Home" >
      <header className="Home-header">
      </header>
      <main>
        <h1> Featured Products</h1>
        <div className="products">
          {
            data.products.map(product => (
              <div className="product" key={product.category}>
                <Link to={`/product/${product.category}`}>
                  <Image src={product.image} alt={product.name}/>
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.category}`}>
                    <p><strong>{product.name}</strong></p>
                  </Link>
                  <p>{product.slug}</p>
                  <p>{product.price}</p>
                  <Button className="button-cart">
                    Add to cart
                  </Button>
                </div>
              </div>
            ))                          
          }
        </div>
      </main>
    </div>
  );
}

export default Home;
