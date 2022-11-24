import { useParams } from 'react-router-dom';

const Product2 = () => {

    const params = useParams();
    const { category } = params;


    return (
    <div> 
        <h1>{category}</h1>
    </div>
    );
};

export default Product2;

