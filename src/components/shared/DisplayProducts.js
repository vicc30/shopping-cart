function DisplayProducts(props) {
    const { addToCart, productList } = props;

    const productDetail = (product) => {
        console.log(product);
    }

    return productList.map((product) => {
        return (
            <>
                <div className="product" key={product.id}>
                    <img width="10%" src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <button onClick={() => addToCart(product, 1)}>Add to cart</button>
                    <button onClick={() => productDetail(product)}>Product Detail</button>
                </div>
            </>
        );
    });
}

export default DisplayProducts;