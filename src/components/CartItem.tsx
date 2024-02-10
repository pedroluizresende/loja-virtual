import { CartItemDiv, InfoSection } from "../styles/cartItem"
import { FaTrash } from "react-icons/fa";

function CartItem({id, image, name, price, quantity, removeProductFromCart} : {
  id: number,
  image: string,
  name: string,
  price: number,
  quantity: number,
  removeProductFromCart: (id: number) => void

}) {
  return (
    <CartItemDiv key={id}>
        <img src={image} alt={name} />
        <InfoSection>           
          <h3>{name}</h3>
            <p>{`R$ ${price.toFixed(2)}`}</p>
            <p>Quantidade: {quantity}</p>
        </InfoSection>
        <button onClick={ () => removeProductFromCart(id) }>
            <FaTrash />
        </button>
    </CartItemDiv>
  )
}

export default CartItem