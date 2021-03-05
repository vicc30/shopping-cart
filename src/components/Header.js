import {Link} from 'react-router-dom';

const Head = () => {
    return (
        <div className="header">
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </div>
    );
}

export default Head;