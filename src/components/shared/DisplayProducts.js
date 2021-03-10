import { Link } from 'react-router-dom';
function DisplayProducts(props) {
    const { addToCart, productList } = props;

    return productList.map((product) => {
        return (
            <>
                <div className="product" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <button onClick={() => addToCart(product, 1)}>Add to cart</button>
                    <Link to={`/shop/${product.id}`}>
                        Product Detail
                    </Link>
                </div>
            </>
        );
    });
}

export default DisplayProducts;