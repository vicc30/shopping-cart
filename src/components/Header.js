import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import grocery15 from '@iconify-icons/maki/grocery-15';
import bxsShoppingBags from '@iconify-icons/bx/bxs-shopping-bags';
import bxHomeCircle from '@iconify-icons/bx/bx-home-circle';

const Head = () => {
    return (
        <div className="header">
            <Link to="/"><Icon icon={bxHomeCircle} /> Home</Link>
            <Link to="/shop"><Icon icon={bxsShoppingBags} /> Shop</Link>
            <Link to="/cart"> <Icon icon={grocery15} /> Cart</Link>
        </div>
    );
}

export default Head;