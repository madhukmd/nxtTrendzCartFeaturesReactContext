import {MdRemoveShoppingCart} from 'react-icons/md'

import CartContext from '../../context/CartContext'

import Header from '../Header'
import CartListView from '../CartListView'

import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const removeAll = () => {
        removeAllCartItems()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="heading-remove-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="remove-all-button"
                    onClick={removeAll}
                  >
                    <div className="cartDiv">
                      <MdRemoveShoppingCart size={20} color="#0967d2" />
                    </div>
                    <p className="remove-all">Remove All</p>
                  </button>
                </div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
