import { Link } from 'react-router-dom';
import data from "./data";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

const Products = () => {
    return ( 
        <main>
            <h1> Latest Products</h1>
            <div className="products">
            {
                data.products.map(product => (
                <div className="product" key={product.category}>
                    <Link to={`/products/${product.category}`}>
                    <Image src={product.image} alt={product.name}/>
                    </Link>
                    <div className="product-info">
                    <Link to={`/products/${product.category}`}>
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
    );
}

export default Products;