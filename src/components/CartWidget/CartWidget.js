import './CartWidget.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react';
import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import CartContext from '../../contexts/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <Link to="/cart">
        <AiOutlineShoppingCart />
      </Link>
      {totalQuantity > 0 && (
        <Badge pill bg="danger">{totalQuantity}</Badge>
      )}
    </>
  );
}
 
export default CartWidget;