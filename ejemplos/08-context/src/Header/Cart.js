import { useCart } from "../CartContext"

function Cart() {
  const cart = useCart()

  return (
    <span className="cart">
      {cart.length}🛒
    </span>
  )
}

export default Cart
