import { Icon } from '@iconify/react';
import grocery15 from '@iconify-icons/maki/grocery-15';
import { Link } from 'react-router-dom';

const FloatingIcon = (props) => {
    const { items } = props;
    return (
        <div className="floating">
            <Link to="/cart">
                <div className="number">{items}</div>
                <div className="icon">
                    <Icon icon={grocery15} />
                </div>
            </Link>
        </div>
    );
}

export default FloatingIcon;