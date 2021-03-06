import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div className="header">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">Cart</Link>
        </div>
    );
}

export default Head;