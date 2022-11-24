import { useParams } from "react-router-dom";

const Product2 = () => {
    const params = useParams();
    const { category } = params;

    return (
        <main>
        <div>
            <h1>{category}</h1>
            <h2> hello</h2>
        </div>
        </main>
    );
};

export default Product2;
